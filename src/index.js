import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Analytics></Analytics>
    <SpeedInsights></SpeedInsights>
    <Provider store={store}>
      <App></App>
    </Provider>
  </div>
);
