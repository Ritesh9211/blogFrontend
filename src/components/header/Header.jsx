import "./header.css";
import { useState } from "react";
import slide1 from "../../images/slide1.jpg"
import slide2 from "../../images/slide2.jpg"
import slide3 from "../../images/slide3.jpg"

export default function Header() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNextSlide = () => {
    if(currentSlide+1==3) setCurrentSlide(0);
    else 
      setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to Personal </span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <div className="slideshow-container">
        <div
          className="slideshow"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="slide">
            <img className="headerImg" src={slide1}
          alt="slide 1" />
          </div>
          <div className="slide">
          <img className="headerImg" src={slide2}
          alt="Slide 2" />
          </div>
          <div className="slide">
          <img className="headerImg" src={slide3}
          alt="Slide 3" />
          </div>
        </div>
        <button className="prev" onClick={handlePrevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={handleNextSlide}>
          &#10095;
        </button>
    </div>
      {/* <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      /> */}
    </div>
  );
}
