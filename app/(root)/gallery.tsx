import { connectToDB } from "@/utils/mongodb";
import { GetServerSideProps } from "next";
import Image from "next/image";

interface Photo {
  _id: string;
  url: string;
  title: string;
  description?: string;
}

interface Props {
  photos: Photo[];
}

const Gallery: React.FC<Props> = ({ photos }) => {
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo._id} className="photo">
          <Image src={photo.url} alt={photo.title} />
          <h3>{photo.title}</h3>
          <p>{photo.description}</p>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const db = await connectToDB();
  const photos = await db.collection("photos").find().toArray();

  return {
    props: {
      photos: JSON.parse(JSON.stringify(photos)),
    },
  };
};

export default Gallery;
