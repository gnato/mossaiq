import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import messagesPl from "./translations/pl.json";
import messagesEn from "./translations/en.json";

import "typeface-roboto";

const defaultLang = "en";
const messages = {
  pl: messagesPl,
  en: messagesEn
};
const language = navigator.language.split(/[-_]/)[0]; // language without region code

ReactDOM.render(
  <IntlProvider
    locale={language}
    key={language}
    messages={messages[language] || messages[defaultLang]}
  >
    <App />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
