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
      <h1 className="text-center mb-3 mt-2">Items sold on {date}</h1>
      <div className="table-responsive text-center">
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Item Price</th>
              <th scope="col">Quantity Bought</th>
              <th scope="col">Buyer Name</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {items.map((item) => {
              return (
                <tr>
                  <td>{item.item.itemName}</td>
                  <td>{item.item.price}</td>
                  <td>{item.qtyBought}</td>
                  <td>
                    {item.buyer === null
                      ? "User does not exist"
                      : item.buyer.name}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ItemsDate;
