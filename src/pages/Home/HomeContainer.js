import React from "react";
import { NavLinks } from "../../components/NavLinks";
import Bannner1 from "assets/images/banner1.png";
import Bannner2 from "assets/images/banner2.png";
import "./homePage.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export function HomeContainer() {
  return (
    <div className="wrapper-home-all">
      <NavLinks />
      <h1 className="home-title">Fort-Net</h1>
      <p className="home-des">
        Poboljšanje kvalitete i raznolikosti turističke ponude koja se temelji
        na prirodnoj i kulturnoj baštini na graničnim ruralnim područjima Bosne
        i Hercegovine i Crne Gore.
      </p>
      <AliceCarousel
        autoPlay
        animationType="fadeout"
        disableButtonsControls={true}
        disableDotsControls={true}
        animationDuration={3000}
        infinite={true}
        className="banner-home"
        autoPlayInterval={1000}
        autoPlayStrategy={"none "}
      >
        <img src={Bannner1} className="sliderimg" />
        <img src={Bannner2} className="sliderimg" />
      </AliceCarousel>
    </div>
  );
}
