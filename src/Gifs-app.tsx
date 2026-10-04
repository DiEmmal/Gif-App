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
    <main className="shadow-xl shadow-blue-200 min-h-screen overflow-hidden">
      <Header
        title="React giphy app"
        description="Find the perfect gif and share it"
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-12 pt-3 sm:px-6 sm:pt-6">
        <div className="shadow-md shadow-blue-200 rounded-md p-8 min-w-75 w-full max-w-2xl">
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
