"use server";

import { Post } from "./models/post.model";
import { IUser } from "./models/user.model";
import { currentUser } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import { Comment } from "./models/comment.model";
import connectDB from "./connectDB";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const createPostAction = async (
  inputText: string,
  selectedFile: string
) => {
  await connectDB();
  const user = await currentUser();
  if (!user) {
    throw new Error("user not athenticated");
  }
  if (!inputText) {
    throw new Error("Input field is required");
  }
  const image = selectedFile;

  const userDatabase: IUser = {
    firstName: user.firstName || "first Name",
    lastName: user.lastName || "last Name",
    userId: user.id,
    profilePhoto: user.imageUrl || "",
  };

  let uploadResponse;
  try {
    if (image) {
      uploadResponse = await cloudinary.uploader.upload(image);
      await Post.create({
        description: inputText,
        user: userDatabase,
        imageUrl: uploadResponse?.secure_url,
      });
    } else {
      await Post.create({
        description: inputText,
        user: userDatabase,
      });
    }
    revalidatePath("/");
  } catch (error) {
    throw new Error("error");
  }
};
