import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ContactHeroSection from "../components/ContactHeroSection/index";


const ContactUsPage = () => {
const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ContactHeroSection />
      {/* <Contact />  */}
      {/* <HeroContainer> */}
            <div class="container" style={{ 'margin-top': "20px" }} >
            <div class="row g-4">
              <div class="col-md-4">
                <div class="bg-white shadow-md rounded h-100 p-3">
                  <div class="featured-box text-center">
                    <div class="featured-box-icon text-primary mt-4"> <i class="fas fa-map-marker-alt"></i></div>
                    <h3>Everpay</h3>
                    <p>4711 Yonge St, 10th Floor<br/>
                      Toronto, ON, M2N 6K8<br/>
                      Canada <br/>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="bg-white shadow-md rounded h-100 p-3">
                  <div class="featured-box text-center">
                    <div class="featured-box-icon text-primary mt-4"> <i class="fas fa-phone"></i> </div>
                    <h3>Telephone</h3>
                    <p class="mb-0">+1(876) 544-2759</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="bg-white shadow-md rounded h-100 p-3">
                  <div class="featured-box text-center">
                    <div class="featured-box-icon text-primary mt-4"> <i class="fas fa-envelope"></i> </div>
                    <h3>Business Inquiries</h3>
                    <p>info@everpayinc.com </p>
                  </div>
                </div>
              </div>
            </div>
	          <div class="text-center py-5">
              <h2 class="text-8">Get in touch</h2>
              <p class="lead">Get in touch with us on below social media</p>
              <div class="d-flex flex-column">
                <ul class="social-icons social-icons-lg social-icons-colored justify-content-center">
                  <li class="social-icons-facebook"><a data-bs-toggle="tooltip" href="https://facebook.com/everpay" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                  <li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="https://twitter.com/everpay" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                  <li class="social-icons-linkedin"><a data-bs-toggle="tooltip" href="https://www.linkedin.com/in/everpay/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            </div>
            <section class="hero-wrap section shadow-md">
              <div class="hero-mask opacity-9 bg-primary"></div>
              <div class="hero-bg" 
                style={{backgroundImage: `url("assets/images/bg/image-2" rel="noreferrer")`}} ></div>
              <div class="hero-content">
                <div class="container text-center">
                  <h2 class="text-9 text-white">Awesome Customer Support</h2>
                  <p class="text-4 text-white mb-4">Have you any query? Don't worry. We have great people ready to help you whenever you need it.</p>
                  <a href="#" class="btn btn-light">Find out more</a> </div>
              </div>
            </section>
      {/* </HeroContainer> */}
            
    </>
  );
};


export default ContactUsPage;
