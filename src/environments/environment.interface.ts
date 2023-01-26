export interface IEnvironment {
	production: boolean;
	baseUrl: string;
	serverImageUrl: string;
	siteKey?: string;
	keySecret?: string;
}
