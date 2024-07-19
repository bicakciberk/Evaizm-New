import Navbar from "./navbar/navbar";
import Center from "./center/center";
import Bottom from "./bottom/bottom";
import ShadowLeft from "./shadow-left";
import ShadowRight from "./shadow-right";

function Landing() {
  return (
    <div className="landing h-screen relative">
      <Navbar />
      <Center />
      <Bottom />
      <ShadowLeft />
      <ShadowRight />
    </div>
  );
}

export default Landing;
