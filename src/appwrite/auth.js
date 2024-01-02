import conf from "@/conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
	client = new Client();
	account;

	constructor() {
		this.client.setEndpoint(conf.endpoint).setProject(conf.projectId);
		this.account = new Account(this.client);
	}

	async createUserAccount({ email, password, name }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);
			if (userAccount) {
				return this.login({ email, password });
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

	async createAuthSession(provider) {
		const currentDomain = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
		this.account.createOAuth2Session(provider, `${currentDomain}/profile`, `${currentDomain}/auth`);
	}

	async isLoggedIn() {
		try {
			const data = await this.getCurrentUser();
			return Boolean(data);
		} catch (error) {}

		return false;
	}

	async getCurrentUser() {
		try {
			return await this.account.get();
		} catch (error) {
			console.log("Error fetching user: " + error);
		}
		return null;
	}

	async logout() {
		try {
			return await this.account.deleteSessions();
		} catch (error) {
			console.log("Error encountered during user logout: " + error);
		}
	}
}

const authService = new AuthService();

export default authService;
