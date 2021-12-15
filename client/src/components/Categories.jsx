import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../data';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return <Container>
    {categories.map((item, index) => (
      <CategoryItem ditem={item} key={index}>

      </CategoryItem>
    ))}
  </Container>;
};

export default Categories;
