import "./mliststyle.css";
import Header from "../headerComponents/Header";
import Footer from "../AccountComponents/Footer";
import ManagerCard from "./ManagerCard";

function ManagerList() {
  const role = localStorage.getItem("role");

  return (
    <div>
      <Header user={role} />
      <main class="my-5" />
      <section class="text-center">
          <h3 class="managertext">
            <strong>LIST OF MANAGERS</strong>
          </h3>
      </section>
      <div class="container clannad">
        

          <ManagerCard name="Manager 1" />
          <ManagerCard name="Manager 2" />

          <ManagerCard name="Manager 3" />
          <ManagerCard name = "Manager 4" />

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
      <Footer />
    </div>
  );
}

export default ManagerList;
