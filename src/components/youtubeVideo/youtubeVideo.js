
function YoutubeVideo() {
  return (
    <div className="youtubeVideo flex items-center justify-center h-screen 900px:px-[32px] 600px:px-[16px] ">
      <iframe
        src="https://www.youtube.com/embed/Ugf4W8mioB8?si=s_RyDPutw7hx_ZFh"
        title="YouTube video player"
        frameborder="0"
        className="w-[70vw] h-[70vh] 900px:w-full rounded-[16px] z-50"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YoutubeVideo;
