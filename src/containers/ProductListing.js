import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://fakestoreapi.com/products`
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson)
      dispatch(setProducts(resJson));
    }
    fetchApi();
  }, []);

  // console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;