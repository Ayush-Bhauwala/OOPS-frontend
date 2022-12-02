import Footer from "../AccountComponents/Footer";
import Header from "../headerComponents/Header";
import "./prodstyle.css";
import ProductCard from "./ProductCard";

function ProductList(){
    return(
        <div>
        <Header />
        <main class="my-5" />
        <div class="container">
          
          <section class="text-center">
            <h3 class="mb-5"><strong>LISTED PRODUCTS</strong></h3>
    
            <div class="row">
              <ProductCard 
              name = "Product Name" />
    
              <ProductCard 
              name = "Product Name" />
    
             <ProductCard 
              name = "Product Name" />
            </div>
    
            <div class="row">
            <ProductCard 
              name = "Product Name" />
    
           <ProductCard 
              name = "Product Name" />
    
             <ProductCard 
              name = "Product Name" />
            </div>
    
            <div class="row">
            <ProductCard 
              name = "Product Name" />
    
    <ProductCard 
              name = "Product Name" />
    
    <ProductCard 
              name = "Product Name" />
            </div>
    
            
    
          </section>
         
          <nav class="my-4" aria-label="...">
            <ul class="pagination pagination-circle justify-content-center">
              <li class="page-item pitem">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li class="page-item pitem"><a class="page-link" href="#">1</a></li>
              <li class="page-item pitem active" aria-current="page">
                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
              </li>
              <li class="page-item pitem"><a class="page-link" href="#">3</a></li>
              <li class="page-item pitem">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
          </div>
          <Footer />
          </div>
    )
}

export default ProductList;