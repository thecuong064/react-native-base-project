import {View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export const HorizontalLine = props => {
  return (
    <View
      style={{
        borderBottomColor: props.color,
        borderBottomWidth: props.height,
        width: '100%',
      }}
    />
  );
};

HorizontalLine.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
};

HorizontalLine.defaultProps = {
  color: undefined,
  height: 1,
};
