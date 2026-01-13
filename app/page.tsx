"use client";

import { useMemo, useState } from "react";
import gamesData from "@/data/games.json";
import { Game, Category } from "@/lib/types";
import { labels, Lang } from "@/lib/i18n";
import { GameCard } from "@/components/GameCard";
import { GameModal } from "@/components/GameModal";

const ALL = "ALL" as const;
type Filter = typeof ALL | Category;

const filterKeys: { key: Filter; ro: string; ru: string }[] = [
  { key: ALL, ro: labels.ro.all, ru: labels.ru.all },
  { key: "Kids", ro: labels.ro.kids, ru: labels.ru.kids },
  { key: "Shooters", ro: labels.ro.shooters, ru: labels.ru.shooters },
  { key: "Horror", ro: labels.ro.horror, ru: labels.ru.horror },
  { key: "Cars", ro: labels.ro.cars, ru: labels.ru.cars },
];

export default function Page() {
  const games = gamesData as Game[];

  const [lang, setLang] = useState<Lang>("ro");
  const t = labels[lang];

  const [filter, setFilter] = useState<Filter>(ALL);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Game | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return games
      .filter((g) => {
        // Category filter
        if (filter === ALL) return true;

        // Special rule: when Kids filter is selected, exclude any Horror games
        if (filter === "Kids") {
          const hasKids = g.categories.includes("Kids");
          const hasHorror = g.categories.includes("Horror");
          return hasKids && !hasHorror;
        }

        return g.categories.includes(filter);
      })
      .filter((g) => {
        if (!q) return true;
        return g.title.toLowerCase().includes(q);
      });
  }, [games, filter, query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1f] via-[#11183a] to-[#2a145a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t.title}
            </h1>
            <p className="mt-2 text-white/70">{t.subtitle}</p>
          </div>

          <button
            onClick={() => setLang((p) => (p === "ro" ? "ru" : "ro"))}
            className="rounded-2xl px-4 py-2 font-semibold bg-white/10 hover:bg-white/15 border border-white/10 flex items-center gap-2"
            aria-label="Toggle language"
          >
            <span>{lang === "ro" ? "🇷🇴" : "🇷🇺"}</span>
            {lang === "ro" ? "RO" : "RU"}
          </button>
        </div>

        {/* Controls */}
        <div className="mt-6 sm:mt-8 grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-white/80">
                  {t.filters}:
                </span>

                <div className="flex flex-wrap gap-2">
                  {filterKeys.map((f) => {
                    const label = lang === "ro" ? f.ro : f.ru;
                    const active = filter === f.key;

                    return (
                      <button
                        key={String(f.key)}
                        onClick={() => setFilter(f.key)}
                        className={[
                          "rounded-full px-4 py-2 text-sm font-semibold border transition",
                          active
                            ? "bg-white text-black border-white"
                            : "bg-white/5 hover:bg-white/10 border-white/10",
                        ].join(" ")}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full sm:w-[360px] rounded-2xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/70">
              {t.noResults}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map((g) => (
                <GameCard key={g.id} game={g} onClick={() => setSelected(g)} />
              ))}
            </div>
          )}
        </div>
      </div>

      {selected && (
        <GameModal
          game={selected}
          onClose={() => setSelected(null)}
          pegiLabel={t.pegi}
          closeLabel={t.close}
        />
      )}
    </div>
  );
}
