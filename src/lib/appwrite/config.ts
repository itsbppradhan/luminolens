export const appwriteConfig = {
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
  collectionProductsId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS!,
  collectionVideosId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_VIDEOS!,
  collectionUserStatusId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_USER_STATUS!,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
};