import React from "react";
import Landing from "../components/landing page/landing";
import Biography from "../components/biography/biography";
import Stream from "../components/stream/stream";
import Email from "../components/emailSection/email";
import YoutubeVideo from "../components/youtubeVideo/youtubeVideo";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const theme = useSelector((store) => store.theme.value);

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 10,
        ease: "easeInOut",
      },
    },
  };

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;

      const svgTop = document
        .querySelector(".landing")
        .getBoundingClientRect().top;

      if (svgTop < windowHeight) {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  return (
    <div
      className={
        theme
          ? "light eva text-gray bg-white selection:bg-[#d64256] selection:text-white relative"
          : "dark eva text-white bg-[#0a0a0a] selection:bg-[#d64256] selection:text-white relative"
      }
    >
      <motion.svg
        viewBox="0 0 841 1756"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="absolute top-0 left-0 -mt-[10px] w-full 600px:hidden opacity-70 "
        id="landing-svg"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          d="M196.28 3C186.73 12.5021 168.01 58.5124 151.201 90.0195C134.391 121.527 103.447 180.54 84.3449 215.047C65.2433 249.555 57.9847 246.054 46.1416 296.066C34.2986 346.077 22.8377 355.579 20.1634 421.094C17.4892 486.608 -5.81476 515.115 20.1634 577.129C46.1417 639.142 72.5019 701.656 84.3449 751.668C96.1879 801.679 84.727 814.682 129.807 876.696C174.887 938.709 127.515 926.207 208.505 985.72C289.496 1045.23 236.776 1032.73 346.419 1085.74C456.062 1138.75 398.758 1113.25 534.761 1188.27C670.765 1263.28 639.82 1254.28 780.408 1350.8C920.996 1447.32 868.275 1387.81 1006.57 1525.34C1144.87 1662.87 1147.54 1671.87 1221.27 1771.9C1295.01 1871.92 1249.93 1799.9 1359.57 1968.44C1469.21 2136.98 1488.31 2137.48 1512 2237"
          stroke="#d64256"
          stroke-width="5"
        />
      </motion.svg>
      <Landing></Landing>
      <Biography></Biography>
      <Stream></Stream>
      <YoutubeVideo></YoutubeVideo>
      <Email></Email>
    </div>
  );
}

export default App;
