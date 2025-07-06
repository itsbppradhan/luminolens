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