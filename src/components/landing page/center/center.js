import Img from "./img";

function center() {
  return (
    <div className="center absolute left-2/4 top-2/4 bottom-2/4 -translate-x-2/4 flex flex-col items-center justify-center">
      <Img></Img>
      <h1 className="text-[7vh] 600px:text-4xl 600px:mt-[8px] 480px:text-3xl mt-[1vh] whitespace-nowrap">
        Evaizm
      </h1>
    </div>
  );
}

export default center;
