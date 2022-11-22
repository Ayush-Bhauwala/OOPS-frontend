import "./BuyProductStyles.css";
import Header from "../headerComponents/Header";

function BuyProduct() {
  return (
    <>
      <Header user="customer" />
      <div className="super_container">
        <header className="header" style={{ display: "none" }}>
          <div className="header_main">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                  <div className="header_search">
                    <div className="header_search_content">
                      <div className="header_search_form_container">
                        <form
                          action="#"
                          className="header_search_form clearfix"
                        >
                          <div className="custom_dropdown">
                            <div className="custom_dropdown_list">
                              {" "}
                              <span className="custom_dropdown_placeholder clc">
                                All Categories
                              </span>{" "}
                              <i className="fas fa-chevron-down" />
                              <ul className="custom_list clc">
                                <li>
                                  <a className="clc" href="#">
                                    All Categories
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="single_product">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#fff",
              padding: "2%",
              margin: "1% auto",
              height: "100%",
            }}
          >
            <div className="row">
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="image_selected">
                  <img
                    src="https://i.imgur.com/qEwct2O.jpg"
                    alt="product img"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-3">
                <div className="product_description">
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Products</a>
                      </li>
                      <li className="breadcrumb-item active">(Category)</li>
                    </ol>
                  </nav>
                  <div className="product_name">Product Name</div>

                  <div>
                    {" "}
                    <span className="product_price">₹ 29,000</span>{" "}
                    <strike className="product_discount">
                      {" "}
                      <span style={{ color: "black" }}>
                        ₹ 31,000<span> </span>
                      </span>
                    </strike>{" "}
                  </div>
                  <div>
                    {" "}
                    <span className="product_saved">You Saved:</span>{" "}
                    <span style={{ color: "black" }}>
                      ₹ 2,000<span> </span>
                    </span>
                  </div>
                  <hr className="singleline" />
                  <div>
                    {" "}
                    <span className="product_info">
                      EMI starts at ₹ 2,000. No Cost EMI Available
                      <span>
                        <br />{" "}
                        <span className="product_info">
                          Warranty: 6 months warranty
                          <span>
                            <br />{" "}
                            <span className="product_info">
                              7 Days easy return policy
                              <span>
                                <br />{" "}
                                <span className="product_info">
                                  7 Days easy return policy
                                  <span>
                                    <br />{" "}
                                    <span className="product_info">
                                      In Stock: 25 units sold this week
                                      <span> </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="br-dashed">
                          <div className="row">
                            <div className="col-md-3 col-xs-3">
                              {" "}
                              <img src="https://img.icons8.com/color/48/000000/price-tag.png" />{" "}
                            </div>
                            <div className="col-md-9 col-xs-9">
                              <div className="pr-info">
                                {" "}
                                <span className="break-all">
                                  Get 5% instant discount + 10X rewards @
                                  RENTOPC
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7"> </div>
                    </div>
                  </div>
                  <hr className="singleline" />
                  <div className="order_info d-flex flex-row">
                    <form action="#"></form>
                  </div>
                  <div className="row">
                    <div className="col-xs-6" style={{ marginLeft: "13px" }}>
                      <div className="product_quantity">
                        <span style={{ paddingRight: ".25rem" }}>QTY: </span>
                        <input
                          id="quantity_input"
                          type="number"
                          defaultValue={1}
                        />
                      </div>
                    </div>
                    <div className="col-xs-6">
                      {" "}
                      <button
                        type="button"
                        className="btn btn-primary shop-button"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-success shop-button"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row row-underline">
              <div className="col-md-6">
                {" "}
                <span className=" deal-text">Specifications</span>{" "}
              </div>
              <div className="col-md-6">
                {" "}
                <a href="#" data-abc="true">
                  {" "}
                  <span className="ml-auto view-all" />{" "}
                </a>{" "}
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-md-12">
                <table className="col-md-12">
                  <tbody>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Sales Package :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>
                            2 in 1 Laptop, Power Adaptor, Active Stylus Pen,
                            User Guide, Warranty Documents
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Model Number :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li> 14-dh0107TU </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Part Number :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>7AL87PA</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Color :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>Black</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Suitable for :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>Processing &amp; Multitasking</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">
                          Processor Brand :
                        </span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>Intel</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> 
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyProduct;
