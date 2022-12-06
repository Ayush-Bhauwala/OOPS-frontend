import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="row flexbox-container">
        <div className="col-lg-4 col-md-4 ps-4 flexbox-item">
          <h3>Website Information</h3>
          <hr />
          <p>
            Our website, Bargains, is an e-commerce revolution in the making! <br /><br /><br /> Created in 2022, Bargains brings you the best of deals on all sorts of items, from essentials like fruits and clothing to luxury items like the latest in tech. 
          </p>
         
        </div>

        <div className="col-lg-4 col-md-4 flexbox-item">
          <h3><br /> </h3>
          <br />
          <p>
          Committed towards our motto of <i>"All for One, One for All"</i>, we intend on becoming the one-stop shop for everything one could desire. <br /> < br/>Aided by our consumer-friendly practices and best-of-class pricing, we offer the best of the best. <br />So, what are you waiting for? Shop with us today!
          </p>
        </div>

        <div className="col-lg-4 col-md-4 flexbox-item">
          <h3>Contact details</h3>
          <hr />
          Mail to:
          <a href="mailto: oopsecommercewebsite@gmail.com" className="ms-2">
            oopsecommercewebsite@gmail.com
          </a>
        </div>
      </div>

      <div className="row text-center flexbox-container flexbox-item">
        <footer>© 2022 Bargains</footer>
      </div>
      {/* <div class = "flexbox-item flexboxitem3">
                <h3>Useful Links</h3>
                <hr />
                <p><a href = "/test">LoremIpsum</a></p>
                <p><a href = "/test">LoremIpsum</a></p>
                <p><a href = "/test">LoremIpsum</a></p>
                <p><a href = "/test">LoremIpsum</a></p>
                <a href = "facebook.com"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" height="20px" width="20px"></img></a>
                <a href = "facebook.com"><img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" height="20px" width="20px"></img></a>
                
            </div>  */}
    </>
  );
}

export default Footer;
