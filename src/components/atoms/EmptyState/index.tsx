import React from 'react';
import ContentLoader from 'react-content-loader';

type Props = {
  emptyAmount: number;
  margin: number;
  wrapperHeight: number;
  reactHeight: number;
};

export const EmptyState: React.VFC<Props> = ({
  emptyAmount,
  margin,
  wrapperHeight,
  reactHeight
}) => {
  const renderRect = () => {
    let y = 0;
    const rect = Array(emptyAmount)
      .fill(0)
      .map((_, i) => {
        y = i !== 0 ? y + reactHeight + margin : y;
        return (
          <rect
            key={i}
            x="0"
            y={y}
            rx="5"
            ry="5"
            width="100%"
            height={reactHeight}
          />
        );
      });
    return rect;
  };

  return (
    <ContentLoader
      uniqueKey="empty"
      viewBox={`0 0 700 ${wrapperHeight}`}
      height={wrapperHeight}
      width={'100%'}
      backgroundColor="#1a202cbf"
      foregroundColor="#282e39de"
    >
      {renderRect()}
    </ContentLoader>
  );
};
