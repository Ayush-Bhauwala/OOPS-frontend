import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ItemsDate() {
  const params = useParams();
  const date = params.date;
  const [items, setItems] = useState([]);
  function getItems() {
    axios
      .post(
        "https://bargainstrial-production.up.railway.app/admin/itemsoldat",
        {
          requesterId: localStorage.getItem("userid"),
          date: date,
        }
      )
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => err);
  }

  useEffect(() => getItems(), []);

  return (
    <>
      <h1>Items sold on {date}</h1>
      <table>
        <thead>
          <tr>
            <td>Item Name</td>
            <td>Item Price</td>
            <td>Quantity Bought</td>
            <td>Buyer Name</td>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <td>{item.item.itemName}</td>
                <td>{item.item.price}</td>
                <td>{item.qtyBought}</td>
                <td>{item.buyer.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default ItemsDate;
