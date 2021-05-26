import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import creative1 from '../img/creative_1.png';
import creative2 from '../img/creative_2.png';
import creative3 from '../img/creative_3.png';
import creative4 from '../img/creative_4.png';

const HeaderCarousel = () => {
    return(
        <div className="header_carousel">
            <Carousel
                axis="horizontal"
                showThumbs={false}
                useKeyboardArrows={true}
                centerMode
                centerSlidePercentage={100}
                showStatus={false}
                transitionTime={300}
                width="100%"
                emulateTouch={true}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if(isSelected){
                        return (
                            <li 
                                style={{
                                    backgroundColor: "#544695",
                                    borderRadius: "50%",
                                    width: 10,
                                    height: 10,
                                    display: "inline-block",
                                    margin: "0 5px",
                                    left: 0
                                }}
                                onClick={onClickHandler}
                                onKeyDown={onClickHandler}
                                value={index}
                                key={index}
                                role="button"
                                tabIndex = {0}
                                title={`${label} ${index + 1}`}
                                aria-label={`${label} ${index + 1}`}
                            />
                        )
                    } 
                    return(
                        <li 
                            style={{
                                backgroundColor: "#9C8BEA",
                                borderRadius: "50%",
                                width: 9,
                                height: 9,
                                display: "inline-block",
                                margin: "0 5px",
                                left: 0
                            }}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex = {0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    )
                }}

            >
            <div className="advantage responsive">
              <img src={creative1} style={{width: "60px"}} alt="bricks"/>
              <h3>Offer coupons</h3>
              <p>Grow your customer base by offering free coupons that are advertised on social media and discoverable through Google search. No hidden or upfront fees and you get a free professional profile. Engage your customers and leads while expanding your business.</p>
            </div>
            <div className="advantage responsive">
              <img src={creative2} style={{width: "60px"}} alt="lamp"/>
              <h3>Search and discover</h3>
              <p>Our directory is accessed by families across US and Canada to find local service providers and facilities by profession, services offered, or ratings and rankingsWe match families based on their needs.</p>
            </div>
            <div className="advantage responsive">
              <img src={creative3} style={{width: "60px"}} alt="pencils"/>
              <h3>Improve satisfaction</h3>
              <p>Get higher ratings and better reviews through transparency, media-rich profiles, engaging social blog, professional articles, and accreditation.Create events to promote your business and advertise them on social media.</p>
            </div>
            <div className="advantage responsive">
              <img src={creative4} style={{width: "60px"}} alt="lamp"/>
              <h3>Profile boosting</h3>
              <p>Get more referrals through improved ratings and reviews, performance monitoring, recommendations from other professionals, and profile search boosting. Your profiles are discoverable on Google search.</p>
            </div>
            </Carousel>
          </div>
    )
}

export default HeaderCarousel