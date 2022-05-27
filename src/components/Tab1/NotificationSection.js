import React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';
import {colorWithOpacity} from '../../utils/ColorUtil';
import {AppText, Spacer, HorizontalLine} from '../general';

const renderItem = ({item}) => {
  const {title, time, iconSource} = item;
  return (
    <>
      <View style={styles.wrapper}>
        <Image source={{uri: iconSource}} style={styles.image} />
        <Spacer width={10} />
        <View style={{flex: 1}}>
          <AppText style={styles.title}>{title}</AppText>
          <Spacer height={4} />
          <AppText style={styles.time}>{time}</AppText>
        </View>
      </View>
      <Spacer height={10} />
      <HorizontalLine height={1} color={colorWithOpacity('#814BF6', 0.4)} />
      <Spacer height={16} />
    </>
  );
};

export const NotificationSection = props => {
  const {data, isVisible} = props;
  return (
    <>
      {isVisible && (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  time: {
    color: '#A4A5AD',
    fontSize: 14,
    fontWeight: '400',
  },
});
