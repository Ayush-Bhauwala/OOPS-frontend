import "./OrdersStyles.css";
import Header from "../headerComponents/Header";
import OrdersProduct from "./OrdersProduct";

function Orders() {
  return (
    <>
      <Header user="customer" />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="pt-3 text-center" style={{ color: "#383f51" }}>
          <h1>Your Orders</h1>
        </div>
        <div className="container py-3 h-100">
          <OrdersProduct
            name="Product Name 1"
            quantity="1"
            price="10000"
            discount="2000"
            edd="30/12/2022"
          />
          <OrdersProduct
            name="Product Name 2"
            quantity="5"
            price="20000"
            discount="0"
            edd="02/01/2023"
          />
          <OrdersProduct
            name="Product Name 3"
            quantity="10"
            price="25000"
            discount="1000"
            edd="10/01/2023"
          />
        </div>
      </section>
    </>
  );
}

export default Orders;
