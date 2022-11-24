import { useEffect, useRef, useState } from "react";
import Header from "../headerComponents/Header";
import axios from "axios";

function CreateTable(props) {
  const [qty, setQty] = useState(props.qty);
  return (
    <>
      <tbody>
        <tr>
          <td>
            <i className="fa-solid fa-trash"></i>
          </td>
          <td>
            <img></img>
          </td>
          <td>{props.itemName}</td>
          <td>₹{props.price}</td>
          <td>
            <input
              type="number"
              defaultValue={qty}
              min="1"
              max={props.maxQty}
              id="x"
              onChange={(e) => {
                setQty(parseInt(e.target.value));
              }}
            ></input>
          </td>
          <td>₹{qty * props.price}</td>
        </tr>
      </tbody>
    </>
  );
}

function Cart() {
  const [itemsDetails, setItemsDetails] = useState([]);
  function getCart() {
    axios({
      method: "get",
      url: "http://localhost:8080/customer/getcart/1",
    }).then((res) => {
      setItemsDetails(res.data);
    });
    axios({
      method: "get",
      url: "http://localhost:8080/customer/getcart/1",
    }).catch((err) => console.log(err));
  }
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <Header user="customer" />
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
        {itemsDetails.map((item) => (
          <CreateTable
            qty={item.qtybought}
            itemName={item.itemClass.itemName}
            price={item.itemClass.price}
            maxQty={item.itemClass.qty}
          />
        ))}
      </table>
    </>
  );
}

export default Cart;
