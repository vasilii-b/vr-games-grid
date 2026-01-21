export type Category =
  | "Action"
  | "Adventure"
  | "Shooter"
  | "Simulation"
  | "Kids"
  | "Horror"
  | "Fight"
  | "Zombie"
  | "Survival"
  | "Sport"
  | "Racing"
  | "Explore";

export type Game = {
  id: string;
  title: string;         // not translated
  imageUrl: string;      // provided by you
  videoUrl: string;      // mp4/hls or youtube embed url (see note below)
  pegi: 3 | 7 | 12 | 16 | 18;
  categories: Category[]; // can be multiple
};
