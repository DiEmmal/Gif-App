import { useState } from "react";
import { GifsContainer } from "./gif/components/Gifs-container.component";
import { PreviousSearchedGifs } from "./gif/components/Previous-searched-gifs.component";
import type { Gif } from "./gif/interfaces/Gif.interface";
import { Header } from "./shared/components/Header";
import { SearchBar } from "./shared/components/Search-bar";
import { getGifsByQuery } from "./gif/actions/get-gif-by-query.actions";

export function GifsApp() {
  const [previousSearches, setPreviousSearches] = useState([] as string[]);

  const [gifs, setGifs] = useState([] as Gif[]);

  const onSearch = async (query: string, limit: number) => {
    if (!query.trim()) return;

    const cleanedQuery = query.trim().toLowerCase();

    if (!previousSearches.includes(cleanedQuery))
      setPreviousSearches((prev) => prev.length >= 10
        ? [...prev.slice(1), cleanedQuery]
        : [...prev, cleanedQuery]
    );

    const gifs = await getGifsByQuery(cleanedQuery, limit);

    setGifs(gifs);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.16),_transparent_32%),radial-gradient(circle_at_90%_20%,_rgba(71,85,105,0.2),_transparent_28%),#111214]">
      <Header title="React giphy app" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-12 pt-3 sm:px-6 sm:pt-6">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6">
          <SearchBar onSearch={onSearch} />
          <PreviousSearchedGifs prevSearchedGifs={previousSearches}/>
        </div>
        <GifsContainer gifs={gifs} />
      </div>
    </main>
  );
}
