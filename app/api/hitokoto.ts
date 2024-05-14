import service from "@/lib/request";

/** 云村星评 */
export const getHitokoto = async (cookie: string): Promise<IStarPick> => {
	return await service({
		url: '/starpick/comments/summary',
		method: 'POST',
		data: { cookie }
	});
};