import { useState } from "react";
import axios from "axios";

function CreateTable(props) {
  const data = props.imgString;
  const [qty, setQty] = useState(props.qty);
  // setSubTotal((prevValue) => [...prevValue, qty * props.price]);
  function deleteItem(itemID) {
    setItemsDetails(
      itemsDetails.filter((item) => item.itemClass.itemId != itemID)
    );
    axios
      .post("http://localhost:8080/customer/deletefromcart", {
        userid: 1,
        productid: itemID,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <tbody>
        <tr>
          <td style={{ width: "10%" }}>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              //   onClick={() => deleteItem(props.itemID)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
          <td style={{ width: "30%" }}>
            <img src={`data:image/jpeg;base64,${data}`} width="20%" />
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
                if (e.target.value > props.maxQty) {
                  alert("Max quantity available is " + props.maxQty);
                  setQty(props.maxQty);
                  e.target.value = props.maxQty;
                }
              }}
            ></input>
          </td>
          <td id="subtotal" key={props.itemID}>
            ₹{qty * props.price}
          </td>
        </tr>
      </tbody>
    </>
  );
}
export default CreateTable;
