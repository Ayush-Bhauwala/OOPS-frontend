import "./OrdersStyles.css";
import Header from "../headerComponents/Header";
import OrdersProduct from "./OrdersProduct";
import axios from "axios";
import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  function getOrders() {
    const id = 1;
    const url = `https://bargainstrial-production.up.railway.app/customer/getpastorders/${id}`;
    axios
      .get(url)
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
      <section style={{ backgroundColor: "#eee" }}>
        <div className="pt-3 text-center" style={{ color: "#383f51" }}>
          <h1>Your Orders</h1>
        </div>
        <div className="container py-3 h-100">
          {orders.map((order) => {
            const data = order.item.image.imageData;
            return (
              <OrdersProduct
                name={order.item.itemName}
                price={order.item.price}
                quantity={order.qtyBought}
                discount={order.item.offer}
                edd="30/12/2022"
                image={order.item.image.imageData}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Orders;
