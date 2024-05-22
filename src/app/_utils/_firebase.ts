// Utilities
import "@/config/firebaseConfig";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

const storage = getStorage();

export const getAllImages = async (location: string = 'images'): Promise<any> => {
  try {
    const listImageRef = ref(storage, location);
  
    const response = await listAll(listImageRef);

    return response;
  } catch (error: any) {
    console.log('getAllImages Error', error);
  }
}

export const getRefFile = (location: string): any => {
  return ref(storage, location);
}

export const getFileURL = async (item: any): Promise<string | undefined> => {
  try {
    const response = await getDownloadURL(item) as string;
    
    return response;
  } catch (error: any) {
    console.log('downloadURLFile Error', error);
  }
}