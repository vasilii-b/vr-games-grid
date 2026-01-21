import { useEffect } from "react";
import { Game } from "@/lib/types";
import VideoPlayer from "./VideoPlayer";

function isYouTube(url: string) {
  return /youtube\.com|youtu\.be/.test(url);
}

function toYouTubeEmbed(url: string) {
  // supports youtu.be/<id> or youtube.com/watch?v=<id>
  const short = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/)?.[1];
  const long = url.match(/[?&]v=([A-Za-z0-9_-]+)/)?.[1];
  const id = short || long;
  return id ? `https://www.youtube.com/embed/${id}` : url;
}

export function GameModal({
  game,
  onClose,
  pegiLabel,
  closeLabel,
}: {
  game: Game;
  onClose: () => void;
  pegiLabel: string;
  closeLabel: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const youtube = isYouTube(game.videoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden border border-white/15 bg-[#0b0f1f] shadow-2xl">
        <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
          <div>
            <div className="text-lg sm:text-xl font-bold">{game.title}</div>
            <div className="mt-2 flex gap-2 items-center overflow-x-auto">
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 whitespace-nowrap">
                {pegiLabel} {game.pegi}
              </span>
              {game.categories.map((c) => (
                <span
                  key={c}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 whitespace-nowrap"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold bg-white/10 hover:bg-white/15 border border-white/10"
          >
            {closeLabel}
          </button>
        </div>

        <div className="px-4 sm:px-5 pb-5">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
            <div className="aspect-video">
              {youtube ? (
                <iframe
                  className="w-full h-full"
                  src={toYouTubeEmbed(game.videoUrl) + "?autoplay=1"}
                  title={game.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <VideoPlayer key={game.videoUrl} src={game.videoUrl} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
