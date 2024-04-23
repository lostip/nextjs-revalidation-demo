import { Product } from '../types';

const API_BASE = 'https://65f9e7b63909a9a65b199fe3.mockapi.io/api';

const ID = '2';
const HANDLE = 'loose-pot';

export function getProductHandleTag() {
  return `products:handle:${HANDLE}`;
}

export function getProductIdTag() {
  return `products:id:${ID}`;
}

export async function getTestProduct() {
  const url = `${API_BASE}/products?handle=${HANDLE}`;

  let product: Product | undefined;
  try {
    const originalTags = [getProductHandleTag()];
    let result = await fetch(url, {
      cache: 'force-cache',
      method: 'GET',
      next: { tags: originalTags },
    });

    let response: Product[] = await result.json();
    if (response) {
      console.log('response = ', JSON.stringify(response, null, 2)); // TODO (denise) remove log
    } else {
      console.log('!!response = ', !!response); // TODO (denise) remove log
    }
    if (response && response.length > 0 && response[0]) {
      product = response[0];
      console.log(`1st tag result: [${originalTags.join(',')}]`, JSON.stringify(product, null, 2)); // TODO (denise) remove log

      if (product) {
        const newTags = [getProductHandleTag(), getProductIdTag()];
        result = await fetch(url, {
          cache: 'force-cache',
          method: 'GET',
          next: {
            tags: newTags,
          },
        });

        response = await result.json();
        if (response && response.length > 0 && response[0]) {
          product = response[0];
          console.log(`re-tagged result: [${newTags.join(',')}]`, JSON.stringify(product, null, 2)); // TODO (denise) remove log
        }
      }
    }
  } catch (e) {
    console.log('e = ', e); // TODO (denise) remove log
  }

  return product;
}
