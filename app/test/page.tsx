import { getProductHandleTag, getProductIdTag, getTestProduct } from './actions';
import ProductInfo from '../product-info';
import {cookies} from "next/headers";

type SearchParams = { [key: string]: string | string[] | undefined };
type PropTypes = { searchParams?: SearchParams };

export const metadata = {
  description: 'Test',
  title: 'Test - dynamic',
};

export function generateStaticParams() {
  return [];
}

function toURLSearchParams(searchParams: SearchParams = {}): URLSearchParams {
  const result = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    if (!value) return;

    if (Array.isArray(value)) {
      value.forEach((v) => result.append(key, v));
      return;
    }

    result.set(key, value);
  });

  return result;
}


export default async function TestPage({ searchParams }: PropTypes) {

  const handle = searchParams ? toURLSearchParams(searchParams).get('handle') : '';
  if (!handle) return null;

  const product = await getTestProduct(handle);
  cookies();

  return (
    <main style={{ fontSize: '20px', padding: '24px' }}>
      <h2>Test 2 fetches (server action): w/ 1 tag, then re-fetch w/ 2 tags</h2>
      {product && (
        <ProductInfo
          handleTag={getProductHandleTag(product.handle)}
          idTag={getProductIdTag(product.id)}
          product={product}
        />
      )}
    </main>
  );
}
