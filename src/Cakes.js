import Card from "./Card";
import Filter from "./cakegallery/Filter";
import weddingCake from './cakegallery/wedding1.jpg'
import PhotoGallery from "./PhotoGallery";

const Cakes = () => {
    return ( 

        <div className="cake-content">
            <div className="container text-center">
            <h1>Explore Sweet Creations</h1>
            <h6>Choose a base model and request to get it customized to your liking!</h6>

            </div>

            
             <div className="container">

                <div className="row">
                <div className="col-lg-4 filter-wrapper">
                    <Filter/>
                </div>
                <div className="col-lg-1 space-wrapper">

                </div>
                <div className="col-lg-7 cards-wrapper text-center">

                <Card img={weddingCake} title ="3 Tier Wedding Cake" desc="Beautiful cake" price="From $200"/>
                <Card img={weddingCake} title ="3 Tier Wedding Cake" desc="Beautiful cake" price="From $200"/>
                <Card img={weddingCake} title ="3 Tier Wedding Cake" desc="Beautiful cake" price="From $200"/>
                <Card img={weddingCake} title ="3 Tier Wedding Cake" desc="Beautiful cake" price="From $200"/>
                <Card img={weddingCake} title ="3 Tier Wedding Cake" desc="Beautiful cake" price="From $200"/>
                <Card img={weddingCake} title ="3 Tier Wedding Cake" desc="Beautiful cake" price="From $200"/>
                <Card img={weddingCake} title ="3 Tier Wedding Cake" desc="Beautiful cake" price="From $200"/>
                </div>
             </div>

                </div>
                
             

        </div>
        
     );
}
 
export default Cakes;