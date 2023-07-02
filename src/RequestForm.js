import Receipt from "./Receipt";

const RequestForm = () => {
    return ( 
        <div className="page-wrapper">
            <h1 className="rq-title">Custom Cake Request</h1>
            <div className="form-wrapper">
                <form action="">
                    <div className="form-row row justify-content-center align-items-center">
                        <div className="form-group col-md-6 ">
                            <label for="firstName">First Name</label>
                            <input type="name" class="form-control" id="firstName" placeholder="First Name"></input>
                        </div>
                        <div className="form-group col-md-6 ">
                            <label for="lastName">Last Name</label>
                            <input type="name" class="form-control" id="lastName" placeholder="Last Name"></input>
                        </div>
                        <div className="form-group col-md-6 ">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Email Address"></input>
                        </div>
                        <div className="form-group col-md-6 ">
                            <label for="phone">Phone Number (Optional)</label>
                            <input type="number" class="form-control" id="phone" placeholder="(999)-999-9999"></input>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="allergens">Allergens</label>
                        <input type="text" class="form-control" id="allergens" placeholder="Enter any allergens separated by commas"></input>
                        

                        </div>
                        
                        <div className="form-group col-md-6">
                        <label for="email">Occasion</label>
                        <select class="form-select" aria-label="Default select example" required>
                        <option selected>Not Selected</option>
                        <option value="1">Anniversary</option>
                        <option value="2">Birthday</option>
                        <option value="3">Graduation</option>
                        <option value="4">Wedding</option>
                        </select>

                        </div>

                        <div className="form-group col-md-6">
                        <label for="email">Serving Size</label>
                        <select class="form-select" aria-label="Default select example" required>
                        <option selected>Not Selected</option>
                        <option value="1">1-5</option>
                        <option value="2">6-10</option>
                        <option value="3">20+</option>
                        <option value="4">40+</option>
                        <option value="4">70+</option>
                        </select>

                        </div>

                        <div className="form-group col-md-6 ">
                            <label for="date">Preferred Delivery Date</label>
                            <input type="date" class="form-control" id="date"></input>
                        </div>
                        <div className="form-group col-md-6 ">
                            <label for="date">Add an inspiration image</label>
                            <textarea className="longInput comments" cols="30" rows="10" placeholder="Would you like to say anything about your chosen image?"></textarea>
                            
                        </div>

                        <div className="form-group col-md-6 ">
                            <label for="date">Additional Comments</label>
                            <textarea className="longInput comments" cols="30" rows="10" placeholder="What is your concern?"></textarea>
                        </div>
                       

                        <div className="form-group col-md-6 ">
                            
                            <input accept="image/*" type="file" id="select-image" />
                        </div>

                        <div className="form-group col-md-6 "></div>

                        <div className="form-group col-md-12 text-center ">
                            
                        <a type="button" href="/receipt" className="send-msg continue-btn" >
                            Submit Request
                             </a>
                        </div>


                    </div>
                </form>
            </div>
            
        </div>
     );
}
 
export default RequestForm;