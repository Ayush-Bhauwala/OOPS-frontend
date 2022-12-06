import "./OrdersStyles.css";
import Header from "../headerComponents/Header";
import OrdersProduct from "./OrdersProduct";
import axios from "axios";
import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  function getOrders() {
    const id = localStorage.getItem("userid");
    console.log(id);
    const url = `https://bargainstrial-production.up.railway.app/customer/getpastorders/`;
    axios
      .post(url, {
        id: id,
      })
      .then(function (response) {
        console.log(response);
        setOrders(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getOrders();
    console.log("Inside use effect");
  }, []);
  return (
    <>
      <Header user="CUSTOMER" />
      <div style={{ backgroundColor: "#eee" }}>
        <div className="pt-3 text-center" style={{ color: "#383f51" }}>
          <h1>Your Orders</h1>
        </div>
        <div className="container py-3 h-100">
          {orders.map((order) => {
            const data =
              order.item.image === null ? "" : order.item.image.imageData;
            return (
              <OrdersProduct
                name={order.item.itemName}
                price={order.item.price}
                quantity={order.qtyBought}
                discount={order.item.offer}
                sold={order.soldAt}
                image={data}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Orders;
