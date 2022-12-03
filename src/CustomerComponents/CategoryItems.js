import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../headerComponents/Header";
import SearchResultsProduct from "./SearchResultsProduct";

function CategoryItems() {
  const [items, setItems] = useState([]);
  const role = localStorage.getItem("role");
  const params = useParams();
  function getItems() {
    axios
      .get(
        `https://bargainstrial-production.up.railway.app/item/${params.category}`
      )
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      });
  }
  useEffect(() => getItems(), []);
  return (
    <>
      <Header user={role} />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="pt-3 ms-3" style={{ color: "#383f51" }}>
          <h3>Showing search results for {params.category.toLowerCase()}.</h3>
        </div>
        <div className="container py-3">
          {items.map((item) => {
            const data = item.image === null ? "" : item.image.imageData;
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
export default CategoryItems;
