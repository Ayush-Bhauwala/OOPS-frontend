import { parseWithOptions } from "date-fns/fp";
import "./plist2.css";

function ProductCard(props) {
  return (
    <div class="box-item">
      <div class="card cardashian rounded">
        <div>
          <img
            class="product img-fluid"
            src="https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"
          />
        </div>
        <hr style={{ borderTop: "1.5px solid black", width: "80%" }} />

        <div class="card-body cardashian-body">
          <h4 class="card-title ptitle">{props.name}</h4>
          <a href="#!" class="btn edit">
            Edit{" "}
          </a>
          <a href="#!" class="btn remove">
            Remove
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
