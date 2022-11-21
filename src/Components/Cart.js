import { useEffect, useState } from "react";
import Header from "../headerComponents/Header";
// import axios from "axios";
function Cart() {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(2);
  // function getCart() {
  //   axios({ method: "get", url: "http://localhost:8080/get/1" }).then((res) =>
  //     console.log(res)
  //   );
  //   axios({ method: "get", url: "http://localhost:8080/get/1" }).catch((err) =>
  //     console.log(err)
  //   );
  // }
  // useEffect(() => {
  //   getCart();
  // });
  return (
    <>
      <Header user="customer" />
      <div>
        <h1>Your Cart</h1>
        <table width="100%">
          <thead>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="fa-solid fa-trash"></i>
              </td>
              <td>{/* <img src="./Images/supermarket.jpg"></img> */}</td>
              <td>Product Name</td>
              <td>₹999.99</td>
              <td>
                <p>{qty}</p>
                <button>+</button>
                <button>-</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
