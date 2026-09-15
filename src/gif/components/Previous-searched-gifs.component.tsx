interface Props {
  prevSearchedGifs: string[];
}
export function PreviousSearchedGifs({prevSearchedGifs}: Props) {
  return (
    <div className="mt-5 border-t border-white/10 pt-4">
      <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-500">
        Recent searches
      </p>
      <ul className="m-0 flex max-w-full list-none flex-wrap gap-2 p-0">
        {prevSearchedGifs.map((gif) => (
        <li key={gif} className="cursor-pointer rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95">
          {gif}
        </li>
        ))}
      </ul>
    </div>
  );
}
