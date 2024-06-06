import Item from "./item";

function left() {
  return (
    <div className="left  flex items-center 600px:w-full 600px:justify-between">
      <Item
        iClass="fa-brands fa-instagram"
        href="https://www.instagram.com/j3nguel"
      ></Item>
      <Item
        iClass="fa-brands fa-twitch"
        href="https://www.twitch.tv/jenguel/"
      ></Item>

      <Item
        iClass="fa-brands fa-youtube"
        href="https://www.youtube.com/@j3nguel"
      ></Item>

      <Item
        iClass="fa-brands fa-kickstarter-k"
        href="https://kick.com/jenguel"
      ></Item>
      <Item
        iClass="fa-brands fa-x-twitter"
        href="https://twitter.com/j3nguel"
      ></Item>
    </div>
  );
}

export default left;
