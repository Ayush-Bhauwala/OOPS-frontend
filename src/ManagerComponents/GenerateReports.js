import { useNavigate } from "react-router";
import Header from "../headerComponents/Header";
import "./GenerateReports.css";

function GenerateReports() {
  const navigate = useNavigate();
  return (
    <div class="boxclass">
      <Header user={"ADMIN"} />
      <h5 className="mt-4">Items sold on a date</h5>
      <div class="reportsbox">
        <div class="reportitems">
          <label for="date" class="form-label report">
            Date:
          </label>

          <input
            type="date"
            placeholder="DD/MM/YYYY"
            class="report"
            id="date"
          ></input>

          <button
            type="button"
            class="btn gen"
            onClick={() =>
              navigate(`/itemsdate/${document.getElementById("date").value}`)
            }
          >
            Generate report
          </button>
        </div>

        <h5>Customer Order Details</h5>
        <div class="reportitems">
          <label for="text" class="form-label report">
            Customer Email:
          </label>

          <input
            type="email"
            placeholder="Email"
            class="report"
            id="email"
          ></input>

          <label for="date" class="form-label report">
            Date:
          </label>

          <input
            type="month"
            placeholder="Month, Year"
            class="report"
            id="month"
          ></input>

          <button
            type="button"
            class="btn gen"
            onClick={() => {
              console.log(document.getElementById("month").value);
              console.log(document.getElementById("email").value);
              navigate(
                `/orderdetails/${document.getElementById("email").value}/${
                  document.getElementById("month").value
                }`
              );
            }}
          >
            Generate report
          </button>
        </div>

        <h5>Item Stock Status</h5>
        <div class="reportitems">
          <button
            type="button"
            class="btn gen"
            onClick={() => navigate("/itemsstock")}
          >
            Generate report
          </button>
        </div>
      </div>
    </div>
  );
}

export default GenerateReports;
