import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/client";

import { PostEditor } from "@components/organisms/PostEditor";

const PostNew = () => {
  const [session, loading] = useSession();

  if (!session) {
    return (
      <div className="Container">
        <Flex justifyContent="center" marginTop={100}>
          <Button onClick={() => signIn()} isLoading={loading}>
            Are you koki ? sign in here...
          </Button>
        </Flex>
      </div>
    );
  }

  if (loading) {
    return <></>;
  }

  return (
    <div className="Container">
      <div className="Editor__Wrapper">
        <PostEditor />
      </div>
      <style jsx>{`
        .Container {
          position: absolute;
          left: 0;
          width: 100vw;
        }
        .Editor__Wrapper {
          margin-top: 30px;
        }
      `}</style>
    </div>
  );
};

export default PostNew;
