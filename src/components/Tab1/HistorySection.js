import React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';
import {colorWithOpacity} from '../../utils/ColorUtil';
import {AppText, HorizontalLine, Spacer} from '../general';

const renderItem = ({item}) => {
  const {title, description, time, score, iconSource} = item;
  return (
    <>
      <View style={styles.wrapper}>
        <Image source={{uri: iconSource}} style={styles.image} />
        <View style={{flex: 1, marginLeft: 10}}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.description}>{description}</AppText>
          <AppText style={styles.time}>{time}</AppText>
        </View>
        <View>
          <AppText style={styles.scoreText}>Score</AppText>
          <AppText style={styles.score}>{score}</AppText>
        </View>
      </View>
      <Spacer height={10} />
      <HorizontalLine height={1} color={colorWithOpacity('#814BF6', 0.4)} />
      <Spacer height={16} />
    </>
  );
};

export const HistorySection = props => {
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
  description: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 4,
  },
  time: {
    color: '#A4A5AD',
    fontSize: 14,
    fontWeight: '400',
  },
  scoreText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'right',
  },
  score: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'right',
  },
});
