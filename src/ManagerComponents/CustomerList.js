import "./mliststyle.css";
import Header from "../headerComponents/Header";
import Footer from "../AccountComponents/Footer";
import ManagerCard from "./ManagerCard";
import { useEffect, useState } from "react";
import axios from "axios";

function CustomerList() {
  const role = localStorage.getItem("role");
  const [customers, setCustomers] = useState([]);

  function getCustomers() {
    axios
      .post(
        "https://bargainstrial-production.up.railway.app/admin/getcustomers",
        {
          requesterId: localStorage.getItem("userid"),
        }
      )
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data);
      });
  }

  function delItem(customer) {
    setCustomers(customers.filter((x) => x.email !== customer.email));
    axios
      .post(
        "https://bargainstrial-production.up.railway.app/admin/removeuser",
        {
          email: customer.email,
          senderid: localStorage.getItem("userid"),
        }
      )
      .then((res) => console.log(res.data));
  }

  useEffect(() => getCustomers(), []);

  return (
    <div className="" style={{ backgroundColor: "#eee", color: "#383f51" }}>
      <Header user={localStorage.getItem("role")} />
      <main class="my-5" />
      <section class="text-center">
        <h3 class="managertext">
          <strong>LIST OF CUSTOMERS</strong>
        </h3>
      </section>
      <div class="container clannad">
        {customers.map((customer) => (
          <ManagerCard
            name={customer.name}
            phone={customer.phoneNo}
            email={customer.email}
            address={customer.address}
            manager={customer}
            delItem={delItem}
          />
        ))}
        {/* <ManagerCard name="Customer 1" />
        <ManagerCard name="Customer 2" />

        <ManagerCard name="Customer 3" />
        <ManagerCard name="Customer 4" /> */}

        {/* <div class="row">
            <ManagerCard name="Manager 4" />

            <ManagerCard name="Manager 5" />

            <ManagerCard name="Manager 5" />
          </div>

          <div class="row">
            <ManagerCard name="Manager 5" />
            <ManagerCard name="Manager 5" />
            <ManagerCard name="Manager 5" />
          </div> */}

        {/*  <div class="align text-center man ">
          <button class="btn btn-lg" type="submit">
            GENERATE REPORTS
          </button>
        </div> 

        <nav class="my-4" aria-label="...">
          <ul class="pagination pagination-circle justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">
                2 <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default CustomerList;
