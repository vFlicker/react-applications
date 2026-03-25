export type Author = {
  name: string;
  photo: string;
};

export type Module = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  videoUrl: string;
  topic: string;
  length: number;
};

export type Track = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
  numberOfViews: number;
  author: Author;
  modules: Array<{
    id: string;
    title: string;
    length: number;
  }>;
};
