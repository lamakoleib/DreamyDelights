const Navbar = () =>{
    return(

        <div classNameName="nav-content">
            <nav className="navbar navbar-expand-md fixed-top navbar-light">
        <div className="container-xxl">
            <a href="#landing" className="navbar-brand">
                <span className="fw-bold nav-title ">Dreamy Delights
            </span>
            </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            

            <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#landing" className="nav-link">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a href="#our-doctors" className="nav-link">CAKES</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gallery" className="nav-link">GALLERY</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact-us" className="nav-link">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
        
        // <nav classNameName="navbar">

        // <h1 classNameName="nav-title">Dreamy Delights</h1>
        //     <div classNameName="links">
        //         <a href="/">HOME</a>
        //         <a href="/about">ABOUT</a>
        //         <a href="/shop">CAKES</a>
        //         <a href="/gallery">GALLERY</a>
        //         <a href="/contact">CONTACT US</a>
        //     </div>
        // </nav>

      

        
    );
}

export default Navbar;