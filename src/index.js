import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./components/landing page/landing";
import Biography from "./components/biography/biography";
import Stream from "./components/stream/stream";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="cigdemt text-gray selection:bg-[#d64256] selection:text-white ">
    <Landing></Landing>
    <Biography></Biography>
    <Stream></Stream>
  </div>
);
