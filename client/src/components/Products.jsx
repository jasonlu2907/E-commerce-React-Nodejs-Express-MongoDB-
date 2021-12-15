import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../data';

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {/* ngFor products */}
      {popularProducts.map((item) => (
        <Product product={item} key={item.id}></Product>
      ))}
    </Container>
  );
};

export default Products;
