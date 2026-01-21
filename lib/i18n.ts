export type Lang = "ro" | "ru" | "en";

export const labels = {
    ro: {
        title: "Jocuri VR",
        subtitle: "Alege un joc, apasă pe imagine și pornește trailerul.",
        searchPlaceholder: "Caută după nume…",
        filters: "Filtre",
        all: "Toate 🗂️",
        kids: "Copii 🧒",
        shooters: "Shootere 🔫",
        horror: "Horror 👻",
        cars: "Mașini 🚗",
        pegi: "PEGI",
        noResults: "Niciun joc găsit.",
        close: "Închide"
    },
    ru: {
        title: "VR Игры",
        subtitle: "Выберите игру, нажмите на изображение и смотрите трейлер.",
        searchPlaceholder: "Поиск по названию…",
        filters: "Фильтры",
        all: "Все 🗂️",
        kids: "Дети 🧒",
        shooters: "Шутеры 🔫",
        horror: "Хоррор 👻",
        cars: "Машины 🚗",
        pegi: "PEGI",
        noResults: "Игры не найдены.",
        close: "Закрыть"
    },
    en: {
        title: "VR Games",
        subtitle: "Choose a game, click on the image and watch the trailer.",
        searchPlaceholder: "Search by name…",
        filters: "Filters",
        all: "All 🗂️",
        kids: "Kids 🧒",
        shooters: "Shooters 🔫",
        horror: "Horror 👻",
        cars: "Cars 🚗",
        pegi: "PEGI",
        noResults: "No games found.",
        close: "Close"
    }
} as const;
