export type TrackAuthor = {
  name: string;
  photo: string;
};

export type Module = {
  id: string;
  title: string;
  length: number;
  content?: string;
  thumbnail?: string | null;
  topic?: string;
  videoUrl?: string;
};

export type Track = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
  numberOfViews: number;
  author: TrackAuthor;
  modules: Module[];
};
