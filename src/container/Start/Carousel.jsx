// import Carousel from 'react-bootstrap/Carousel';
import { images } from "../../constants";
import "./Start.css";
import React, { useState, useEffect} from 'react';


// function CaroStart() {
//   return (
//     <Carousel>
//       <Carousel.Item interval={1000}>
//         {/* <ExampleCarouselImage text="Cart" /> */}
//         <div className="caro">
//             <img src={images.cart_illus}></img>
//         </div>
//         <Carousel.Caption>
//           {/* <h3>First slide label</h3> */}
//           <p>Start by adding all your E-waste to your cart from the wide selection
//           of products that we deal in</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         {/* <ExampleCarouselImage text="Pickup" /> */}
//         <div className="caro">
//             <img src={images.cart_illus}></img>
//         </div>
//         <Carousel.Caption>
//           {/* <h3>Second slide label</h3> */}
//           <p>Enter your details and choose a day for the item's pickup.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="Wallet" /> */}
//         <div className="caro">
//             <img src={images.cart_illus}></img>
//         </div>
//         <Carousel.Caption>
//           {/* <h3>Third slide label</h3> */}
//           <p>
//           Get the equivalent amount of credit, points or gift card in your
//           wallet 
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

function CaroStart(){
  const [currentSlide, setCurrentSlide] = useState(0); 
  const slides = [
    { text: "Start by adding all your E-waste to your cart from the wide selection of products that we deal in", image: images.cart_illus },
    { text: "Enter your details and choose a day for the item's pickup.", image: images.pickup },
    { text: "Get the equivalent amount of credit, points, or gift card in your wallet", image: images.wallet  },
  ];

  const nextSlide = () => {
    console.log("before",currentSlide);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    console.log("after",currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    console.log(currentSlide);
  };

  useEffect(() => {
    console.log("Current Slide: ", currentSlide);
  }, [currentSlide]);

  return (
    <div className="custom-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="div_img"><img src={slide.image} alt={`Slide ${index + 1}`} /></div>
            <div className="div_p"><p>{slide.text}</p></div>
          </div>
        ))}
      </div>
      <button onClick={() => { prevSlide(); console.log("Prev Slide: ", currentSlide); }} className="carousel-button prev">Previous</button>
      <button onClick={() => { nextSlide(); console.log("Next Slide: ", currentSlide);}} className="carousel-button next">Next</button>
    </div>
  );
}

export default CaroStart;