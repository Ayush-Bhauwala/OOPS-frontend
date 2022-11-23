import "./BuyProductStyles.css";
import Header from "../headerComponents/Header";

function Discount() {
  return (
    <>
      <strike className="product_discount">
        <span style={{ color: "black" }}>₹ 31,000</span>
      </strike>
      <div>
        <span className="product_saved">You Saved:</span>{" "}
        <span style={{ color: "#383f51", fontSize: "18px" }}>₹ 2,000</span>
      </div>
    </>
  );
}

function BuyProduct() {
  const isDiscount = true;

  return (
    <>
      <Header user="customer" />
      <div className="super_container">
        <div className="single_product py-3">
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              margin: "1% auto",
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
              <div className="col-lg-6 order-3" style={{ paddingLeft: "5%" }}>
                <div className="product_description">
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="/products">Products</a>
                      </li>
                      <li className="breadcrumb-item active">Category</li>
                    </ol>
                  </nav>
                  <div className="product_name">Product Name</div>

                  <div>
                    {" "}
                    <span className="product_price">₹ 29,000</span>{" "}
                    {isDiscount && Discount()}
                  </div>
                  <hr className="singleline" />
                  <div className="row">
                    <div className="col-lg-6">
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
                    <div
                      className="col-lg-6"
                      style={{
                        borderLeft: "1px dashed black",
                        lineHeight: "30px",
                      }}
                    >
                      <span className="product_info">
                        Seller Name:
                        <span>
                          <br />{" "}
                          <span className="product_info">
                            GSTIN:
                            <span>
                              <br />{" "}
                              <span className="product_info">
                                Seller Address:
                                <span>
                                  <br />{" "}
                                  <span className="product_info">
                                    Estimated Delivery Date:
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <hr className="singleline" />
                  <div className="row">
                    <div className="col-xs-6" style={{ marginLeft: "13px" }}>
                      <div className="product_quantity">
                        <span>QTY: </span>
                        <input
                          id="quantity_input"
                          type="number"
                          defaultValue={1}
                          min="1"
                          max="10"
                        />
                      </div>
                    </div>
                    <div className="col-xs-6">
                      {" "}
                      <button type="button" className="btn shop-button">
                        Add to Cart
                      </button>{" "}
                      <button type="button" className="btn shop-button">
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
