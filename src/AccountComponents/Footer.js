import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-6 ps-4">
          <h3>Website Information</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, si connecticur est il tu plait vous?
            KIMI NO TORIKO NE NANTE SHIMAIWA KITO
          </p>
          <p>
            MINAMINO SHIMA WA MATAKI PINEAPPEPURUPURU ATTAMOPOKAPOKA ANO BAKA~
          </p>
        </div>

        <div className="col-lg-6 col-md-6">
          <h3>Contact details</h3>
          <hr />
          Mail to:
          <a href="mailto: oopsecommercewebsite@gmail.com" className="ms-2">
            oopsecommercewebsite@gmail.com
          </a>
        </div>
      </div>

      <div className="row text-center">
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
