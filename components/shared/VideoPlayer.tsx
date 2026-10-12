type Props = {
  src: string;
  poster: string;
  title: string;
  className?: string;
};

/** Click-to-play video. Nothing downloads until the visitor presses play. */
const VideoPlayer = ({ src, poster, title, className = "" }: Props) => {
  return (
    <div className={`overflow-hidden rounded-lg border border-tan bg-black shadow-lg ${className}`}>
      <video
        controls
        playsInline
        preload="none"
        poster={poster}
        aria-label={title}
        className="aspect-video w-full"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
