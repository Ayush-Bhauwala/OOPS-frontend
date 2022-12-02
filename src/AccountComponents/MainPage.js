import Header from "../headerComponents/Header";
import "./MainPage.css";
import CategoryPage from "./CategoryPage";
import Footer from "./Footer";
import Carousel from "./Carousel";

import axios from "axios";
import { useState } from "react";

function MainPage() {
  const userid = localStorage.getItem("userid");
  const role = localStorage.getItem("role");
  // if (userid != null) {
  //   axios({
  //     method: "get",
  //     url: `https://bargainstrial-production.up.railway.app/admin/getuser/${userid}`,
  //   }).then((res) => {
  //     console.log(res.data);
  //     setRole(res.data.role);
  //     localStorage.setItem("role", res.data.role);
  //   });
  // }
  return (
    <div>
      <Header user={role} />

      <div>
        <Carousel />
        <div>
          <h1 className="categorytag my-2">Categories</h1>
        </div>
        <div
          className="container py-5 px-3"
          id="firstclass"
          style={{ borderRadius: "1rem", marginBottom: "6rem" }}
        >
          <div className="row w-100">
            <div className="col-md-3 col-lg-3">
              <CategoryPage
                title="Technology"
                link="https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272__480.jpg"
              />
            </div>
            <div className="col-md-3 col-lg-3">
              <CategoryPage
                title="Groceries"
                link="https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__480.jpg"
              />
            </div>
            <div className="col-md-3 col-lg-3">
              <CategoryPage
                title="Entertainment"
                link="https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079__480.jpg"
              />
            </div>
            <div className="col-md-3 col-lg-3">
              <CategoryPage
                title="Fashion"
                link="https://cdn.pixabay.com/photo/2021/11/15/05/25/boutique-6796399__480.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
