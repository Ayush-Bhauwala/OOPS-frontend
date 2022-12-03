import Header from "../headerComponents/Header";
import "./admincomponents.css"

function AdminDashboard(){
    return(
        <div>
        <div class = "admincontainer">
            
            <h1><span class = "redtext">Welcome</span>, Admin.</h1>
            <p>What would you like to do today?</p>
        </div>
        <div class = "adminbody">
            <button type="button" class="btn btn-primary btn-lg admin-item">View List of Managers</button>
            <button type="button" class="btn btn-primary btn-lg admin-item">View Pending Managers</button>
            <button type="button" class="btn btn-primary btn-lg admin-item">View List of Products</button>
            <button type="button" class="btn btn-primary btn-lg admin-item">Large button</button>
        </div>

        <div class = "adminend">
        <button type="button" class="btn">Generate Reports</button>
        <br />
        <br />
        </div>
        </div>
    )
}

export default AdminDashboard;