"use server"
import { Client, Account, Databases } from "appwrite";
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

export const getProducts = async () => {
  const { database } = await createSessionClient();
  const products = await database.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.collectionProductsId
  );
  console.log(products.documents);
  return products.documents;
};