import React from "react";

function stream() {
  return (
    <div
      className="stream flex items-center justify-center h-screen relative"
      id="watchStream"
    >
      <iframe
        src="https://player.twitch.tv/?channel=jenguel&parent=localhost"
        className="h-[75vh] w-[75vw] rounded-[16px]"
        id="stream"
        frameborder="0"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
}

export default stream;
