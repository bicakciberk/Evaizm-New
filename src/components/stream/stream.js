import React from "react";

function stream() {
  return (
    <div
      className="stream flex items-center justify-center h-screen relative 900px:px-[32px] 600px:px-[16px]"
      id="watchStream"
    >
      <iframe
        src="https://player.twitch.tv/?channel=jenguel&parent=jenguel-portofolio.vercel.app"
        className="h-[75vh] w-[70vw] 900px:w-full rounded-[16px]"
        id="stream"
        frameborder="0"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
}

export default stream;
