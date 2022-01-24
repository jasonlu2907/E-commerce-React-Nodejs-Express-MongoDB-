import styled from 'styled-components';
import Product from './Product';
// import { popularProducts } from '../data';

import React, { useState, useEffect } from 'react';

const axios = require('axios');

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

const Products = ({ cate, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // TODO: GET ALL THE PRODUCTS (within the specific cate or not)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await axios.get(
          cate
            ? `http://localhost:5000/api/v1/products?category=${cate}`
            : `http://localhost:5000/api/v1/products`
        );
        // console.log(products);
        setProducts(products.data);
      } catch (err) {}
    };

    getProducts();
  }, [cate]);

  // TODO: FILTER THE PRODUCTS BASED ON THE FILTERING OPTION
  useEffect(() => {
    cate &&
      setFilteredProducts(
        products.filter((item) =>
          //const obj = { 0: 'a', 1: 'b', 2: 'c' };
          //console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
          //every: Array.prototype.every()
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cate, filters]);

  // TODO: FILTER THE PRODUCTS BASED ON THE SORTING OPTION
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {/* ngFor products */}
      {cate
        ? filteredProducts.map((item) => (
            <Product product={item} key={item._id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <Product product={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
