import Header from "../headerComponents/Header";
import "./MainPage.css";
import CategoryPage from "./CategoryPage";
import Footer from "./Footer";
import Itemcard from "./Itemcard";
import Testimonials from "./Testimonials";

function MainPage(){
    return(
    <div>
    <Header />
    
    <div>
    
    <Testimonials />
    
    <h1 class = "categorytag">Categories</h1>

    <div class = "container pt-5 pb-5 rounded" id = "firstclass">
      
        <CategoryPage title = "Technology" link = "https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272__480.jpg" />
        <CategoryPage  title = "Groceries" link = "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__480.jpg"/>
        <CategoryPage title="Entertainment" link = "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079__480.jpg"/>
        <CategoryPage title="Fashion" link = "https://cdn.pixabay.com/photo/2021/11/15/05/25/boutique-6796399__480.jpg"/>
    
    </div>
    </div>
    <br >
    </br>
    <br />

    <div>
      <h1 class = "categorytag">New Releases</h1>
      <div class = "container" id = "secondclass">
      
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />


    <Footer />
    </div>



    )
}

export default MainPage;