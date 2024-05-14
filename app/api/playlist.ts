import request from "@/lib/request";


/**
 * Retrieves the songs of a playlist.
 *
 * @param {number} id The id of the playlist.
 * @return {Promise<PlaylistSong>} A promise that resolves to the songs of the playlist.
 */
export const getPlayListSongs = async (id: Id): Promise<PlaylistSong> => {
	return await request({
		url: '/playlist/track/all',
		params: {
			id,
			limit: 30,
			offset: 0
		}
	});
};

/**
 * Retrieves the hot playlist.
 *
 * @return {Promise<IPlaylist>} A promise that resolves to the hot playlist.
 */
export const getHotPlayList = async (): Promise<IPlaylist> => {
	return await request({
		url: '/top/playlist'
	});
};

export const getPlayListPersonalized = async (
	cookie: string // 可选
): Promise<IPlaylistPersonalized> => {
	return await request({
		url: '/personalized',
		method: 'POST',
		data: { cookie, limit: 12 }
	});
};

export const getPlayListDetail = async (
	id: number
): Promise<IPlayListDetails> => {
	return await request({
		url: '/playlist/detail',
		params: { id }
	})
};

export const getPlayListComment = async (id: Id): Promise<ISongComment> => {
	return await request({
		url: '/comment/playlist',
		params: { id }
	});
};

export const getAlbumComment = async (id: Id): Promise<ISongComment> => {
	return await request({
		url: '/comment/album',
		params: { id }
	});
};

export const getUserPlayList = async (uid: Id): Promise<IPlaylist> => {
	return await request({
		url: '/user/playlist',
		params: { uid }
	});
};

/** 获取歌词 */
export const getLyric = async (id: Id): Promise<ILyric> => {
	return await request({
		url: '/lyric',
		params: {
			id
		}
	});
};