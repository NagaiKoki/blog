import { Seo } from "@components/template/Layout/Seo";
import { Aside } from "@components/moleclues/Aside";
import { BlogList } from "@components/organisms/BlogList";
import { fetchPosts } from "@lib/apis/fetchPosts";
import { useGetPosts } from "@hooks/useGetPosts";
import { PostsQueryType } from "types/post";

export async function getStaticProps() {
  const payload = await fetchPosts();

  return {
    props: {
      data: payload,
    },
  };
}

export default function Home(props: PostsQueryType) {
  const { data } = useGetPosts(props.data);

  if (!data) return <></>;

  return (
    <main>
      <Seo />
      <div className="Aside__Wrapper">
        <Aside />
      </div>
      <div className="List__Wrapper">
        <BlogList posts={data} />
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
