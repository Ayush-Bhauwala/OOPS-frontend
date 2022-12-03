import "./plist2.css";
import ProductCard from "./ProductCard";
import Header from "../headerComponents/Header";

function ProductList2() {
  return (
    <>
      <div style={{backgroundColor:"#eee"}}>
        <Header user="manager" />
        <div className="py-4">
          <h1 className="text-center">List of Products</h1>
          <div class="container clannad rounded">
            <ProductCard name="Heathen" />
            <ProductCard name="Crusher" />
            <ProductCard name="Hermano" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList2;
