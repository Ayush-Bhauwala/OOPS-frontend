import axios from "axios";
import { parseWithOptions } from "date-fns/fp";

import "./mliststyle.css";
import "./plist2.css";

function ManagerCard(props) {
  function delItem() {
    props.delItem(props.manager);
  }
  function approve() {
    props.approve(props.manager);
  }
  return (
    <div class="box-item">
      <div class="card cardashian">
        <div class="card-body">
          <h4 class="card-title">{props.name}</h4>
          <br />
          <p class="card-text tmail">
            E-mail: <span class="info"></span>
            <p class="ttext">{props.email}</p>
          </p>
          <p class="card-text tmail">
            Phone Number:<span class="info"></span>
          </p>
          <p class="ttext">{props.phone}</p>
          <p class="card-text tmail">
            Address:<span class="info"></span>
            <p class="ttext">{props.address}</p>
          </p>
          <button class="btn remove" onClick={delItem}>
            REMOVE
          </button>
          {props.nonApproved === true && (
            <button class="btn remove" onClick={approve}>
              APPROVE
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManagerCard;
