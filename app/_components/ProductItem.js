import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  let imgUrl = product?.attributes?.img.data[0].attributes.url;
  // console.log(`imgUrl `, imgUrl);
  let img = `http://localhost:1337${imgUrl}`;
  //   console.log(` img `, img);
  //   let url = `http://localhost:1337`;
  return (
    <div className=" shadow-sm bg-slate-50 rounded-md ">
      <div className=" py-3">
        <img src={img} className=" rounded-lg h-48 object-cover mx-auto" />
      </div>

      <div className="font-semibold text-xl text-blue-950 p-3 text-center">
        {product?.attributes?.title}
      </div>
      <div className="font-medium text-xl text-black p-3 text-center">
        Rs: {product?.attributes?.price}
      </div>
      <div className="mb-3 text-sm md:text-lg font-medium text-gray-700 p-3 pb-6 md:text-center max-sm:line-clamp-4 ">
        {product?.attributes?.description[0].children[0].text}
      </div>
    </div>
  );
};

export default ProductItem;
