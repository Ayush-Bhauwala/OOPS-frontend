import { useNavigate } from "react-router";
import "./plist2.css";

function ProductCard(props) {
  const item = props.item;
  const delItem = props.delItem;
  const data = props.image;
  const navigate = useNavigate();
  return (
    <div className="box-item">
      <div className="card cardashian pt-3">
        <img
          className="product img-fluid h-100"
          src={
            data === null
              ? "https://www.logodesign.net/logo/arrow-marketing-112ld.png"
              : `data:image/jpeg;base64,${data}`
          }
          style={{ width: "10rem" }}
          alt={props.name}
        />
        <hr
          style={{
            borderTop: "1.5px solid black",
            width: "80%",
            // height: "100%",
          }}
        />
        <div className="card-body cardashian-body w-100">
          <h4 className="card-title ptitle">{props.name}</h4>
          <h4 className="card-title ptitle">₹{props.price}</h4>
          <div className="row text-center">
            <div className="col-6">
              <button
                className="btn edit"
                onClick={() => navigate(`/modifyitem/${props.id}`)}
              >
                Edit{" "}
              </button>
            </div>
            <div className="col-6">
              <button className="btn remove" onClick={() => delItem(item)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
