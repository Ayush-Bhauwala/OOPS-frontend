import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState([]);
  const params = useParams();
  const email = params.email;
  console.log(email);
  //   function getOrderDetails() {
  //     axios
  //       .post(
  //         "https://bargainstrial-production.up.railway.app/admin/customerhistory",
  //         {}
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         setOrderDetails(res.data);
  //       });
  //   }
  //   useEffect(() => getOrderDetails(), []);
  return (
    <>
      <h1>Order details of customer</h1>
      <table>
        <thead>
          <tr>
            <td>Item Name</td>
            <td>Item Price</td>
            <td>Quantity Bought</td>
            <td>Date Bought</td>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((order) => {
            return (
              <tr>
                <td>{order.item.itemName}</td>
                <td>{order.item.price}</td>
                <td>{order.qtyBought}</td>
                <td>{order.soldAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default OrderDetails;
