import React from 'react';

import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1, Tab2, Tab3, Tab4} from '../screens/Tabs';
import {LocalResources} from '../constants/LocalResources';
import {TabIcon, NullView} from '../components/bottomTabs';
import {Screens} from '../constants';

const ScreenTitles = {
  TAB_1: 'Tab 1',
  TAB_2: 'Tab 2',
  TAB_3: 'Tab 3',
  TAB_4: 'Tab 4',
};
const Tab = createBottomTabNavigator();

export const BottomTab = ({navigation, route}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name={Screens.TAB_1}
        component={Tab1}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={
                LocalResources.BottomTabIcons.ic_tab_home_selected
              }
              defaultIconSrc={LocalResources.BottomTabIcons.ic_tab_home}
              focused={focused}
              title={ScreenTitles.TAB_1}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.TAB_2}
        component={Tab2}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={
                LocalResources.BottomTabIcons.ic_tab_home_selected
              }
              defaultIconSrc={LocalResources.BottomTabIcons.ic_tab_home}
              focused={focused}
              title={ScreenTitles.TAB_2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={NullView}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={LocalResources.BottomTabIcons.ic_tab_add}
              defaultIconSrc={LocalResources.BottomTabIcons.ic_tab_add}
              focused={focused}
              title="Add"
            />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            console.log('Add photo pressed');
            // navigation.navigate('UploadingOptionsModal');
          },
        })}
      />
      <Tab.Screen
        name={Screens.TAB_3}
        component={Tab3}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={
                LocalResources.BottomTabIcons.ic_tab_home_selected
              }
              defaultIconSrc={LocalResources.BottomTabIcons.ic_tab_home}
              focused={focused}
              title={ScreenTitles.TAB_3}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.TAB_4}
        component={Tab4}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focusedIconSrc={
                LocalResources.BottomTabIcons.ic_tab_home_selected
              }
              defaultIconSrc={LocalResources.BottomTabIcons.ic_tab_home}
              focused={focused}
              title={ScreenTitles.TAB_4}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    borderTopColor: '#dbdbdb',
  },
  container: {
    backgroundColor: '#fefefe',
    flex: 1,
  },
});
