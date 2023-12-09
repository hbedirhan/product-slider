import React from 'react';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import ProductDetail from '../components/ProductDetail'
import { useParams } from 'react-router-dom';
import products from '../components/data/product';

function Product() {

  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id, 10));
  
  return (
    <>
      <Navbar/>
      <ThemeToggle/>
      <ProductDetail product={product}/>
    </>
  )
}

export default Product;