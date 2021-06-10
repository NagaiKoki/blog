import { Aside } from "components/moleclues/Aside";
import { BlogList } from "components/organisms/BlogList";

import { client } from '../config/graphql'
import { PostsQueryType } from "../types/post";
import { GET_POSTS_QUERY } from "../graphql/post";


export async function getStaticProps() {
  const { data, loading } = await client.query<PostsQueryType | undefined>({
    query: GET_POSTS_QUERY
  })

  return {
    props: {
      data: data,
      loading: loading
    }
  }
}

export default function Home(props: PostsQueryType) {
  if (!props.data) return <></>

  return (
    <main>
      <div className="Aside__Wrapper">
        <Aside />
      </div>
      <div className="List__Wrapper">
        <BlogList data={props} />
      </div>
      <style jsx>{`
        .Aside__Wrapper {
          margin-top: 50px;
        }
        .List__Wrapper {
          padding-top: 40px;
        }
      `}</style>
    </main>
  );
}
