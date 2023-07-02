const Filter = () => {
    return ( 
        <div id="filter-card"className="card">
            <div className="filter-card-wrapper">
            <div className="card-body filter-body">
                <h2 className="card-title">Filter</h2>
                <p className="filter-names">Theme</p>
                <div className="options">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Wedding</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Birthday</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Anniversary</label>
                    </div>
                </div>
                <p className="filter-names">Filling</p>
                <div className="options">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Chocolate</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Buttercream</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Caramel</label>
                    </div>
                </div>

                <p className="filter-names">Allergens</p>
                <div className="options">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Wedding</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Birthday</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Anniversary</label>
                    </div>
                </div>
                
                
                <label for="customRange2" class="form-label price-label">Price Range</label>
                <input type="range" class="form-range" min="80" max="250" id="customRange2"></input>

                <div className="button-wrapper text-center">
                <button className="apply-btn discover-btn">APPLY</button>

                </div>

                
                
            </div>

            </div>

            
            
        </div>
     );
}
 
export default Filter;