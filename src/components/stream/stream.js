import React from "react";

function stream() {
  return (
    <div
      className="stream flex items-center justify-center h-screen"
      id="watchStream"
    >
   <iframe
  src="https://player.twitch.tv/?channel=jenguel&parent=jenguel-portofolio-tzks.vercel.app"
  frameborder="0"
  allowfullscreen="true"
  height="378"
  width="620"
></iframe>

    </div>
  );
}

export default stream;
