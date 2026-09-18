import { GifsContainer } from "./gif/components/Gifs-container.component";
import { PreviousSearchedGifs } from "./gif/components/Previous-searched-gifs.component";
import { Header } from "./shared/components/Header";
import { SearchBar } from "./shared/components/Search-bar";
import { useGif } from "./gif/hooks/useGif";

export function GifsApp() {
  const {
    gifs,
    previousSearches,
    gifLimit,
    searchGifs,
    selectPreviousSearch,
    changeGifLimit,
  } = useGif();

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.16),_transparent_32%),radial-gradient(circle_at_90%_20%,_rgba(71,85,105,0.2),_transparent_28%),#111214]">
      <Header title="React giphy app" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-12 pt-3 sm:px-6 sm:pt-6">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6">
          <SearchBar
            gifLimit={gifLimit}
            searchGifs={searchGifs}
            changeGifLimit={changeGifLimit}
          />
          <PreviousSearchedGifs
            prevSearchedGifs={previousSearches}
            selectQuery={selectPreviousSearch}
          />
        </div>
        <GifsContainer gifs={gifs} />
      </div>
    </main>
  );
}
