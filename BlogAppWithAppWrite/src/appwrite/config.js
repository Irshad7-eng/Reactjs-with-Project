import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query  } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor()
    {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)    ;
        this.bucket = new Service(this.client);
    }

    async createPost({title, slug, content, featureImage, status, userId})
    {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost::error",error);
            
        }

    }

    async updatePost(slug,{title, content, featureImage, status})
    {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            )
            
        } catch (error) {
            console.log("Appwrite service :: createPost::error",error);
        }
    }

    async deletePost(slug)
    {
        try{
           await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
           )
           return true;
        }
        catch(error)
        {
           console.log("Appwrite service :: deletePost::error", error);
           return false;
        }
    }

    async getPost(slug)
    {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPost:: error ", error);
            return false;
        }
    }

    async getPosts(quries = [Query.equal("status","active")])
    {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                ConvolverNode.appwriteCollectionId,
                quries,
            )
            
        } catch (error) {
            console.log("Appwite servce :: getPosts :: error", error);
            return false;
        }
    }

    // file uplode services

    async uploadFile(file)
    {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploalfile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId)
    {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }

    }

    getFilePreview(fileId)
    {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    

}

const service = new Service();
export default service;