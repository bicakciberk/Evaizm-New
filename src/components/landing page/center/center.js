import Img from "./img";

function center() {
  return (
    <div className="center absolute left-2/4 top-2/4 bottom-2/4 -translate-x-2/4 flex flex-col items-center justify-center">
      <Img></Img>
      <h1 className="text-[7vh] 600px:text-4xl 600px:mt-[8px] 480px:text-3xl mt-[1vh] whitespace-nowrap">
        Noyan
      </h1>

      <p className="text-[2.5vh] -mt-[1vh] 600px:text-base 480px:text-sm 600px:mt-[0px] cursor-pointer ">
        {/* Çevrimdışı */}
        @jenguel
      </p>
    </div>
  );
}

export default center;
