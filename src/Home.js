import cakePic from "./images/cake_contact.jpg";
import PhotoGallery from './PhotoGallery';


const  Home = () => {
    return (  
        <div className="home">
            <div className="home-content" id="landing">
                <div className="container">

                <h1 className="title-home">Where sweet dreams come to life!</h1>
                <p className="intro-text">Indulge in a world of flavors, where creativity knows no bounds. From classic favorites to unique and innovative creations, our talented cake artisans bring their expertise and passion to every masterpiece they create.</p>
                <a href="/cakes"className="discover-btn">DISCOVER CAKES</a>
                <a href="/photogallery" id="explore-btn"className="discover-btn text-center">EXPLORE GALLERY</a>

                </div>
                
            </div>

            <section id="about">
                <div className=" info-1">
                    <div className="container text-center">

                
                            <h1>Who are we?</h1>
                            <p className="lead my-5">At Dreamy Delights, we believe that every occasion deserves a delectable treat. Whether you're celebrating a birthday, anniversary, graduation, or simply indulging in a sweet craving, our diverse selection of cakes is here to make every moment memorable.</p>
                            <p className="lead my-4">With attention to detail and a commitment to quality, we ensure that every cake that leaves our bakery is a true delight. Our passion for perfection drives us to use only the finest ingredients, ensuring that each bite is a moment of pure bliss.</p>
                    

                

                    </div>
                </div>

                <div className="info-2">
                    <div className="container text-center">

                
                            <h1>Hassle-free Experience</h1>
                            <p className="lead my-5">At Dreamy Delights, we believe that every step of your cake journey should be as effortless and enjoyable as the first delectable bite. We are dedicated to providing you with a hassle-free experience from start to finish, ensuring that your cake selection and ordering process is seamless and stress-free.</p>
                            
                    

                

                    </div>
                </div>
            </section>
            {/* <section id="gallery">

                <PhotoGallery/>

            </section> */}

            

            <section id="contact-us">
                <div className="container">
                    <div className="text-center">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 text-center">

                                <img src={cakePic} className="cake-pic-contact" alt="logo" />

                                <h6 className="left-col">
                                    <li>Email: dreamydelights@gmail.com</li>
                                    <li>Phone: (613)-999-1120 </li>
                                    <li>Weekdays: 9:00 AM - 6:00 PM</li>
                                    <li>Weekends: 10:00 AM - 7:00 PM</li>
                                </h6>

                            </div>

                            <div className="col-lg-6 text-center">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5597.704247716515!2d-75.49265120027088!3d45.45263593429494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce13e4c7067177%3A0xdd629afb9ecb597e!2sP%C3%A2tisserie%20Le%20Caramel!5e0!3m2!1sen!2sca!4v1688144795216!5m2!1sen!2sca" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                <h6 className="right-col">
                                    Address: 200 Vanguard Dr, Orléans, ON K4A 0T8
                                </h6>

                                <div className="row my-5 align-items-center justify-content-center">
                                    <div className="text-center">
                                       
                                    <button type="button" className="send-msg " data-bs-toggle="modal" data-bs-target="#contact-box">
                    
                                        Send Message
                         
                                    </button>

                                     </div>
                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                
            </section>


        <div className="modal fade" id="contact-box" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content text-center">
            <div className="modal-header">
              <h5 className="modal-title" id="contact-modal-title">Send a message</h5>
              
            </div>
            <div className="modal-body text-center">
             
             <h4 className="md-header">Is there anything we can help with?</h4>
             <p>Let us know by typing in your questions and/or concerns and we will respond as soon as possible!</p>
             

              <div className="input-field text-center">
                <textarea className="longInput" cols="30" rows="10" placeholder="What is your concern?"></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" id="cancel-btn"className="discover-btn cancel-modal " data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="send-msg confirm-modal "  data-bs-dismiss="modal">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

            
            

            
        </div>
    );
}
 
export default Home ;