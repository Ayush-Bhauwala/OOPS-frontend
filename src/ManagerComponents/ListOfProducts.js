import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../CustomerComponents/SearchResultsStyles.css";
import Header from "../headerComponents/Header";
import ManagerProduct from "./ManagerProduct";
function ListOfProducts() {
  const [items, setItems] = useState([]);
  function getItems() {
    const url = `https://bargainstrial-production.up.railway.app/items`;
    axios
      .post(url, {
        id: localStorage.getItem("userid"),
      })
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      });
  }

  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <Header user={localStorage.getItem("role")} />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-3">
          {/* <SearchResultsProduct
            name="Product Name 1"
            price="10000"
            discount="2000"
            manager="Manager 1"
          /> */}
          {items.map((item) => {
            const data = item.image.imageData;
            return (
              <ManagerProduct
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
export default ListOfProducts;
