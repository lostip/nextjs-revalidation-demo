import { getProductHandleTag, getProductIdTag, getTestProduct } from './actions';

export const metadata = {
  description: 'Test 1',
  title: 'Test 1',
};

import ProductInfo from '../product-info';

export default async function Test1Page() {
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
