import React from 'react';
import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import slide1 from '../img/slide1.png';
import slide2 from '../img/slide2.png';
import slide3 from '../img/slide3.png';
import slide4 from '../img/slide4.png';
import slide5 from '../img/slide5.png';
import slide6 from '../img/slide6.png';
import slide7 from '../img/slide7.png';
import slide8 from '../img/slide8.png';
import slide9 from '../img/slide9.png';
import next from '../img/next.png';
import previous from '../img/previous.png';


//Кастомный хук для получения ширины экрана, которую потом используем для изменения ширины показываемой карусели
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

const MainCarousel = () => {

    const windowSize = useWindowSize();

    let size = windowSize.width <= 1312 ? windowSize.width : 1312; 
    console.log(size);

    return (
        <div className="carousel">
            <Carousel
                axis="horizontal"
                showThumbs={false}
                useKeyboardArrows={true}
                centerMode
                centerSlidePercentage={(225/size) * 100}
                showStatus={false}
                transitionTime={300}
                width="100%"
                emulateTouch={true}
                renderArrowNext={(onClickHandler, hasPrev, label) => hasPrev && (
                    <button 
                        type="button" 
                        onClick={onClickHandler} 
                        title={label} 
                        style={{
                            overflow: "visible",
                            border: "none",
                            backgroundColor: "#FFF", 
                            width: "32px", 
                            height: "32px", 
                            zIndex: "3", 
                            position: "absolute", 
                            right: "0", 
                            top: "26%",
                            padding: "2px 0 0 2px",
                            borderRadius: "50%",
                            boxShadow: "0px 4px 16px 0px rgba(34, 60, 80, 0.06)"
                }}><img src={next} style={{width: "10px"}} alt="next"/></button>
                )}
                renderArrowPrev={(onClickHandler, label) => (
                    <button 
                        type="button" 
                        onClick={onClickHandler} 
                        title={label} 
                        style={{
                            border: "none",
                            backgroundColor: "#FFF", 
                            width: "32px", 
                            height: "32px", 
                            zIndex: "3", 
                            position: "absolute", 
                            left: 0, 
                            top: "26%",
                            padding: "2px 2px 0 0",
                            borderRadius: "50%"
                    }}><img src={previous} style={{width: "10px"}} alt="previous"/></button>
                )}
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
                                    margin: "0 5px"
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
                                margin: "0 5px"
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
                <div>
                    <img style={{width: "192px", marginBottom: "16px"}} src={slide1} alt="Sales Agent"/>
                    <h4 style={{marginBottom: "50px"}}>Sales Agent</h4>
                </div>
                <div>
                    <img style={{width: "192px", marginBottom: "16px"}} src={slide2} alt="Сity Business Owner"/>
                    <h4 style={{marginBottom: "80px"}}>Сity Business Owner</h4>
                </div>
                <div>
                    <img style={{width: "192px", marginBottom: "16px"}} src={slide3} alt="Tutor"/>
                    <h4 style={{marginBottom: "50px"}}>Tutor </h4>
                </div>
                <div>
                    <img style={{width: "192px", marginBottom: "16px"}} src={slide4} alt="Financial Advisor"/>
                    <h4 style={{marginBottom: "50px"}}>Financial Advisor</h4>
                </div>
                <div>
                    <img style={{width: "192px", marginBottom: "16px"}} src={slide5} alt="Personal Care Giver"/>
                    <h4 style={{marginBottom: "50px"}}>Personal Care Giver </h4>
                </div>
                <div>
                    <img style={{width: "192px", marginBottom: "16px"}} src={slide6} alt="Yoga Trainer"/>
                    <h4 style={{marginBottom: "50px"}}>Yoga Trainer</h4>
                </div>
                <div>
                    <img style={{width: "192px", marginBottom: "16px"}} src={slide7} alt="Nutritionist"/>
                    <h4 style={{marginBottom: "50px"}}>Nutritionist </h4>
                </div>
                <div>
                    <img style={{width: "192px", marginBottom: "16px"}} src={slide8} alt="Astrologer"/>
                    <h4 style={{marginBottom: "50px"}}>Astrologer </h4>
                </div>
                <div>
                    <img style={{width: "192px", marginBottom: "16px"}} src={slide9} alt="Senior Care Director"/>
                    <h4 style={{marginBottom: "50px"}}>Senior Care Director</h4>
                </div>
            </Carousel>
        </div>
    )
}

export default MainCarousel;