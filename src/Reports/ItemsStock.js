import { useEffect, useState } from "react";
import axios from "axios";
function ItemsStock() {
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
  useEffect(() => getItems(), []);
  return (
    <>
      <h1>Item Stock Status</h1>
      <table>
        <thead>
          <tr>
            <td>Item Name</td>
            <td>Stock</td>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <td>{item.itemName}</td>
                <td>{item.qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default ItemsStock;
