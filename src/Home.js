import backgroundImage from "./images/bg.png";

const  Home = () => {
    return (  
        <div className="home">
            <div className="home-content">
                <h1 className="title-home">Where sweet dreams come to life!</h1>
                <p className="intro-text">Indulge in a world of flavors, where creativity knows no bounds. From classic favorites to unique and innovative creations, our talented cake artisans bring their expertise and passion to every masterpiece they create.</p>
                <button className="discover-btn">Discover Cakes</button>
            </div>
            

            <div className="info-1">
                <div class="text-center">
                    <h1 className="who">
                            Who are we?
                    </h1>
                    <p className="who-p-1">
                        At Dreamy Delights, we believe that every occasion deserves a delectable treat. Whether you're celebrating a birthday, anniversary, graduation, or simply indulging in a sweet craving, our diverse selection of cakes is here to make every moment memorable.

                    </p>

                    <p className="who-p-2">
                        With attention to detail and a commitment to quality, we ensure that every cake that leaves our bakery is a true delight. Our passion for perfection drives us to use only the finest ingredients, ensuring that each bite is a moment of pure bliss.

                    </p>
                </div>
                
            </div>
        </div>
    );
}
 
export default Home ;