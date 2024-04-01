// components/Gallery/Gallery.tsx

import React, { useState, useEffect } from "react";
import Image from "next/image";
import fetchPhotos from "@/app/api/getPhotos";
import { Photo } from "@/types/photo";

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchGalleryPhotos = async () => {
      try {
        const fetchedPhotos = await fetchPhotos();
        setPhotos(fetchedPhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchGalleryPhotos();
  }, []);

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

export default Gallery;
