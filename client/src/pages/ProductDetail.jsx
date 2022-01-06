import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { Add, Remove } from '@material-ui/icons';
// import Image from '@material-ui/system';
import { mobile } from '../responesive';

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethods';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: '10px',
    flexDirection: 'column',
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    heigth: '40vh',
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding: '10px',
  })}
`;
const Tilte = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: '100%',
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTilte = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px 10px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({
    width: '100%',
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  const handlequantity = (type) => {
    if (type === 'dec') quantity > 1 ? setQuantity(quantity - 1) : 1;
    else setQuantity(quantity + 1);
  };
  const handleClick = () => {
    
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img}></Image>
        </ImgContainer>

        <InfoContainer>
          <Tilte>{product.title}</Tilte>
          <Desc>
            {product.desc} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veritatis explicabo tempora minus aspernatur sint quae, dolor
            aperiam pariatur! Exercitationem dolorum cum a reprehenderit esse
            odio, inventore quo blanditiis. Repudiandae, rerum.
          </Desc>
          <Price>${product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTilte>Color:</FilterTilte>
              {product.color?.map((element) => (
                <FilterColor
                  color={element}
                  key={element}
                  onClick={() => setColor(element)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTilte>Size:</FilterTilte>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((element) => (
                  <FilterSizeOption key={element}>{element}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handlequantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handlequantity('inc')} />
            </AmountContainer>
            <Button onClick={() => handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;