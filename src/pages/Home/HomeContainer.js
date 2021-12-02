import React from "react";
import { NavLinks } from "../../components/NavLinks";
import Bannner from "assets/images/banner1.png";
export function HomeContainer() {
  return (
    <div>
      <NavLinks />
      <div className="wrapper-home-page">
        <img src={Bannner}></img>
      </div>
    </div>
  );
}
