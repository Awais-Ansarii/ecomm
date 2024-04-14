"use client";
import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import ProductList from "./ProductList";

const ProductSection = () => {
  const [productList, setProductList] = useState([]);
  const getLatestProducts = () => {
    GlobalApi.getLatestProducts().then((resp) => {
      console.log(`working`);
      console.log(resp.data.data);
      setProductList(resp.data.data);
    });
  };
  useEffect(() => {
    getLatestProducts();
  }, []);
  return (
    <div className="pt-6">
     
      <ProductList productList={productList} />
    </div>
  );
};

export default ProductSection;
