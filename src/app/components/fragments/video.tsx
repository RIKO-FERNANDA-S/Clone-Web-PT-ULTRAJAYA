

export function Video() {
    return (
      <video width="700" height="700" controls loop preload="auto" autoPlay playsInline>
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }