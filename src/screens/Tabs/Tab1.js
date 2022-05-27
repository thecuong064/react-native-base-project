import React, {useState} from 'react';

import {StyleSheet, Text, Button, SafeAreaView, View} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {LocalResources} from '../../constants';
import {colorWithOpacity} from '../../utils/ColorUtil';
import {Spacer} from '../../components/general';
import {HistorySection, NotificationSection} from '../../components/Tab1';

const history = [
  {
    title: 'Game: Traffic Racer',
    description: 'Mode: High score',
    time: '01-05-2022, 17:08',
    score: 50,
    iconSource: 'https://i.pravatar.cc/400?img=70',
  },
  {
    title: 'Game: Traffic Racer',
    description: 'Mode: High score',
    time: '01-05-2022, 17:08',
    score: 146,
    iconSource: 'https://i.pravatar.cc/400?img=69',
  },
];

const notifications = [
  {
    title: 'Use ticket to play game (-1 Ticket)',
    time: '01-05-2022, 17:08',
    iconSource: 'https://i.pravatar.cc/400?img=68',
  },
  {
    title: 'Use ticket to play game (-1 Ticket)',
    time: '01-05-2022, 17:08',
    iconSource: 'https://i.pravatar.cc/400?img=67',
  },
  {
    title: 'Use ticket to play game (-1 Ticket)',
    time: '01-05-2022, 17:08',
    iconSource: 'https://i.pravatar.cc/400?img=66',
  },
  {
    title: 'Use ticket to play game (-1 Ticket)',
    time: '01-05-2022, 17:08',
    iconSource: 'https://i.pravatar.cc/400?img=65',
  },
  {
    title: 'Use ticket to play game (-1 Ticket)',
    time: '01-05-2022, 17:08',
    iconSource: 'https://i.pravatar.cc/400?img=64',
  },
  {
    title: 'Use ticket to play game (-1 Ticket)',
    time: '01-05-2022, 17:08',
    iconSource: 'https://i.pravatar.cc/400?img=63',
  },
  {
    title: 'Use ticket to play game (-1 Ticket)',
    time: '01-05-2022, 17:08',
    iconSource: 'https://i.pravatar.cc/400?img=62',
  },
  {
    title: 'Use ticket to play game (-1 Ticket)',
    time: '01-05-2022, 17:08',
    iconSource: 'https://i.pravatar.cc/400?img=61',
  },
  {
    title: 'Use ticket to play game (-1 Ticket)',
    time: '01-05-2022, 17:08',
    iconSource: 'https://i.pravatar.cc/400?img=60',
  },
];

export const Tab1 = ({navigation}) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab 1</Text>
      <Button title="Go back to Login" onPress={() => navigation.goBack()} />
      <View style={{flex: 1, padding: 20}}>
        <SegmentedControl
          values={['Notifications', 'History']}
          selectedIndex={tabIndex}
          onChange={event =>
            setTabIndex(event.nativeEvent.selectedSegmentIndex)
          }
          tintColor={'#F2AE19'}
          backgroundColor={colorWithOpacity('#2B1B4E', 0.4)}
          fontStyle={styles.tabTitleDefault}
          activeFontStyle={styles.tabTitleSelected}
          style={styles.segmentedControls}
        />
        <Spacer height={20} />
        <NotificationSection data={notifications} isVisible={tabIndex === 0} />
        <HistorySection data={history} isVisible={tabIndex === 1} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EAED',
    flex: 1,
  },
  segmentedControls: {
    height: 40,
  },
  tabTitleDefault: {
    color: '#424242',
    fontSize: 14,
    fontFamily: LocalResources.Fonts.medium,
  },
  tabTitleSelected: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: LocalResources.Fonts.semiBold,
    fontWeight: 'normal',
  },
});
