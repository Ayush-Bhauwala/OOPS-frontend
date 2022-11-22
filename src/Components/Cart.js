import { useEffect, useState } from "react";
import Header from "../headerComponents/Header";
import axios from "axios";

function Cart() {
  const [qty, setQty] = useState(0);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [imgSrc, setImgSrc] = useState("");
  var maxQty = 1;
  function getCart() {
    axios({
      method: "get",
      url: "http://localhost:8080/customer/getcart/1",
    }).then((res) => {
      setQty(res.data[0].qtybought);
      setItemName(res.data[0].itemClass.itemName);
      setPrice(res.data[0].itemClass.price);
      maxQty = res.data[0].itemClass.qty;
    });
    axios({
      method: "get",
      url: "http://localhost:8080/customer/getcart/1",
    }).catch((err) => console.log(err));
  }

  useEffect(() => {
    getCart();
  }, []);
  function increaseQty() {
    if (qty < maxQty) {
      setQty((prevQty) => prevQty + 1);
    }
  }

  function decreaseQty() {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  }

  return (
    <>
      <Header />
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
              <td>{itemName}</td>
              <td>₹{price}</td>
              <td>
                {qty}
                <button onClick={increaseQty}>+</button>
                <button onClick={decreaseQty}>-</button>
              </td>
              <td>{qty * price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
