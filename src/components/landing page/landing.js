import React, { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";
import Center from "./center/center";
import Bottom from "./bottom/bottom";
import ShadowLeft from "./shadow-left";
import ShadowRight from "./shadow-right";
import { motion, useAnimation } from "framer-motion";

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};

function Landing() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;

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
    <div className="landing h-screen relative">
      <Navbar />
      <Center />
      <Bottom />
      <ShadowLeft />
      <ShadowRight />

      <motion.svg
        viewBox="0 0 841 1756"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="absolute top-0 left-0 600px:top-0 -mt-[10px] -z-10 max-h-[200vh] w-full"
        id="landing-svg"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={controls}
          d="M217.28 3C207.73 12.5021 189.01 58.5124 172.201 90.0195C155.391 121.527 124.447 180.54 105.345 215.047C86.2433 249.555 78.9847 246.054 67.1416 296.066C55.2986 346.077 43.8377 355.579 41.1634 421.094C38.4892 486.608 15.1852 515.115 41.1634 577.129C67.1417 639.142 93.5019 701.656 105.345 751.668C117.188 801.679 105.727 814.682 150.807 876.696C195.887 938.709 148.515 926.207 229.505 985.72C310.496 1045.23 257.776 1032.73 367.419 1085.74C477.062 1138.75 419.758 1113.25 555.761 1188.27C691.765 1263.28 660.82 1254.28 801.408 1350.8C941.996 1447.32 889.275 1387.81 1027.57 1525.34C1165.87 1662.87 1168.54 1671.87 1242.27 1771.9C1316.01 1871.92 1270.93 1799.9 1380.57 1968.44C1490.21 2136.98 1509.31 2137.48 1533 2237"
          stroke="#d64256"
          stroke-width="15"
        />
      </motion.svg>
    </div>
  );
}

export default Landing;
