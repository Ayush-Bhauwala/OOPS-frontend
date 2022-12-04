import "./mliststyle.css";
import Header from "../headerComponents/Header";
import Footer from "../AccountComponents/Footer";
import ManagerCard from "./ManagerCard";
import axios from "axios";
import { useEffect, useState } from "react";

function ManagerList() {
  const role = localStorage.getItem("role");
  const [managers, setManagers] = useState([]);
  function getManagers() {
    axios
      .post(
        "https://bargainstrial-production.up.railway.app/admin/getapprovedmanagers",
        {
          requesterId: localStorage.getItem("userid"),
        }
      )
      .then((res) => setManagers(res.data));
  }
  useEffect(() => getManagers(), []);

  function delItem(manager) {
    setManagers(managers.filter((x) => x.email !== manager.email));
    axios
      .post(
        "https://bargainstrial-production.up.railway.app/admin/removeuser",
        {
          email: manager.email,
          senderid: localStorage.getItem("userid"),
        }
      )
      .then((res) => console.log(res.data));
  }

  return (
    <div>
      <Header user={role} />

      <div className="gradient-custom pt-4">
        <section class="text-center">
          <h3 class="managertext">
            <strong>LIST OF MANAGERS</strong>
          </h3>
        </section>
        <div class="container clannad">
          {managers.map((manager) => (
            <ManagerCard
              name={manager.name}
              phone={manager.phoneNo}
              email={manager.email}
              address={manager.address}
              manager={manager}
              delItem={delItem}
            />
          ))}

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
    </div>
  );
}

export default ManagerList;
