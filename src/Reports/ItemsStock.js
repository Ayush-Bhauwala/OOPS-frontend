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
      <h1 className="text-center mb-3 mt-2">Item Stock Status</h1>
      <div className="table-responsive text-center">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
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
      </div>
    </>
  );
}
export default ItemsStock;
