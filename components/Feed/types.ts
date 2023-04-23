export type Author = {
  name: string;
  username: string;
  avatar: string;
};

export type TweetType = {
  id: number;
  author: Author;
  createdAt: string;
  content: string;
};

export type TweetsType = Array<TweetType>;
