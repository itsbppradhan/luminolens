"use server"
import { Client, Account, Databases } from "node-appwrite";
import { cookies } from "next/headers";
import { appwriteConfig } from "./config";

export const createSessionClient = async () => {

  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

  const session = (await cookies()).get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No session found");
  }

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    }
  }

}

export const createPublicClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
  return {
    database: new Databases(client),
  };
};

export const getProducts = async () => {
  const { database } = await createPublicClient();
  const products = await database.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.collectionProductsId
  );
  console.log("Products:", products);
  return products.documents;
};

export const getVideos = async () => {
  const { database } = await createPublicClient();
  const videos = await database.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.collectionVideosId
  );
  console.log("Videos:", videos);
  return videos.documents;
};


import { ID, Query } from "node-appwrite";

export const markVideoWatched = async (userId: string, videoId: string) => {
  const { database } = await createPublicClient();

  try {
    // Check if already exists
    const existing = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collectionUserStatusId,
      [
        Query.equal("userId", userId),
        Query.equal("videoId", videoId),
      ]
    );

    if (existing.total > 0) {
      const doc = existing.documents[0];
      return await database.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collectionUserStatusId,
        doc.$id,
        { watched: true }
      );
    }

    return await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collectionUserStatusId,
      ID.unique(),
      {
        userId,
        videoId,
        watched: true,
      }
    );
  } catch (err) {
    console.error("Failed to mark video watched:", err);
    throw err;
  }
};

export const getWatchedVideos = async (userId: string): Promise<string[]> => {
  const { database } = await createPublicClient();

  try {
    const res = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collectionUserStatusId,
      [
        Query.equal("userId", userId),
        Query.equal("watched", true),
      ]
    );

    return res.documents.map((doc) => doc.videoId);
  } catch (err) {
    console.error("Failed to fetch watched videos:", err);
    return [];
  }
};
