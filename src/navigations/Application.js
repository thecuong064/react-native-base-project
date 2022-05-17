import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Registration} from '../screens/Authentication';
import {Screens} from '../constants';
import {ModalContainer} from '../modals/ModalContainer';

const AppStack = createNativeStackNavigator();

export const Application = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={Screens.LOGIN}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          headerTitleAlign: 'center',
        }}>
        <AppStack.Screen name={Screens.LOGIN} component={Login} />
        <AppStack.Screen name={Screens.REGISTRATION} component={Registration} />
      </AppStack.Navigator>
      <ModalContainer />
    </NavigationContainer>
  );
};
