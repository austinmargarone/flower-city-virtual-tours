type Props = {
  id: string;
  title: string;
  className?: string;
};

/** Matterport 3D tour. Pass just the model id (the part after ?m=). */
const TourEmbed = ({ id, title, className = "" }: Props) => {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-tan shadow-lg sm:aspect-video ${className}`}
    >
      <iframe
        src={`https://my.matterport.com/show/?m=${id}`}
        title={title}
        loading="lazy"
        allow="xr-spatial-tracking; fullscreen"
        allowFullScreen
        className="absolute inset-0 size-full border-0"
      />
    </div>
  );
};

export default TourEmbed;
