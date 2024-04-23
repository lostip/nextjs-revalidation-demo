import { getProductHandleTag, getProductIdTag, getTestProduct } from './actions';
import ProductInfo from '../product-info';

export const metadata = {
  description: 'Test 2',
  title: 'Test 2',
};

export function generateStaticParams() {
  return [];
}

export default async function Test2Page() {
  const product = await getTestProduct();

  return (
    <main style={{ fontSize: '20px', padding: '24px' }}>
      <h2>Test 2 fetches (server action): w/ 1 tag, then re-fetch w/ 2 tags</h2>
      {product && (
        <ProductInfo
          handleTag={getProductHandleTag()}
          idTag={getProductIdTag()}
          product={product}
        />
      )}
    </main>
  );
}
