import { useEffect, useState } from "react";
import Header from "../headerComponents/Header";
import axios from "axios";
import CartNew from "./CartNew";

function Cart() {
  const [itemsDetails, setItemsDetails] = useState([]);
  function getCart() {
    const id = localStorage.getItem("userid");
    const url = `http://localhost:8080/customer/getcart/${id}`;
    axios({
      method: "get",
      url: url,
    }).then((res) => {
      setItemsDetails(res.data);
    });
  }

  useEffect(() => {
    getCart();
    console.log("Inside use effect");
  }, []);

  function incQty(product) {
    if (product.itemClass.qty != product.qtybought) {
      const exist = itemsDetails.find(
        (x) => x.itemClass.itemId === product.itemClass.itemId
      );
      if (exist) {
        setItemsDetails(
          itemsDetails.map((x) =>
            x.itemClass.itemId === product.itemClass.itemId
              ? { ...exist, qtybought: exist.qtybought + 1 }
              : x
          )
        );
      }
    }
  }
  function decQty(product) {
    if (product.qtybought > 1) {
      const exist = itemsDetails.find(
        (x) => x.itemClass.itemId === product.itemClass.itemId
      );
      if (exist) {
        setItemsDetails(
          itemsDetails.map((x) =>
            x.itemClass.itemId === product.itemClass.itemId
              ? { ...exist, qtybought: exist.qtybought - 1 }
              : x
          )
        );
      }
    }
  }
  function delItem(product) {
    const exist = itemsDetails.find(
      (x) => x.itemClass.itemId === product.itemClass.itemId
    );
    setItemsDetails(
      itemsDetails.filter((x) => x.itemClass.itemId != product.itemClass.itemId)
    );
    axios
      .post("http://localhost:8080/customer/deletefromcart", {
        userid: 1,
        productid: product.itemClass.itemId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function checkout() {
    setItemsDetails([]);
    axios
      .post("http://localhost:8080/customer/buyfromcart", {
        user_id: 1,
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
      <Header user="customer" />
      <CartNew
        itemsDetails={itemsDetails}
        incQty={incQty}
        decQty={decQty}
        delItem={delItem}
        checkout={checkout}
      ></CartNew>
    </>
  );
  // const [total, setTotal] = useState(0);
  // const [subtotal, setSubTotal] = useState([]);
  // <CreateCart itemsDetails={itemsDetails}></CreateCart>;
  // function CreateTable(props) {
  //   const data = props.imgString;
  //   const [qty, setQty] = useState(props.qty);
  //   function deleteItem(itemID) {
  //     setItemsDetails(
  //       itemsDetails.filter((item) => item.itemClass.itemId != itemID)
  //     );
  //     axios
  //       .post("http://localhost:8080/customer/deletefromcart", {
  //         userid: 1,
  //         productid: itemID,
  //       })
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }

  //   return (
  //     <>
  //       <tbody>
  //         <tr>
  //           <td style={{ width: "10%" }}>
  //             <button
  //               style={{ border: "none", backgroundColor: "transparent" }}
  //               onClick={() => deleteItem(props.itemID)}
  //             >
  //               <i className="fa-solid fa-trash"></i>
  //             </button>
  //           </td>
  //           <td style={{ width: "30%" }}>
  //             <img src={`data:image/jpeg;base64,${data}`} width="20%" />
  //           </td>
  //           <td>{props.itemName}</td>
  //           <td>₹{props.price}</td>
  //           <td>
  //             <input
  //               type="number"
  //               defaultValue={qty}
  //               min="1"
  //               max={props.maxQty}
  //               id="x"
  //               onChange={(e) => {
  //                 setQty(parseInt(e.target.value));
  //                 setItemsDetails((prevValue) => {
  //                   prevValue.forEach((item) => {
  //                     console.log(item.itemClass.itemId);
  //                     if (item.itemClass.itemId == props.itemID) {
  //                       item.qtybought = e.target.value;
  //                     }
  //                   });
  //                 });
  //                 if (e.target.value > props.maxQty) {
  //                   alert("Max quantity available is " + props.maxQty);
  //                   setQty(props.maxQty);
  //                   e.target.value = props.maxQty;
  //                 }
  //               }}
  //             ></input>
  //           </td>
  //           <td id="subtotal">₹{qty * props.price}</td>
  //         </tr>
  //       </tbody>
  //     </>
  //   );
  // }
  // useEffect(() => {
  //   getCart();
  //   console.log("Inside use effect");
  // }, []);
  // console.log(subtotal);
  // function getCart() {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:8080/customer/getcart/1",
  //   }).then((res) => {
  //     setItemsDetails(res.data);
  //   });
  // }

  // return (
  //   <>
  //     <Header user="customer" />
  //     <BuyNowPopup price={total} balance="10000"></BuyNowPopup>
  //     <h1 style={{ padding: "1%", margin: "auto", width: "fit-content" }}>
  //       Your Cart
  //     </h1>
  //     <table style={{ padding: "10%", width: "100%", margin: "2%" }}>
  //       <thead style={{ margin: "2%", padding: "2%" }}>
  //         <tr>
  //           <td></td>
  //           <td></td>
  //           <td>Item Name</td>
  //           <td>Price</td>
  //           <td>Quantity</td>
  //           <td>Subtotal</td>
  //         </tr>
  //       </thead>
  //       {itemsDetails.map((item) => (
  //         <CreateTable
  //           qty={item.qtybought}
  //           itemName={item.itemClass.itemName}
  //           price={item.itemClass.price}
  //           maxQty={item.itemClass.qty}
  //           itemID={item.itemClass.itemId}
  //           imgString={item.itemClass.image.imageData}
  //           key={item.itemClass.itemId}
  //         />
  //       ))}
  //     </table>
  //     <button
  //       style={{ marginLeft: "auto" }}
  //       type="button"
  //       className="btn shop-button"
  //       data-bs-toggle="modal"
  //       data-bs-target="#exampleModal"
  //     >
  //       Checkout
  //     </button>
  //   </>
  // );
}

export default Cart;
