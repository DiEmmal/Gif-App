import React, { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onSearch: (query: string, limit: number) => void;
}

export function SearchBar({ placeholder = "Search...", onSearch }: Props) {
  const [lastSearch, setLastSearch] = useState('');
  const [query, setQuery] = useState("");
  const defaultLimit = 12;
  const [limit, setLimit] = useState(defaultLimit);

  useEffect(() => {
    const interval = setTimeout(() => {
      onSearch(query, limit);
    }, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [query, onSearch, limit]);

  const handleSearch = () => {
    setLastSearch(query.trim().toLowerCase());
    onSearch(query, limit);
    setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") return handleSearch();
  };

  const handleSelectChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLimit = Number(event.target.value);

    setLimit(newLimit);

    if(lastSearch) {
      onSearch(lastSearch, newLimit);
    }
  };

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
          value={limit}
          className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-200 outline-none transition duration-200 hover:border-white/25 hover:bg-black/30 focus:border-slate-400 focus:ring-4 focus:ring-white/10"
          onChange={handleSelectChange}
        >
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="18">18</option>
        </select>
      </div>
    </div>
  );
};