import { Post } from '@models/entities/Post';

export type PostsQueryType = {
  data: Post[];
};

export type PostQueryType = {
  data: PostType;
};

export type PostType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type ResponsePostType = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};
