import ProductItem from "./ProductItem";

const ProductList = ({ productList }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {productList.map((item, index) => {
        return <ProductItem product={item} key={index} />;
      })}
    </div>
  );
};

export default ProductList;
