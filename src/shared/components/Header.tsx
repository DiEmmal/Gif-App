interface Props {
  title: string;
}

export function Header({ title }: Props) {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 pb-5 pt-8 sm:px-6 sm:pb-7 sm:pt-12">
      <div>
        <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-slate-400">
          GIF discovery
        </p>
        <h1 className="m-0 bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-5xl">
          {title}
        </h1>
      </div>
    </header>
  );
}
