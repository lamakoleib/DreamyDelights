import Home from './Home';
import PhotoGallery from './PhotoGallery';
const Card = (props) => {
    return ( 
        <div className="card">
            <div className="card-body">
                <img src={props.img} alt="" />
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.desc}</p>
            </div>

            <div className="lower-half">
            <button className="price btn">{props.price}</button>
            <button type="button"className="card-btn btn" data-bs-toggle="modal" data-bs-target="#custom">REQUEST</button>

            </div>

            <div className="modal fade" id="custom" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content text-center">
            <div className="modal-header">
              <h5 className="modal-title" id="contact-modal-title">Quick Customization</h5>
              
            </div>
            <div className="modal-body text-center">
             
             <h4 className="md-header">Add some details to your cake!</h4>

             <div className="row">
                <div id="filling-options"className="col-md-6">
                <label >Add Preferred Filling</label>
                <select className="form-select" aria-label="Default select example" required>
                  <option selected>Not Selected</option>
                  <option value="1">Chocolate</option>
                  <option value="2">Vanilla</option>
                  <option value="3">Ice-cream</option>
                  <option value="4">Berries / Fruits</option>
                  <option value="5">Caramel</option>
                  
                </select>

                </div>
                <div id="frosting-options"className="col-md-6">
                <label >Add Preferred Frosting</label>
                <select className="form-select" aria-label="Default select example" required>
                  <option selected>Not Selected</option>
                  <option value="1">Chocolate</option>
                  <option value="2">Vanilla</option>
                  <option value="3">Ice-cream</option>
                  <option value="4">Berries / Fruits</option>
                  <option value="5">Caramel</option>
                  
                </select>

                </div>

                <div className="col-md-6">
                <label className='label-title'>Fruit Preference</label>
                <div id="fruit-options"className="options">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Kiwi</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Cherry</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Strawberry</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Mango</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Peach</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">None</label>
                    </div>
                </div>

                </div>

                <div className="col-md-6">
                <label className='label-title'>Nuts Preference</label>
                <div id="nuts-options"className="options">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Walnuts</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Almonds</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Kashews</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Pistachios</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">Peanuts</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">None</label>
                    </div>
                </div>

                </div>
             </div>

             
              
             
             
             

              
            </div>
            <div className="modal-footer">
              <button type="button" id="cancel-btn"className="discover-btn cancel-modal " data-bs-dismiss="modal">Cancel</button>
              <a type="button" href="/rqform" className="send-msg continue-btn" >
                Continue
              </a>
            </div>
          </div>
        </div>
      </div>
            
        </div>
     );
}
 
export default Card;