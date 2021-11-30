import React from "react";
import { LinkRoute } from "./LinkRoute";
import "./navLinks.css";
import TranslationContainer from "../components/translation/TranslationContainer";
import { useTranslation } from "react-i18next";
import {
  MAP,
  HOME,
  ATTRACTIONS,
  ABOUT_PROJECT,
  PRESS,
} from "navigation/CONSTANTS";
const spanStyles = {
  color: "rgb(91,76,67)",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "950",
};
const spanStylesSelect = {
  color: "rgb(240,122,25)",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "950",
};

export const NavLinks = () => {
  const { t } = useTranslation();
  const pathname = window.location.pathname;

  return (
    <>
      {/* Common component created for all Link tags to be used. Thus, avoiding reputation of any styling and universal reuse */}
      <div className="wrapper-all-nav-links">
        <LinkRoute
          to={HOME}
          style={pathname === "/" ? spanStylesSelect : spanStyles}
          className="title-nav-bar"
        >
          HOME
        </LinkRoute>
        <LinkRoute
          to={MAP}
          style={pathname === "/map" ? spanStylesSelect : spanStyles}
        >
          MAP
        </LinkRoute>
        <LinkRoute
          to={ATTRACTIONS}
          style={pathname === "/attractions" ? spanStylesSelect : spanStyles}
        >
          ATTRACTIONS
        </LinkRoute>
        <LinkRoute
          to={ABOUT_PROJECT}
          style={pathname === "/aboutProject" ? spanStylesSelect : spanStyles}
        >
          ABOUT PROJECT
        </LinkRoute>
        <LinkRoute
          to={PRESS}
          style={pathname === "/press" ? spanStylesSelect : spanStyles}
        >
          PRESS
        </LinkRoute>
        <TranslationContainer></TranslationContainer>
        <p>{t("Thanks.1")}</p>
        <p>{t("Thanks.1")}</p>
        <p>{t("Thanks.1")}</p>
      </div>
    </>
  );
};
