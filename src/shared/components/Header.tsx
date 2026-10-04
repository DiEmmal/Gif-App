interface Props {
  title: string;
  description?: string;
}

export function Header({ title, description }: Props) {
  return (
    <header className="mx-auto flex w-full flex-col items-center justify-center gap-2 mt-2 sm:mt-4">
      <div>
        <h1 className="m-0 bg-linear-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-5xl animate-pulse">
          {title}
        </h1>
        {description && (
          <p className="text-slate-500 font-bold">{description}</p>
        )}
      </div>
    </header>
  );
}
