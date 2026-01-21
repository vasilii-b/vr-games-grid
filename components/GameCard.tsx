import { Game } from "@/lib/types";
import { Lang } from "@/lib/i18n";

// Extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  
  // Handle youtu.be format: https://youtu.be/VIDEO_ID
  const youtuBeMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (youtuBeMatch) return youtuBeMatch[1];
  
  // Handle youtube.com/watch?v=VIDEO_ID format (v parameter can be anywhere in query string)
  const watchMatch = url.match(/youtube\.com\/watch.*[?&]v=([^&]+)/);
  if (watchMatch) return watchMatch[1];
  
  // Handle youtube.com/embed/VIDEO_ID format
  const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
  if (embedMatch) return embedMatch[1];
  
  return null;
}

// Get the appropriate image URL - use YouTube thumbnail if video is from YouTube
function getImageUrl(game: Game): string {
  const youtubeId = getYouTubeVideoId(game.videoUrl);
  if (youtubeId) {
    return `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
  }
  return game.imageUrl;
}

// PEGI colors based on official guidelines from https://pegi.info/what-do-the-labels-mean
function getPegiColor(pegi: number): string {
  if (pegi === 3 || pegi === 7) return "bg-green-600";
  if (pegi === 12 || pegi === 16) return "bg-orange-500";
  if (pegi === 18) return "bg-red-600";
  // Fallback for any unexpected values
  return "bg-gray-600";
}

// Get PEGI info link based on language
function getPegiLink(lang: Lang): string {
  if (lang === "ro") {
    return "https://pegi.info/ro/what-do-the-labels-mean";
  }
  // RU and other languages use the base URL
  return "https://pegi.info/what-do-the-labels-mean";
}

export function GameCard({
  game,
  onClick,
  lang,
}: {
  game: Game;
  onClick: () => void;
  lang: Lang;
}) {
  return (
    <button
      onClick={onClick}
      className="group text-left rounded-2xl bg-black/30 hover:bg-black/50 border border-black/5 hover:border-white/90 transition overflow-hidden shadow-lg hover:shadow-glow"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={getImageUrl(game)}
          alt={game.title}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <a
            href={getPegiLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide border border-white/20 hover:border-white/40 transition ${getPegiColor(game.pegi)}`}
          >
            PEGI {game.pegi}
          </a>
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
