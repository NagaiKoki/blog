import React from "react";
import { Button, Flex } from "@chakra-ui/react";

import { PostEditor } from "@components/organisms/PostEditor";
import firebase from "@lib/firebase";
import { useAuth } from "@hooks/useAuth";

const PostNew = () => {
  const { currentUser } = useAuth();

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  };

  if (!currentUser) {
    return (
      <div className="Container">
        <Flex justifyContent="center" marginTop={100}>
          <Button onClick={handleLogin}>Are you koki ?? sign in here...</Button>
        </Flex>
      </div>
    );
  } else if (
    !!currentUser &&
    currentUser.uid !== process.env.NEXT_PUBLIC_ADMIN_ID
  ) {
    return (
      <div>
        <p>you are not koky.</p>
      </div>
    );
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
