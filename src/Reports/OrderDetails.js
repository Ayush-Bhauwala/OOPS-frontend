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
      <h1 className="text-center mb-3 mt-2">Order details of customer</h1>
      <div className="table-responsive text-center">
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Item Price</th>
              <th scope="col">Quantity Bought</th>
              <th scope="col">Date Bought</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
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
      </div>
    </>
  );
}
export default OrderDetails;
