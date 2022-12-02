import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

function CategoryPage(props) {
  return (
    <Link to={`${props.title.toLowerCase()}`}>
      <span class="card imgcard" id="h2020">
        <img
          class="card-img-top rounded imgcard2"
          src={props.link}
          height="150px"
          width="150px"
          alt={props.title}
        />
        <div
          class="card-img-overlay d-flex align-items-end justify-content-center"
          style={{ width: "100%" }}
        >
          <h5 class="card-title titlecard" id="cardtext">
            {props.title}
          </h5>
        </div>
      </span>
    </Link>
  );
}

export default CategoryPage;
