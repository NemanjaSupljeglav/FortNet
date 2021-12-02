import React from "react";
import { NavLinks } from "../../components/NavLinks";
import Bannner1 from "assets/images/banner1.png";
import Bannner2 from "assets/images/banner2.png";
import { useState } from "react";
import "./homePage.css";
import SimpleImageSlider from "react-simple-image-slider";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export function HomeContainer() {
  const images = [{ url: Bannner2 }, { url: Bannner1 }];
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
        autoPlayInterval="2000"
        animationType="fadeout"
        disableButtonsControls={true}
        disableDotsControls={true}
      >
        <img src={Bannner1} className="sliderimg" />
        <img src={Bannner2} className="sliderimg" />
      </AliceCarousel>
    </div>
  );
}
