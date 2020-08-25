import React from "react";
import "./Home.css";
import Product from "../Product/Product";
// import Banner from '../images/primevideo-banner2.jpg';
function Home() {
  return (
    <>
      <div className="home">
        <img
          className="home-image"
          // src={Banner}
          src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg"
          alt="banner"
        />
      </div>

      <div className="home1">
        <div className="home-row">
          <Product
            id="1232141"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
            price={11.96}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL320_SR320,320_.jpg"
          />
          <Product
            id="1232142"
            title="PlayStation PS4 500GB with 3 PS Hits Game Bundle (PS4)"
            price={254.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91zXzCCzN8L._AC._SR360,460.jpg"
          />
          <Product
            id="1232143"
            title="Fitbit Versa 2 Health & Fitness Smartwatch with Voice Control, Sleep Score"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41Z4MrovZ1L._AC._SR360,460.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="1232144"
            title="Trespass Albus Backpack, 30 Litre"
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/A16XSzp+2NL._AC._SR360,460.jpg"
          />
          <Product
            id="1232145"
            title="Van Heusen Men's Dress Shirt Regular Fit Poplin Solid"
            price={18.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/61pjj7DGsTL._AC_UL320_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="1232146"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver"
            price={349.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
