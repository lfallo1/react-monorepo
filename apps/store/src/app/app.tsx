import { Banner } from '@react-monorepo/common-ui';
import { exampleProducts } from '@react-monorepo/products';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  return (
    <>
      <Banner text="Welcome to the store!" />
      <ul>
        {exampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> Price: {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
