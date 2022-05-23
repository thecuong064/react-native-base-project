import React, {useState} from 'react';

import {View, Image, StyleSheet} from 'react-native';

export const TabIcon = props => {
  let {focusedIconSrc, defaultIconSrc, focused, title} = props;
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
      }}>
      <Image
        source={focused ? focusedIconSrc : defaultIconSrc}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
        }}
      />
    </View>
  );
};
