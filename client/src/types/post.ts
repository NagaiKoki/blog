export type PostsQueryType = {
  posts: PostType[];
};

export type PostType = {
  id: number;
  title: string;
  content: string;
};
