import conf from "../conf/conf";
import {Client ,Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor()
    {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account();
    }

    async createAccount({ emial, password, name})
    {
        try{
           const userAccount =  await this.account.create
           (ID.unique(),emial, password, name);

           if(userAccount)
           {
            // call another mathood login if userAccount
            return this.login({emial,password});
           }
           else{
            return userAccount;
           }

        }
        catch(error){
            throw error;

        }
    }

    async login({emial, password})
    {
        try {
            return await this.account.createEmailPasswordSession(emial,password);
            
        } catch (error) {
            throw error;
        }
    }

    async gitCurrentUser()
    {
        try {
        return await this.account.get();
            
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }
    async logout()
    {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;
