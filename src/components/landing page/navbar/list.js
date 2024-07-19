import { SunLight, HalfMoon } from "iconoir-react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../../redux/modeSwitch";

function List() {
  const theme = useSelector((store) => store.theme.value);
  const dispatch = useDispatch();
  console.log(theme);

  return (
    <div className="list flex items-center">
      <a
        href="#biography"
        className="navbar-text text-[2.1vh] cursor-pointer hover:text-[#d64256] duration-150"
      >
        Ben Kimim ?
      </a>
      <a
        href="#watchStream"
        className="navbar-text text-[2.1vh] cursor-pointer ml-[3.2vw] 600px:ml-[8vw] hover:text-[#d64256] duration-150"
      >
        Yayın
      </a>
      <a
        href="#contact"
        className="navbar-text text-[2.1vh] cursor-pointer ml-[3.2vw] 600px:ml-[8vw] hover:text-[#d64256] duration-150"
      >
        İletişim
      </a>
      <p
        onClick={() => dispatch(change())}
        className="navbar-text text-[2.1vh] cursor-pointer ml-[3.2vw] 600px:ml-[8vw] hover:text-[#d64256] duration-150"
      >
        {theme ? <HalfMoon></HalfMoon> : <SunLight></SunLight>}
      </p>
    </div>
  );
}

export default List;
