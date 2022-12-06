import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import "./SearchResultsStyles.css";
import Header from "../headerComponents/Header";
import SearchResultsProduct from "./SearchResultsProduct";
import { parseWithOptions } from "date-fns/fp";
import ManagerProduct from "../ManagerComponents/ManagerProduct";
function SearchResults() {
  const params = useParams();
  const searchInput = params.searchInput;
  const [searchResults, setSearchResults] = useState([]);
  const role = localStorage.getItem("role");
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
  function delItem(item) {
    console.log(item);
    setSearchResults(searchResults.filter((x) => x.itemId !== item.itemId));
  }

  function delItem(product) {
    setSearchResults(searchResults.filter((x) => x.itemId !== product.itemId));
    console.log(product);
    axios.post("https://bargainstrial-production.up.railway.app/deleteItem", {
      userid: localStorage.getItem("userid"),
      productid: product.itemId,
    });
  }
  useEffect(() => {
    console.log("Search input:" + searchInput);
    getItems();
  }, [params]);
  return (
    <>
      <Header user={role} />
      <div style={{ backgroundColor: "#eee", minHeight: "100vh" }}>
        <div className="pt-3 ms-3" style={{ color: "#383f51" }}>
          <h3>Showing search results for {searchInput}.</h3>
        </div>
        <div className="container py-3">
          {searchResults.map((item) => {
            const data = item.image === null ? "" : item.image.imageData;
            if (role === null || role === "CUSTOMER") {
              return (
                <SearchResultsProduct
                  name={item.itemName}
                  price={item.price}
                  discount={item.offer}
                  image={data}
                  itemId={item.itemId}
                  description={item.description}
                />
              );
            } else {
              return (
                <ManagerProduct
                  name={item.itemName}
                  price={item.price}
                  discount={item.offer}
                  image={data}
                  itemId={item.itemId}
                  delItem={delItem}
                  item={item}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
