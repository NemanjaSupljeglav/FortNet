import React, { useState } from "react";
import { LinkRoute } from "./LinkRoute";
import "./navLinks.css";
import TranslationContainer from "../components/translation/TranslationContainer";
import Logo from "./logo/Logo";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
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
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownPress, setShowDropdownPress] = useState(false);
  return (
    <>
      {/* Common component created for all Link tags to be used. Thus, avoiding reputation of any styling and universal reuse */}
      <div className="wrapper-all-nav-links">
        <Logo className="nav-bar-logo"></Logo>
        <div className="wrapper-route">
          <LinkRoute
            to={HOME}
            style={pathname === "/" ? spanStylesSelect : spanStyles}
          >
            <p>{t("HOME.1")}</p>
          </LinkRoute>
          <LinkRoute
            to={MAP}
            style={pathname === "/map" ? spanStylesSelect : spanStyles}
          >
            <p>{t("MAP.1")}</p>
          </LinkRoute>
          <LinkRoute
            to={ATTRACTIONS}
            style={pathname === "/attractions" ? spanStylesSelect : spanStyles}
            className="attractionas-nav-link"
            onMouseLeave={() => setShowDropdown(false)}
            onMouseOver={() => setShowDropdown(true)}
          >
            {showDropdown && (
              <p show={showDropdown} className="dropdown-attractions">
                <p href="#/action-1" className="dropdown-attractions-actions">
                  BAŠTINA
                </p>
                <p href="#/action-2" className="dropdown-attractions-actions">
                  ENO GASTRO
                </p>
                <p href="#/action-3" className="dropdown-attractions-actions">
                  SMJEŠTAJ
                </p>
                <p href="#/action-4" className="dropdown-attractions-actions">
                  AKTIVNI ODMOR
                </p>
              </p>
            )}

            <p>
              {t("ATTRACTIONS.1")}
              <KeyboardArrowDownIcon className="icon-navbar"></KeyboardArrowDownIcon>
            </p>
          </LinkRoute>
          <LinkRoute
            to={ABOUT_PROJECT}
            style={pathname === "/aboutProject" ? spanStylesSelect : spanStyles}
          >
            <p>{t("ABOUT PROJECT.1")}</p>
          </LinkRoute>
          <LinkRoute
            to={PRESS}
            style={pathname === "/press" ? spanStylesSelect : spanStyles}
            onMouseLeave={() => setShowDropdownPress(false)}
            onMouseOver={() => setShowDropdownPress(true)}
          >
            <p>
              {showDropdownPress && (
                <p show={showDropdown} className="dropdown-attractions">
                  <p href="#/action-1" className="dropdown-attractions-actions">
                    NOVOSTI
                  </p>
                  <p href="#/action-2" className="dropdown-attractions-actions">
                    MULTIMEDIJA
                  </p>
                </p>
              )}
              {t("PRESS.1")}{" "}
              <KeyboardArrowDownIcon className="icon-navbar"></KeyboardArrowDownIcon>
            </p>
          </LinkRoute>
        </div>
        <TranslationContainer className="nav-bar-translation-button"></TranslationContainer>
      </div>
    </>
  );
};
