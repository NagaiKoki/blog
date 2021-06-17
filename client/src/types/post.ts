import firebase from 'firebase'

export type FirestoreTimestamp = firebase.firestore.Timestamp

export type PostsQueryType = {
  data: {
    posts: PostType[]
    loading: boolean
  }
};

export type RequestPostType = {
  title: string
  content: string
}

export type PostType = {
  id: number;
  title: string;
  content: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp
};
