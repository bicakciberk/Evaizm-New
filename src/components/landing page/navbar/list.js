import React from "react";

function list() {
  return (
    <div className="list flex items-center">
      <a
        href="#biography"
        className="navbar-text text-[2.1vh] cursor-pointer hover:text-[#d64256] duration-150"
      >
        Who Am I ?
      </a>
      <a
        href="#watchStream"
        className="navbar-text text-[2.1vh] cursor-pointer ml-[3.2vw] 600px:ml-[10vw] hover:text-[#d64256] duration-150"
      >
        Watch Stream
      </a>
      <a className="navbar-text text-[2.1vh] cursor-pointer ml-[3.2vw] 600px:ml-[10vw] hover:text-[#d64256] duration-150">
        Contact
      </a>
    </div>
  );
}

export default list;
