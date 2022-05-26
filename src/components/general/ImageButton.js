import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

export const ImageButton = props => {
  return (
    <TouchableOpacity {...props} style={props.wrapperStyle}>
      <Image source={props.iconSource} style={props.iconStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  icon: {},
});

const ImageButtonSourcePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    uri: PropTypes.string,
    headers: PropTypes.objectOf(PropTypes.string),
  }),
]);

ImageButton.propTypes = {
  iconSource: ImageButtonSourcePropType,
  wrapperStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  iconStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

ImageButton.defaultProps = {
  iconSource: undefined,
  wrapperStyle: undefined,
  iconStyle: undefined,
};
