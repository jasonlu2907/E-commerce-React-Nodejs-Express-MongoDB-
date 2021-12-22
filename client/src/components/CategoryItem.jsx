import styled from 'styled-components';
import { mobile } from '../responesive';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({
    height: '30vh'
  })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
`;
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ ditem }) => {
  return (
    <Container>
      <Image src={ditem.img} />
      <Info>
        <Title>{ditem.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
