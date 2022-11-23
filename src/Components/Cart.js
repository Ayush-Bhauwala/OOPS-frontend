import { useEffect, useState } from "react";
import Header from "../headerComponents/Header";
import axios from "axios";

function Cart() {
  const [qty, setQty] = useState(2);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [imgSrc, setImgSrc] = useState("");
  const [maxQty, setMaxQty] = useState(1);
  function getCart() {
    axios({
      method: "get",
      url: "http://localhost:8080/customer/getcart/1",
    }).then((res) => {
      setQty(res.data[0].qtybought);
      setItemName(res.data[0].itemClass.itemName);
      setPrice(res.data[0].itemClass.price);
      setMaxQty(res.data[0].itemClass.qty);
    });
    axios({
      method: "get",
      url: "http://localhost:8080/customer/getcart/1",
    }).catch((err) => console.log(err));
  }
  console.log(maxQty);
  useEffect(() => {
    getCart();
  }, []);

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
              <td>Item Name</td>
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
              <td>
                <img></img>
              </td>
              <td>{itemName}</td>
              <td>₹{price}</td>
              <td>
                <input
                  type="number"
                  defaultValue={qty}
                  min="1"
                  max={maxQty}
                  id="x"
                  onChange={() =>
                    setQty(parseInt(document.getElementById("x").value))
                  }
                ></input>
              </td>
              <td>₹{qty * price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
