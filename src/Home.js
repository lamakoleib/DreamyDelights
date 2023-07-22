import cakePic from "./images/cake_contact.jpg";
import Navbar from "./Navbar";

import video from './videos/video1.mp4';

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import {initReactI18next } from "react-i18next";
import image from "./images/globe.svg";



//english translations

const translationEn={
homeNav:"HOME",  
aboutNav:"ABOUT",
cakesNav:"CAKES",
galleryNav:"GALLERY",
contactNav:"CONTACT US",
helpNav:"HELP",

landingtitle: "Where sweet dreams come to life", 
landingPara: "Indulge in a world of flavours, where creativity knows no bounds. From classic favourites to unique and innovative creations, our talented cake artisans bring their espertise and passion to every masterpiece they create",
discoverBtn: "DISCOVER CAKES",
exploreBtn: "EXPLORE GALLERY",

hassleTitle: "Hassle-Free Experience",
whoTitle:"Who are we?",
paraOne:"At Dreamy Delights, we believe that every occasion deserves a delectable treat. Whether you're celebrating a birthday, anniversary, graduation, or simply indulging in a sweet craving, our diverse selection of cakes is here to make every moment memorable.",
paraTwo:"With attention to detail and a commitment to quality, we ensure that every cake that leaves our bakery is a true delight. Our passion for perfection drives us to use only the finest ingredients, ensuring that each bite is a moment of pure bliss.",
hasslePara:"At Dreamy Delights, we believe that every step of your cake journey should be as effortless and enjoyable as the first delectable bite. We are dedicated to providing you with a hassle-free experience from start to finish, ensuring that your cake selection and ordering process is seamless and stress-free.",

faqDesc:"Not sure about something? Take a look at some frequently asked questions down here or contact us directly!",
q1:"How far in advance should I place my order?",
a1:"We recommend placing your order at least 2-3 weeks in advance, especially for custom cakes. For weddings and large events, we suggest booking early to secure your date.",
q2:"What are your delivery options?",
a2:" We offer both local and nationwide delivery services. Rest assured that your cake will arrive fresh and on time, ready to add joy to your celebration.",
q3:"Do you offer cake delivery on weekends?",
a3:"Yes, we offer cake delivery services on weekends. However, availability may vary based on your location and the delivery schedule.",
q4:"Can I schedule a cake tasting consultation?",
a4:"Of course! We offer cake tasting consultations for weddings and large events. Contact us to schedule an appointment and discover the delightful flavors we have to offer.",
contact:"Contact Us",
address:"Address",
cancel:"Cancel",
send:"Send Message",
sendMsg:"Send a message",
mdHeader:"Is there anything we can help with?",
modaltxt:" Let us know by typing in your questions and/or concerns and we will respond as soon as possible!",
placeholder:"What is your concern?"};

//french translations

const translationFr = {
homeNav:"ACCUEIL",
aboutNav:"À PROPOS",
cakesNav:"GÂTEAUX",
galleryNav:"GALERIE",
contactNav:"CONTACTEZ-NOUS",
helpNav:"AIDER",

landingtitle: "Où de beaux rêves prennent vie", 
landingPara:"Laissez-vous tenter par un monde de saveurs, où la créativité ne connaît pas de limites. Des favoris classiques aux créations uniques et innovantes, nos talentueux artisans pâtissiers apportent leur expertise et leur passion à chaque chef-d'œuvre qu'ils créent.",
discoverBtn: "DÉCOUVREZ LES GÂTEAUX",
exploreBtn: "EXPLORER LA GALERIE",

hassleTitle:"Expérience sans tracas",
whoTitle:"Qui sommes nous?",
paraOne: "Chez Dreamy Delights, nous pensons que chaque occasion mérite une gâterie délicieuse. Que vous fêtiez un anniversaire, un anniversaire, une remise de diplôme ou que vous vous livriez simplement à une envie sucrée, notre sélection variée de gâteaux est là pour rendre chaque moment mémorable.",
paraTwo:"Avec une attention aux détails et un engagement envers la qualité, nous veillons à ce que chaque gâteau qui quitte notre boulangerie soit un vrai délice. Notre passion pour la perfection nous pousse à n'utiliser que les meilleurs ingrédients, garantissant que chaque bouchée est un moment de pur bonheur.",
hasslePara:"Chez Dreamy Delights, nous croyons que chaque étape de votre parcours de gâteau devrait être aussi simple et agréable que la première bouchée délicieuse. Nous nous engageons à vous offrir une expérience sans tracas du début à la fin, en veillant à ce que votre processus de sélection et de commande de gâteaux soit transparent et sans stress.",

faqDesc:"Vous n'êtes pas sûr de quelque chose ? Jetez un œil aux questions fréquemment posées ici ou contactez-nous directement !",
q1:"Combien de temps à l'avance dois-je passer ma commande ?",
a1:"Nous vous recommandons de passer votre commande au moins 2-3 semaines à l'avance, en particulier pour les gâteaux personnalisés. Pour les mariages et les grands événements, nous vous suggérons de réserver tôt pour garantir votre date.",
q2:"Quelles sont vos options de livraison ?",
a2:"Nous offrons des services de livraison locaux et nationaux. Soyez assuré que votre gâteau arrivera frais et à temps, prêt à ajouter de la joie à votre célébration.",
q3:"Offrez-vous la livraison de gâteaux le week-end ?",
a3:"Oui, nous offrons des services de livraison de gâteaux le week-end. Cependant, la disponibilité peut varier en fonction de votre emplacement et du calendrier de livraison.",
q4:"Puis-je planifier une consultation de dégustation de gâteaux ?",
a4:"Bien sûr! Nous offrons des consultations de dégustation de gâteaux pour les mariages et les grands événements. Contactez-nous pour prendre rendez-vous et découvrir les délicieuses saveurs que nous avons à offrir.",
contact:"Contactez-nous",
address:"Adresse",
cancel:"Annuler",
send:"Envoyer Message",
sendMsg:"Envoyer une message",
mdHeader:"Pouvons-nous vous aider ?",
modaltxt:"Faites-nous savoir en tapant vos questions et/ou préoccupations et nous vous répondrons dans les plus brefs délais !",
placeholder:"Quelle est votre inquiétude?"};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {translation: translationEn}, //languages available
      fr: {translation: translationFr},

    },
    lng:"en",
    fallbackLng: "en",
    interpolation: {escapeValue: false},

  });

  

  

