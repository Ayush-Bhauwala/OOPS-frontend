import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import "./SearchResultsStyles.css";
import Header from "../headerComponents/Header";
import SearchResultsProduct from "./SearchResultsProduct";
import { parseWithOptions } from "date-fns/fp";

function SearchResults() {
  const params = useParams();
  const searchInput = params.searchInput;
  const [searchResults, setSearchResults] = useState([]);

  function getItems() {
    const url = `https://bargainstrial-production.up.railway.app/search/${searchInput}`;
    axios({
      method: "get",
      url: url,
    }).then((res) => {
      console.log(res.data);
      setSearchResults(res.data);
    });
  }

  useEffect(() => {
    console.log("Search input:" + searchInput);
    getItems();
  }, [params]);
  return (
    <>
      <Header user="customer" />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="pt-3 ms-3" style={{ color: "#383f51" }}>
          <h3>Showing search results for {searchInput}.</h3>
        </div>
        <div className="container py-3">
          {/* <SearchResultsProduct
            name="Product Name 1"
            price="10000"
            discount="2000"
            manager="Manager 1"
          /> */}
          {searchResults.map((item) => {
            const data = item.image.imageData;
            return (
              <SearchResultsProduct
                name={item.itemName}
                price={item.price}
                discount={item.offer}
                image={data}
                itemId={item.itemId}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default SearchResults;
