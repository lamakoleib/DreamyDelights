const Navbar = () =>{
    return(

        <div className="nav-content">
            <nav class="navbar navbar-expand-md fixed-top navbar-light">
        <div class="container-xxl">
            <a href="#landing" class="navbar-brand">
                <span class="fw-bold nav-title ">Dreamy Delights
            </span>
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            

            <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#landing" class="nav-link">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a href="#our-doctors" class="nav-link">CAKES</a>
                    </li>
                    <li class="nav-item">
                        <a href="#services" class="nav-link">GALLERY</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact-us" class="nav-link">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
        
        // <nav className="navbar">

        // <h1 className="nav-title">Dreamy Delights</h1>
        //     <div className="links">
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