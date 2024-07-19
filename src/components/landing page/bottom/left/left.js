import Item from "./item";

function left() {
  return (
    <div className="left flex items-center 600px:w-full 600px:justify-between">
      <Item
        iClass="fa-brands fa-instagram"
        href="https://www.instagram.com/eva.dlkr/"
      ></Item>
      <Item
        iClass="fa-brands fa-twitch"
        href="https://www.twitch.tv/evaizm"
      ></Item>

      <Item
        iClass="fa-brands fa-youtube"
        href="https://www.youtube.com/@evaizm"
      ></Item>

      <Item
        iClass="fa-brands fa-discord"
        href="https://discord.com/invite/evaizm"
      ></Item>
    </div>
  );
}

export default left;
