import { beforeEach, describe, expect, it } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";
import { giphyApi } from "../../../src/gif/api/giphy.api";
import { getGifsByQuery } from "../../../src/gif/actions/get-gif-by-query.actions";
import { giphyResponseMock } from "../../mock/giphy.response.data";


describe("get-gifs-by-query.action", () => {
    let mock = new AxiosMockAdapter(giphyApi);

    beforeEach(() => {
        mock = new AxiosMockAdapter(giphyApi);
    });

    it("should return a list of GIFs based on the provided query", async () => {
        mock.onGet("/search").reply(200, giphyResponseMock);

        const gifs = await getGifsByQuery("test", 1);

        expect(gifs).toHaveLength(10);
        gifs.forEach(gif => {
            expect(gif).toStrictEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
                width: expect.any(Number),
                height: expect.any(Number)
            })
        })

    });

});