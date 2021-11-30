import React from "react";
// Handle console logs
import "utils/dropConsole";
// Styles
import "fontsource-roboto";
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";

import "./App.css";
import { ProvideAuth } from "navigation/Auth/ProvideAuth";
// Redux
import { Provider } from "react-redux";
import { store } from "redux/store";
//Trans
import { useTranslation } from "react-i18next";
import i18next from "i18next";
function App() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div>
        <nav>
          <button onClick={() => handleClick("en")}>English</button>
          <button onClick={() => handleClick("cro")}>Hrvatski</button>
          <button onClick={() => handleClick("chi")}>Chinese</button>
        </nav>
        <p>{t("Thanks.1")}</p>
        <p>{t("Why.1")}</p>
        <Provider store={store}>
          <ProvideAuth>
            <BrowserRouter>
              <RouterConfig />
            </BrowserRouter>
          </ProvideAuth>
        </Provider>
      </div>
    </>
  );
}

export default App;
