import { useSearch } from "../hooks/useSearch";

interface Props {
  placeholder?: string;
  gifLimit: number;
  searchGifs: (query: string, limit: number) => void;
  changeGifLimit: (limit: number) => void;
}

export function SearchBar({
  placeholder = "Search...",
  gifLimit,
  searchGifs,
  changeGifLimit,
}: Props) {
  const { query, setQuery, handleKeyDown, handleSearch, handleLimitChange } =
    useSearch(searchGifs, gifLimit, changeGifLimit);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="text"
          value={query}
          placeholder={placeholder}
          onChange={(event) => setQuery(event.target.value)}
          className="h-10 w-full sm:w-[18rem] p-2 rounded-lg border border-slate-700 active:border-white ml-auto"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          type="button"
          className="h-10 mr-auto rounded-md bg-stone-800 px-2 cursor-pointer active:bg-stone-600 hover:bg-stone-900 transition duration-200"
        >
          Search
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 sm:justify-start mx-auto">
        <label
          htmlFor="limit"
          className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400"
        >
          GIF limit
        </label>
        <select
          id="limit"
          value={gifLimit}
          className="rounded-md border border-slate-700 bg-transparent px-2 py-1 text-slate-200 focus:border-blue-500"
          onChange={handleLimitChange}
        >
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="18">18</option>
        </select>
      </div>
    </div>
  );
}
