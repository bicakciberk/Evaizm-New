function item({ iClass, href }) {
  return (
    <div className="item ">
      <a
        href={href}
        className="mr-[2.3vh] 600px:mr-[0px] text-[3vh] cursor-pointer hover:text-[#d64256] duration-150"
        target="_blank"
      >
        <i class={`fa-brands ${iClass}`}></i>
      </a>
    </div>
  );
}

export default item;
