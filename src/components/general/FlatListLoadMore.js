import React, {useState, forwardRef} from 'react';
import {FlatList} from 'react-native';

export const FlatListLoadMore = forwardRef((props, ref) => {
  const DEFAULT_THRESHOLD = 1.5;

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    if (hasScrolled && props?.onLoadMore && !isLoading) {
      setIsLoading(true);
      props.onLoadMore();
      setIsLoading(false);
    }
  };
  return (
    <FlatList
      {...props}
      ref={ref}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={props.onEndReachedThreshold ?? DEFAULT_THRESHOLD}
      onScrollBeginDrag={() => {
        setHasScrolled(true);
      }}
    />
  );
});
