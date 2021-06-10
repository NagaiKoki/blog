export type PostsQueryType = {
  data: {
    posts: PostType[]
    loading: boolean
  }
};

export type PostType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};
