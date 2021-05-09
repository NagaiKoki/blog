import React from "react";
import Image from "next/image";
import { Text, Link } from "@chakra-ui/react";

export const Aside = () => {
  return (
    <aside>
      <div className="Image__Wrapper">
        <Image
          src="/kokiImage.png"
          width="80"
          height="80"
          className="Profile__Image"
        />
      </div>
      <div>
        <Text fontSize="lg">Software Engineer</Text>
        <Text fontSize="lg">
          <Link
            href="https://github.com/NagaiKoki"
            textColor="orange.400"
            style={{ textDecoration: "underline" }}
          >
            Github
          </Link>
        </Text>
        <Text fontSize="lg">
          <Link
            href="https://twitter.com/0906koki"
            textColor="orange.400"
            style={{ textDecoration: "underline" }}
          >
            Twitter
          </Link>
        </Text>
      </div>
      <style jsx>{`
        aside {
          display: flex;
        }
        .Image__Wrapper {
          margin-right: 30px;
        }
      `}</style>
      <style jsx global>{`
        .Profile__Image {
          border-radius: 60%;
        }
      `}</style>
    </aside>
  );
};
