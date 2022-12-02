import { parseWithOptions } from "date-fns/fp";
import "./prodstyle.css"

function ProductCard(props){
    return(
        <div class="col-lg-4 col-md-12 mb-4">
                <div class="card cardashian">
                  <img class="product img-fluid" src="https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"  />
                  <div class="card-body cardashian-body">
                    <h4 class="card-title ptitle">{props.name}</h4>
                    <a href="#!" class="btn remove">REMOVE PRODUCT</a>
                    
                  </div>
                </div>
              </div>
    )


}

export default ProductCard;