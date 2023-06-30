import backgroundImage from "./images/bg.png";

const  Home = () => {
    return (  
        <div className="home">
            <div className="home-content">
                <h1 className="title-home">Where sweet dreams come to life!</h1>
                <p className="intro-text">Indulge in a world of flavors, where creativity knows no bounds. From classic favorites to unique and innovative creations, our talented cake artisans bring their expertise and passion to every masterpiece they create.</p>
                <button className="discover-btn">Discover Cakes</button>
            </div>
            <div className="image-bg"></div>
        </div>
    );
}
 
export default Home ;