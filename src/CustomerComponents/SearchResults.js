import "./SearchResultsStyles.css";
import Header from "../headerComponents/Header";
import SearchResultsProduct from "./SearchResultsProduct";

function SearchResults() {
  return (
    <>
      <Header user="customer" />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="pt-3 ms-3" style={{ color: "#383f51" }}>
          <h3>Showing search results for 'item'.</h3>
        </div>
        <div className="container py-3">
          <SearchResultsProduct
            name="Product Name 1"
            price="10000"
            discount="2000"
            manager="Manager 1"
          />
          <SearchResultsProduct
            name="Product Name 2"
            price="20000"
            discount="0"
            manager="Manager 2"
          />
          <SearchResultsProduct
            name="Product Name 3"
            price="25000"
            discount="1000"
            manager="Manager 3"
          />
        </div>
      </section>
    </>
  );
}

export default SearchResults;
