import { View } from 'react-native';
import React from 'react';

export const Spacer = (props) => {
    return (
        <View
            style={{
                height: props.height ?? 0,
                width: props.width ?? 0,
            }}
        />
    )
}