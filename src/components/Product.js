import React, { useEffect } from "react";
import { fetchProducts } from "../store/actions/products";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
const Products = () => {
  const productsList = useSelector(state => state.Product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let products = productsList.map(ele => (
    <ProductCard key={ele.id} product={ele} />
  ));

  return <div className="row mt-3 mr-0 ml-0">{products}</div>;
};

export default Products;
