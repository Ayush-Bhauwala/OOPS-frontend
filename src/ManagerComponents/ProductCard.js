import { parseWithOptions } from "date-fns/fp";
import { useNavigate } from "react-router";
import "./plist2.css";

function ProductCard(props) {
  const item = props.item;
  const delItem = props.delItem;
  const data = props.image;
  const navigate = useNavigate();
  return (
    <div class="box-item">
      <div class="card cardashian">
        <img
          class="product img-fluid"
          src={
            data === null
              ? "https://www.logodesign.net/logo/arrow-marketing-112ld.png"
              : `data:image/jpeg;base64,${data}`
          }
        />
        <div class="card-body cardashian-body">
          <h4 class="card-title ptitle">{props.name}</h4>
          <h4 class="card-title ptitle">₹{props.price}</h4>
          <button
            class="btn edit"
            onClick={() => navigate(`/modifyitem/${props.id}`)}
          >
            Edit{" "}
          </button>
          <button class="btn remove" onClick={() => delItem(item)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
