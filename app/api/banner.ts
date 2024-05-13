import service from '@/lib/request';

/** Retrieves the banners from the server. */
export const getBanners = (): Promise<IBanner> => {
	return service({
		url: '/banner',
		params: {
			type: 0
		}
	});
};
