import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Registration} from '../screens/Authentication';
import {Screens} from '../constants';
import {ModalContainer} from '../modals/ModalContainer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import store, {persistor} from '../redux/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const AppStack = createNativeStackNavigator();

export const Application = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
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
                <AppStack.Screen
                  name={Screens.REGISTRATION}
                  component={Registration}
                />
              </AppStack.Navigator>
              <ModalContainer />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </Provider>
    </PersistGate>
  );
};
