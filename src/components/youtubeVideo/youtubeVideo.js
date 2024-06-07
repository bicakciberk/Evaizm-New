import axios from "axios";
import { useState, useEffect } from "react";

function YoutubeVideo() {
  const apiKey = "AIzaSyC-TObT_98eZm4w12dkoG_UmTcvpYksT3s";
  const playlistId = "PLdMS5xjrA_DUKkZgaJilMMoF5_bGTewq-";

  const [url, setUrl] = useState("");

  const getData = () => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=1&key=${apiKey}`
      )
      .then((data) => {
        setUrl(data.data.items[0].snippet.resourceId.videoId);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="youtubeVideo flex items-center justify-center h-screen 900px:px-[32px] 600px:px-[16px]">
      <iframe
        className="w-[70vw] h-[70vh] 900px:w-full rounded-[16px]"
        id="youtubeVideo"
        src={`https://www.youtube.com/embed/${url}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YoutubeVideo;
