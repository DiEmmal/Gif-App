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
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition duration-200 placeholder:text-slate-500 hover:border-white/25 hover:bg-black/30 focus:border-slate-400 focus:ring-4 focus:ring-white/10"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          type="button"
          className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-900 transition duration-200 hover:bg-white hover:shadow-lg hover:shadow-white/10 active:scale-95 sm:w-auto"
        >
          Search
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 sm:justify-start">
        <label
          htmlFor="limit"
          className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400"
        >
          GIF limit
        </label>
        <select
          id="limit"
          value={gifLimit}
          className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-200 outline-none transition duration-200 hover:border-white/25 hover:bg-black/30 focus:border-slate-400 focus:ring-4 focus:ring-white/10"
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
