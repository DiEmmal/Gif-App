import type { Gif } from "../interfaces/Gif.interface";

interface Props {
  gifs: Gif[];
}

export function GifsContainer({ gifs }: Props) {
  return (
    <div className="mt-8 grid w-full max-w-6xl grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
      {gifs.map((gif) => (
        <article
          key={gif.id}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-1.5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
        >
          <img
            src={gif.url}
            alt={gif.title}
            className="aspect-square w-full rounded-xl object-cover grayscale-[0.15] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
          <h2 className="mt-2 text-sm font-medium text-white/75">
            {gif.title}
          </h2>
          <p className="text-xs text-white/50">
            {gif.width}x{gif.height}
          </p>
        </article>
      ))}
    </div>
  );
}
