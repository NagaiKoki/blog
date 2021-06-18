import firebase from "firebase";

export type FirestoreTimestamp = firebase.firestore.Timestamp;

export type PostsQueryType = {
  data: PostType[];
};

export type PostQueryType = {
  data: PostType;
};

export type RequestPostType = {
  title: string;
  content: string;
};

export type PostType = {
  id: string;
  title: string;
  content: string;
  status: number;
  createdAt: string;
  updatedAt: string;
};

export type ResponsePostType = Omit<PostType, "createdAt" | "updatedAt"> & {
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
};
