import main from "../assets/images/main.svg"
import main2 from "../assets/images/service.jpg"
import aboutPic from "../assets/images/aboutUs.svg"
import aboutPic2 from "../assets/images/aboutUs2.svg"
import aboutPic3 from "../assets/images/aboutUs3.svg"
import handShake from "../assets/images/handshake.png"
import guaranteed from "../assets/images/guaranteed.png"
import love from "../assets/images/love.png"
import restaurant from "../assets/images/restaurant.png"
import improvement from "../assets/images/improvement.png"
import profile1 from "../assets/images/profile1.jpg"
import profile2 from "../assets/images/profile2.png"
import profile3 from "../assets/images/profile3.jpg"
import Wrapper from '../assets/wrappers/LandingPage'
import { NavbarLanding, Footer } from '../assets/components'
import { Link } from "react-router-dom"

const Landing = () => {

    return (
        <Wrapper>
            <main>
                <NavbarLanding />
                {/* content */}
                <section className="intro-section">
                    <div className='page' >
                        <div className="info animated">
                            <h1><span>MomDad'Z</span> Event and catering services</h1>
                            <p>
                                We start with a discussion about your event - your likes, your dislikes and the atmosphere you wish to achieve. We follow up with a customised selection of menus and dishes for you to choose. From there we can fine-tune  every element of your dining experience.
                            </p>
                            {/* <Link to='/booking' className='btn-home btn btn-hero booking-btn btn--doar '>
                                book now 
                            </Link> */}
                        </div>
                        <img src={main} alt="booking" className='img main-img animate__fadeIn animate__animated' />
                    </div>
                </section>

                <section className="event-section row">
                    <div className="col-md img-div">
                        <div className="col-md img-container">
                            <img src={main2} className="image-style" alt="service" />
                        </div>
                    </div>
                    <div className='col-md title-container'>
                        <h1>Services</h1>
                        <div className="event-content">
                            <p>
                                We offer a wide range of catering services to suit all kinds of events, from corporate meetings to weddings, birthday parties to holiday celebrations. Our services include:
                            </p>
                            <ul>
                                <li>
                                    Customized menus to suit your event and taste preferences
                                </li>
                                <li>
                                    Full-service catering, including setup, serving, and cleanup
                                </li>
                                <li>
                                    Event planning services, including venue selection, decoration, and entertainment
                                </li>
                                <li>
                                    Bartending services and signature cocktail creations
                                </li>
                                <li>
                                    Special dietary accommodations, including vegetarian, vegan, and gluten-free options
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="event-phone">
                        <div className="col-md content-style animate__animated animate__fadeIn">
                            <h1> Services</h1>
                            <hr />
                            <p>
                                We offer a wide range of catering services to suit all kinds of events, from corporate meetings to weddings, birthday parties to holiday celebrations. Our services include:
                            </p>
                            <ul>
                                <li>
                                    Customized menus to suit your event and taste preferences
                                </li>
                                <li>
                                    Full-service catering, including setup, serving, and cleanup
                                </li>
                                <li>
                                    Event planning services, including venue selection, decoration, and entertainment
                                </li>
                                <li>
                                    Bartending services and signature cocktail creations
                                </li>
                                <li>
                                    Special dietary accommodations, including vegetarian, vegan, and gluten-free options
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section class="testimonials"  >
                    <div id="testimonials-carousel" class="carousel carousel-dark slide " data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active container-fluid" data-bs-interval="4000">
                                <h2 class="testimonial-text">"Excellent service from set up, foods and customer service. Sobrang approachable ng mga staff and also sobrang accommodating ni Ms. Shermay. All of our request and adjustments nasunod talaga. Thank you so much po. Till our next!"</h2>
                                <img class="testimonial-image" src={profile1} alt="catering reviews" />
                                <em>April Sta. Maria, Gender Reveal</em>
                            </div>
                            <div class="carousel-item container-fluid" data-bs-interval="4000">
                                <h2 class="testimonial-text">Excellent over-all experience. Worry-free, since they will only outsource the best events services and serve you quality catering service.</h2>
                                <img class="testimonial-image" src={profile2} alt="catering reviews" />
                                <em>Kris Arcea, Baptismal</em>
                            </div>
                            <div class="carousel-item container-fluid" data-bs-interval="4000">
                                <h2 class="testimonial-text">Ang galing Ng team nyo. sulit lahat tlgang alaga kmi. lahat Ng bisita ko msaya at hanga sa galing Ng services nyo at msrap na food.. mabait lht effort tlg Lalo na SI Ms. shermay.. maraming slmat po..💕💕💕</h2>
                                <img class="testimonial-image" src={profile3} alt="catering reviews" />
                                <em>Calvin Barb, birthday</em>
                            </div>
                        </div>
                        {/* <button class="carousel-control-prev" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#testimonials-carousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button> */}
                    </div>
                </section>

                <section className="about-section">
                    <div>
                        <h2>About MomDad'Z</h2>
                        <hr />
                    </div>
                    <div className="about-div row">
                        <div className='col-sm'>
                            <img src={aboutPic2} className="image-about" alt="catering" />
                        </div>
                        <div className='col-sm'>
                            <img src={aboutPic} className="image-about" alt="catering" />
                        </div>
                        <div className='col-sm'>
                            <img src={aboutPic3} className="image-about" alt="catering" />
                        </div>
                    </div>
                    <div className="about-context">
                        <h5>We at MomDad'Z take pride in providing excellent service from the start of inquiry, while planning the event, during the event and even after the event. We see to it that we attende to every question or concern that the clients may have. We make sure to set proper expectation and we DO NOT make false promises just to close the sale.</h5>
                    </div>
                </section>
                <section className="choose-section">
                    <div>
                        <h2>Why choose us?</h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md choose-content">
                            <img src={handShake} className="icon" alt="handshake" />
                            <h3>Direct communication</h3>
                            <p>You are speaking directly with tile owners of the business, meaning you can get the best offers, deals and promotions. You can ENSURE that what's discussed during the planning will be executed in the event.</p>
                        </div>
                        <div className="col-md choose-content">
                            <img src={love} className="icon" alt="love" />
                            <h3>Service with a smile</h3>
                            <p>We work as a FAMILY! We consider each member of our team as important and make sure that our staffs are happy with their work environment thus providing SERVICE WITH A SMILE.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md choose-content">
                            <img src={guaranteed} className="icon" alt="guaranteed" />
                            <h3>Quality guaranteed</h3>
                            <p>We only accept at most 3 events a day. We ensure that we meet the QUALITY expected from us. Your event will be handled by our well trained and competent event staff and you would likely to meet one of the owners during the event, you can be assured that your event is well taken care of.</p>
                        </div>
                        <div className="col-md choose-content">
                            <img src={improvement} className="icon" alt="improvement" />
                            <h3>Improvement</h3>
                            <p>We DO NOT consider ourselves the BEST. This means that even though we've been in the business for quite some time now, we are still very eager to learn and always researching the current trends in the industry. We are also keen to listen to our clients’ suggestions and we are open to criticism. We never STOP learning and training to be able to provide our clients the BEST possible services.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="choose-content last">
                            <img src={restaurant} className="icon" alt="restaurant choose-content" />
                            <h3>Catering</h3>
                            <p>We do not only provide Instagram worthy set up; we make sure that you would come back for more of our GOOD FOOD. Because if you offer catering services, you should have honest to goodness delicious food! Our kitchen staffs are well trained and competent, providing quality food all   the time.</p>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </Wrapper>
    )
}



export default Landing