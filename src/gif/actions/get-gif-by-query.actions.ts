import { giphyApi } from "../api/giphy.api";
import type { GiphyResponse } from "../interfaces/Giphy-response.interface";

export const getGifsByQuery = async (query: string, limit: number) => {

    const response = await giphyApi.get<GiphyResponse>('/search', {
        params: {
            q: query,
            limit,
            rating: 'r'
        }
    });

    return response.data.data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.fixed_width.url,
        width: parseInt(gif.images.fixed_width.width),
        height: parseInt(gif.images.fixed_width.height)
    }));

};