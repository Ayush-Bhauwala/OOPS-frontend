import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../CustomerComponents/SearchResultsStyles.css";
import Header from "../headerComponents/Header";
import ManagerProduct from "./ManagerProduct";
import ProductCard from "./ProductCard";

function ListOfProducts() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
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
  function delItem(product) {
    setItems(items.filter((x) => x.itemId != product.itemId));
    axios.post("https://bargainstrial-production.up.railway.app/deleteItem", {
      userid: localStorage.getItem("userid"),
      productid: product.itemId,
    });
  }
  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <Header user={localStorage.getItem("role")} />
      <div className="pt-3 ms-3" style={{ color: "#383f51" }}>
        <h3>LIST OF PRODUCTS</h3>
      </div>
      <div
        style={{
          backgroundColor: "#eee",
          color: "#383f51",
          minHeight: "100vh",
        }}
      >
        <div className="py-3 container clannad rounded">
          {items.map((item) => {
            const data = item.image === null ? "" : item.image.imageData;
            return (
              <ProductCard
                name={item.itemName}
                price={item.price}
                image={data}
                id={item.itemId}
                item={item}
                delItem={delItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ListOfProducts;
