import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if(!file) return;

    const fileUploaded = await storage.createFile(
        "647829711e4fa72788e4",
        ID.unique(),
        file
    );

    return fileUploaded;
} 

export default uploadImage;