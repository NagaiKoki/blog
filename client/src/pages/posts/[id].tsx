import React from "react";
import { useRouter } from "next/router";
import { Article } from "components/organisms/Articles";

const PostShow = () => {
  const { query } = useRouter();

  if (!query.id) {
    return <></>;
  }

  return (
    <main>
      <article>
        <Article id={Number(query.id)} />
      </article>
    </main>
  );
};

export default PostShow;
