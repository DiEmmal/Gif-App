import { useState, useEffect } from "react";

export function useSearch(
  searchGifs: (query: string, limit: number) => void,
  gifLimit: number,
  changeGifLimit: (limit: number) => void,
) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const interval = setTimeout(() => {
      searchGifs(query, gifLimit);
    }, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [query, searchGifs, gifLimit]);

  const handleSearch = () => {
    searchGifs(query, gifLimit);
    setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") return handleSearch();
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = Number(event.target.value);

    changeGifLimit(newLimit);
  };

  return {
    //Properties
    query,

    //Methods
    setQuery,
    handleSearch,
    handleKeyDown,
    handleLimitChange,
  };
}
