import service from "@/lib/request";

export const loginAnonymous = (): Promise<ICookieAnonymous> => {
	return service({
		url: '/register/anonimous',
		params: { timestamp: Date.now() }
	});
};