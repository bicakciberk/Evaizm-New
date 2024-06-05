import React from "react";

function stream() {
  return (
    <div
      className="stream flex items-center justify-center h-screen"
      id="watchStream"
    >
      <iframe
        src="https://player.twitch.tv/?channel=jenguel&parent=http://localhost:3000"
        className="h-[70vh] w-[70vw] rounded-[16px]"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default stream;
