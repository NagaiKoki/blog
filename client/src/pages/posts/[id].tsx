import React from "react";
import { useRouter } from "next/router";
import { Article } from "components/organisms/Articles";
import { Aside } from "components/moleclues/Aside";
import { Heading } from "@chakra-ui/react";

import { TITLE } from "../../constants/title";

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
      <div className="Aside__Wrapper">
        <Heading as="h3" size="lg" colorScheme="whiteAlpha" marginBottom="3">
          {TITLE}
        </Heading>
        <Aside />
      </div>
      <style jsx>{`
        .Aside__Wrapper {
          margin-top: 90px;
        }
      `}</style>
    </main>
  );
};

export default PostShow;
