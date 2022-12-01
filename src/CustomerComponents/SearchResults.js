import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import "./SearchResultsStyles.css";
import Header from "../headerComponents/Header";
import SearchResultsProduct from "./SearchResultsProduct";

function SearchResults(props) {
  const [itemsDetails, setItemsDetails] = useState([]);
  const [searchParams] = useSearchParams();
  const [item, setItem] = useState("");

  function getItems() {
    const id = localStorage.getItem("userid");
    const url = `https://bargainstrial-production.up.railway.app/search`;
    console.log(item);
    axios({
      method: "post",
      url: url,
      data: {
        userid: 2,
        search: item,
      },
    }).then((res) => {
      console.log(res.data);
      setItem(searchParams.get("item"));
      setItemsDetails(res.data);
    });
  }

  useEffect(() => {
    getItems();
    console.log("Inside use effect");
  }, []);

  return (
    <>
      <Header user="customer" />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="pt-3 ms-3" style={{ color: "#383f51" }}>
          <h3 onChange={() => getItems()}>
            Showing search results for {searchParams.get("item")}.
          </h3>
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
