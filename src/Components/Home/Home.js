import React from "react";
import "./Home.css";
import Product from '../Product/Product'
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
          id="1232141"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="1232141"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL320_SR320,320_.jpg"
        />
        </div>
      <div className="home-row">
        <Product
          id="1232141"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="1232141"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL320_SR320,320_.jpg"
        />
        </div>
      <div className="home-row">
        <Product
          id="1232141"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL320_SR320,320_.jpg"
        />
        </div>
      </div>
      
    </>
  );
}

export default Home;
