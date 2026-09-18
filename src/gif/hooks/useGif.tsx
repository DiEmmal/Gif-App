import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gif-by-query.actions";
import type { Gif } from "../interfaces/Gif.interface";

export const useGif = () => {
  const [gifLimit, setGifLimit] = useState(12);
  const [previousSearches, setPreviousSearches] = useState([] as string[]);
  const [gifs, setGifs] = useState([] as Gif[]);
  const currentQuery = useRef("");
  const gifCache = useRef({} as Record<string, Gif[]>);

  const changeGifLimit = async (newLimit: number) => {
    setGifLimit(newLimit);

    if (currentQuery.current) {
      await searchGifs(currentQuery.current, newLimit);
    }
  };

  const selectPreviousSearch = async (query: string) => {
    const cleanedQuery = query.trim().toLowerCase();
    const cacheKey = `${cleanedQuery}-${gifLimit}`;
    currentQuery.current = cleanedQuery;

    if (gifCache.current[cacheKey]) {
      setGifs(gifCache.current[cacheKey]);
      return;
    }

    const gifs = await getGifsByQuery(cleanedQuery, gifLimit);
    setGifs(gifs);
    gifCache.current[cacheKey] = gifs;
  };

  const searchGifs = async (query: string, limit: number) => {
    if (!query.trim()) return;

    const cleanedQuery = query.trim().toLowerCase();
    currentQuery.current = cleanedQuery;

    if (!previousSearches.includes(cleanedQuery))
      setPreviousSearches((prev) =>
        prev.length >= 10
          ? [...prev.slice(1), cleanedQuery]
          : [...prev, cleanedQuery],
      );

    const gifs = await getGifsByQuery(cleanedQuery, limit);

    setGifs(gifs);
    gifCache.current[`${cleanedQuery}-${limit}`] = gifs;
  };

  return {
    //Properties
    gifs,
    previousSearches,
    gifLimit,

    //Method/actions
    searchGifs,
    selectPreviousSearch,
    changeGifLimit,
  };
};
