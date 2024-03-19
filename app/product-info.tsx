import RevalidateButton from './revalidate-button';
import { Product } from './types';
export default function ProductInfo({
  handleTag,
  idTag,
  product,
}: {
  handleTag: string;
  idTag: string;
  product: Product;
}) {
  return (
    <div>
      <h4>Product</h4>
      {product && (
        <div style={{ margin: '10px' }}>
          <div>
            id: <span style={{ color: 'orange', font: 'monospace' }}>{product.id}</span>
          </div>

          <div>
            handle: <span style={{ color: 'orange', font: 'monospace' }}>{product.handle}</span>
          </div>

          <div>
            Stock: <span style={{ color: 'orange', font: 'monospace' }}>{product.stock}</span>
          </div>

          <div>
            Price: <span style={{ color: 'orange', font: 'monospace' }}>{product.price}</span>
          </div>
        </div>
      )}

      <RevalidateButton
        borderColor="pink"
        label="revalidate by original tag (handle)"
        tags={[handleTag]}
      />
      <RevalidateButton borderColor="red" label="revalidate by re-tagged tag (id)" tags={[idTag]} />
    </div>
  );
}
