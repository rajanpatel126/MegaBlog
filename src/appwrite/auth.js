/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
   client = new Client();
   account;

   AuthService() {
      this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);

      this.account = new Account(this.client);
   }

   async createAccount({ email, password, name }) {
      try {
         const userAccount = await this.account.create(
            ID.unique(),
            email,
            password,
            name
         );

         if (userAccount) {
            this.login(email, password);
         } else {
            return userAccount;
         }
      } catch (error) {
         throw error;
      }
   }

   async login({ email, password }) {
      try {
         return await this.account.createEmailSession(email, password);
      } catch (error) {
         throw error;
      }
   }

   async getCurrentUser() {
      try {
         return await this.account.get();
      } catch (error) {
         console.log("Appwrite service :: getCurrentUser :: error", error);
      }

      return null;
   }

   async logout() {
      try {
         return await this.account.deleteSessions();
      } catch (error) {
         console.log("Error in LogOut", error);
      }
   }
}

const authService = new AuthService();

export default authService;
