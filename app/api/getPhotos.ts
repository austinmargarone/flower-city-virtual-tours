import { Photo } from '@/types/photo';
import { connectToDB } from '../../utils/mongodb';

export async function fetchPhotos(): Promise<Photo[]> {
  const db = await connectToDB();
  const photos = await db.collection('photos').find().toArray();
  
  const transformedPhotos = photos.map(doc => ({
    _id: doc._id.toString(), 
    url: doc.url,
    title: doc.title,
    description: doc.description,
  }));

  return transformedPhotos;
}

export default fetchPhotos;
