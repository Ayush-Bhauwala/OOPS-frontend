import "./GenerateReports.css";

function GenerateReports(){
    return(
        <div class = "boxclass">
            <h5>Items sold on a date</h5>
            <div class = "reportsbox">
                
              <div class = "reportitems">
                <label for="date" class="form-label report">Date:</label>

                <input type="date" placeholder="DD/MM/YYYY" class="report"></input>
                
                <button type="button" class="btn gen">Generate report</button>
                </div>

                           
             <h5>Customer Order Details</h5>
              <div class = "reportitems">

              <label for="text" class="form-label report">Customer ID:</label>

              <input type="text" placeholder="DD/MM/YYYY" class="report"></input>


                 <label for="date" class="form-label report">Date:</label>

                 <input type="month" placeholder="Month, Year" class="report"></input>

                 <button type="button" class="btn gen">Generate report</button>    
              </div>

            <h5>Item Stock Status</h5>
              <div class = "reportitems">
              
              <button type="button" class="btn gen">Generate report</button>   

              </div>
            </div>
            
        </div>
    )
}

export default GenerateReports;
