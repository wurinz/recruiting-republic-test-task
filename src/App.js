import React from 'react';
import MainCarousel from './components/MainCarousel';
import HeaderCarousel from './components/HeaderCarousel';
import Form from './components/Form';
import "./css/main.css"


import creative1 from './img/creative_1.png';
import creative2 from './img/creative_2.png';
import creative3 from './img/creative_3.png';
import creative4 from './img/creative_4.png';
import creativeFrame from './img/creative_frame.png';


function App() {
  return (
      <div className="container">
        <section className="our_directory">
          <h2>Why Our Directory</h2>
          <HeaderCarousel/>
          <div className="why_our_directory">
            <div className="advantage">
              <img src={creative1} alt="bricks"/>
              <h3>Offer coupons</h3>
              <p>Grow your customer base by offering free coupons that are advertised on social media and discoverable through Google search. No hidden or upfront fees and you get a free professional profile. Engage your customers and leads while expanding your business.</p>
            </div>
            <div className="advantage">
              <img src={creative2} alt="lamp"/>
              <h3>Search and discover</h3>
              <p>Our directory is accessed by families across US and Canada to find local service providers and facilities by profession, services offered, or ratings and rankingsWe match families based on their needs.</p>
            </div>
            <div className="advantage">
              <img src={creative3} alt="pencils"/>
              <h3>Improve satisfaction</h3>
              <p>Get higher ratings and better reviews through transparency, media-rich profiles, engaging social blog, professional articles, and accreditation.Create events to promote your business and advertise them on social media.</p>
            </div>
            <div className="advantage">
              <img src={creative4} alt="lamp"/>
              <h3>Profile boosting</h3>
              <p>Get more referrals through improved ratings and reviews, performance monitoring, recommendations from other professionals, and profile search boosting. Your profiles are discoverable on Google search.</p>
            </div>
          </div>
        </section>
        <article className="become_professional">
          <section className="join_advertise">
            <div className="advartise_text">
              <h1>Become a five-star professional!</h1>
              <p>Join the growing community of professional icarians. Use the iCaria professional services to launch and grow your business, manage your clients, organize your schedule, and simplify your payments. With iCaria certification, your customers will be assured safe and secure access to services.</p>
              <button className="request_btn" onClick={() => alert("dont touch the button!")}>Request Info</button>
            </div>
          </section>
        </article>
        <section className="iClaria_living">
           <h2>iCaria Living - Explore the wonders of life</h2>
           <MainCarousel/>
        </section>
        <section className="request">
          <div className="request_info_text">
            <h2>Request info</h2>
            <p>Got a question? Need to see a demo? Want to start your free trial subscription? We'd love to hear from you! Contact us and we will get back to you shortly.</p>
            <img src={creativeFrame} alt="creative_frame"/>
          </div>
          <div className="request_info_form">
            <Form />
          </div>
        </section>
        <footer><p>©2019 Icaria Health. All rights reserved.</p></footer>
      </div>
  );
}

export default App;
