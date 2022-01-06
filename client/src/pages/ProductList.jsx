import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responesive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    width: '0 20px',
    display: 'flex',
    flexDirection: 'column',
  })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  ${mobile({
    marginRight: '0',
  })}
`;

const Select = styled.select`
  padding: 10px 20px;
  margin-right: 20px;
  ${mobile({
    margin: '5px 0',
  })}
`;
const Option = styled.option`
  font-size: 16px;
`;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  // console.log(category);

  // TODO: CREATE FILTERING OPTION
  const [filters, setFilters] = useState({});
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  // console.log(filters);

  const [sort, setSort] = useState('newest');

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>

          <Select name='size' onChange={handleFilters}>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='dsc'>Price (dsc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products cate={category} filters={filters} sort={sort} />

      <Newsletter />
    </Container>
  );
};

export default ProductList;
