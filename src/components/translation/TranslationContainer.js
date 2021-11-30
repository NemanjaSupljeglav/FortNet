import React, { useState } from "react";
//Trans
import { useTranslation } from "react-i18next";
function TranslationContainer() {
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
        </nav>
      </div>
    </>
  );
}

export default TranslationContainer;
