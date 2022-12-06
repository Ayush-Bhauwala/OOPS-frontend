import axios from "axios";
import { useEffect, useState } from "react";
import ManagerCard from "./ManagerCard";
import Header from "../headerComponents/Header";
function PendingManagers() {
  const [managers, setManagers] = useState([]);

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

  function getManagers() {
    axios
      .post(
        "https://bargainstrial-production.up.railway.app/admin/getnonapprovemanagers",
        {
          requesterId: localStorage.getItem("userid"),
        }
      )
      .then((res) => setManagers(res.data));
  }
  function approve(manager) {
    setManagers(managers.filter((x) => x.email !== manager.email));
    axios
      .post(
        "https://bargainstrial-production.up.railway.app/admin/approvemanager",
        {
          email: manager.email,
          senderid: localStorage.getItem("userid"),
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => getManagers(), []);

  return (
    <div>
      <Header user={localStorage.getItem("role")} />

      <div
        className="pt-4"
        style={{
          backgroundColor: "#eee",
          color: "#383f51",
          minHeight: "100vh",
        }}
      >
        <section class="text-center">
          <h3 class="managertext">
            <strong>PENDING MANAGERS</strong>
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
              nonApproved={true}
              approve={approve}
            />
          ))}
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
export default PendingManagers;
