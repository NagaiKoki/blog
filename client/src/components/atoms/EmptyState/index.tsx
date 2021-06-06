import React from "react";
import ContentLoader from "react-content-loader";

export const EmptyState = () => {
  return (
    <ContentLoader
      uniqueKey="empty"
      viewBox="0 0 700 800"
      height={800}
      width={"100%"}
      backgroundColor="#1a202cbf"
      foregroundColor="#282e39de"
    >
      <rect x="0" y="42" rx="5" ry="5" width="100%" height="150" />
      <rect x="0" y="212" rx="5" ry="5" width="100%" height="150" />
      <rect x="0" y="382" rx="5" ry="5" width="100%" height="150" />
      <rect x="0" y="552" rx="5" ry="5" width="100%" height="150" />
    </ContentLoader>
  );
};