export default function Home() {

  const {t} = useTranslation();

  const onChange=(event)=>{

    i18n.changeLanguage(event.target.value);

  };

  

  return (
    
    <div className="home">
      <Navbar/>
      <div className="language-wrapper">
        <span className="material-symbols-outlined">
              <img src={image} alt="language" className="globe" />
        </span>
        <select name="language" id="select-language" className="languages" onChange={onChange}>
              <option value="en">English</option>
              <option value="fr">Français</option>
          </select>
        </div>
      <div className="home-content" id="landing">
        
        <div className="container home-container">
          
          <h1 className="title-home">{t("landingtitle")}</h1>
          <p className="intro-text">
            {t("landingPara")}
          </p>

          <div className="buttons-wrapper col-md-6 col-xs-6">
          <a href="/cakes" className="discover-btn">
            {t("discoverBtn")}
          </a>
          <a
            href="/photogallery"
            id="explore-btn"
            className="discover-btn text-center"
          >
            {t("exploreBtn")}
          </a>

          </div>
          
        </div>
      </div>

      <section id="about">

      <div className="info-3">
          <div className="container text-center">
            <h1>blahblah</h1>
            <video src={video} autoPlay loop muted/>
          </div>
        </div>
        <div className=" info-1">
          <div className="container text-center">
            <h1>{t("whoTitle")}</h1>
            <p className="lead my-5">
              {t("paraOne")}
            </p>
            <p className="lead my-4">
              {t("paraTwo")}
            </p>
          </div>
        </div>

        

        <div className="info-2">
          <div className="container text-center">
            <h1>{t("hassleTitle")}</h1>
            <p className="lead my-5">
              {t("hasslePara")}
            </p>
          </div>
        </div>

        <div id="faq"className="faq-wrapper">
          <div className="container text-center">
            <h1>FAQ</h1>
            <h5>{t("faqDesc")}</h5>
            <div className="accordion " id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className= "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  {t("q1")}
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                  {t("a1")}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  {t("q2")}
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body">
                 {t("a2")}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  {t("q3")}
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                  {t("a3")}
                    
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  {t("q4")}
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                  <div className="accordion-body">
                  {t("a4")}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </section>
      

      <section id="contact-us">
        <div className="container">
          <div className="text-center">
            <h1>{t("contact")}</h1>
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 text-center">
                <img src={cakePic} className="cake-pic-contact" alt="cake on a stand" />

                <h6 className="left-col">
                  <li>Email: dreamydelights@gmail.com</li>
                  <li>Phone: (613)-999-1120 </li>
                  <li>Weekdays: 9:00 AM - 6:00 PM</li>
                  <li>Weekends: 10:00 AM - 7:00 PM</li>
                </h6>
              </div>

              <div className="col-lg-6 text-center">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5597.704247716515!2d-75.49265120027088!3d45.45263593429494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce13e4c7067177%3A0xdd629afb9ecb597e!2sP%C3%A2tisserie%20Le%20Caramel!5e0!3m2!1sen!2sca!4v1688144795216!5m2!1sen!2sca"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <h6 className="right-col">
                  {t("address")}: 200 Vanguard Dr, Orléans, ON K4A 0T8
                </h6>

                <div className="row my-5 align-items-center justify-content-center">
                  <div className="text-center">
                    <button
                      type="button"
                      className="send-msg "
                      data-bs-toggle="modal"
                      data-bs-target="#contact-box"
                    >
                      {t("send")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="contact-box"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content text-center">
            <div className="modal-header">
              <h5 className="modal-title" id="contact-modal-title">
                {t("sendMsg")}
              </h5>
            </div>
            <div className="modal-body text-center">
              <h4 className="md-header">{t("mdHeader")}</h4>
              <p>
               {t("modaltxt")}
              </p>

              <div className="input-field text-center">
                <textarea
                  className="longInput"
                  cols="30"
                  rows="10"
                  placeholder={t("placeholder")}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                id="cancel-btn"
                className="discover-btn cancel-modal "
                data-bs-dismiss="modal"
              >
                {t("cancel")}
              </button>
              <button
                type="button"
                className="send-msg confirm-modal "
                data-bs-dismiss="modal"
              >
                {t("send")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
