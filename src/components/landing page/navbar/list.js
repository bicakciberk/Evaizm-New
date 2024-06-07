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
        className="navbar-text text-[2.1vh] cursor-pointer ml-[3.2vw] 600px:ml-[8vw] hover:text-[#d64256] duration-150"
      >
        Watch Stream
      </a>
      <a
        href="#contact"
        className="navbar-text text-[2.1vh] cursor-pointer ml-[3.2vw] 600px:ml-[8vw] hover:text-[#d64256] duration-150"
      >
        Contact
      </a>
      <p className="navbar-text text-[2.1vh] cursor-pointer ml-[3.2vw] 600px:ml-[8vw] hover:text-[#d64256] duration-150">
        <i class="fa-solid fa-sun text-lg"></i>
      </p>
    </div>
  );
}

export default list;
