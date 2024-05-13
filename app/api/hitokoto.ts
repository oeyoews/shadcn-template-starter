import service from "@/lib/request";

export const getHitokoto = async (cookie: string): Promise<IStarPick> => {
	return await service({
		url: '/starpick/comments/summary',
		method: 'POST',
		data: { cookie }
	});
};