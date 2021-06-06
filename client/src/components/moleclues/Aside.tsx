import React from "react";
import Image from "next/image";
import { Text, Link, Flex } from "@chakra-ui/react";

export const Aside = () => {
  return (
    <aside>
      <div className="Image__Wrapper">
        <Image
          src="/kokiImage.png"
          width="60"
          height="60"
          className="Profile__Image"
        />
      </div>
      <div>
        <Text fontSize="md" fontWeight="bold" padding="0">
          Personal blog written by Koki Nagai
        </Text>
        <Flex paddingTop="10px">
          <Text fontSize="md" marginRight="10px" padding="0">
            <Link
              href="https://github.com/NagaiKoki"
              textColor="orange.400"
              style={{ textDecoration: "underline" }}
            >
              Github
            </Link>
          </Text>
          <Text fontSize="md" padding="0">
            <Link
              href="https://twitter.com/0906koki"
              textColor="orange.400"
              style={{ textDecoration: "underline" }}
            >
              Twitter
            </Link>
          </Text>
        </Flex>
      </div>
      <style jsx>{`
        aside {
          display: flex;
          align-items: center;
        }
        .Image__Wrapper {
          margin-right: 20px;
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
