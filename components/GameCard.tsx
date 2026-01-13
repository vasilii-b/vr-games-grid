import { Game } from "@/lib/types";

export function GameCard({
  game,
  onClick,
}: {
  game: Game;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group text-left rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition overflow-hidden shadow-lg hover:shadow-glow"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs font-semibold tracking-wide border border-white/10">
            PEGI {game.pegi}
          </span>
        </div>
      </div>

      <div className="p-3">
        <div className="font-semibold leading-snug line-clamp-2">{game.title}</div>

        <div className="mt-2 flex flex-wrap gap-1">
          {game.categories.map((c) => (
            <span
              key={c}
              className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
