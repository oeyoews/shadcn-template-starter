import service from "@/lib/request";

export const getHotPlayList = async (): Promise<IPlaylist> => {
	return await service({
		url: '/top/playlist'
	});
};