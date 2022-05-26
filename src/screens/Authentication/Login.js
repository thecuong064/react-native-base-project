import React, {useRef} from 'react';

import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import {ExampleBottomSheet} from '../../components/bottomSheets';
import {Modals, Screens} from '../../constants';
import {showModal} from '../../redux/actions/modalActions';
import store from '../../redux/configureStore';
import {AppText} from '../../components/general';

export const Login = ({navigation}) => {
  const sheetRef = useRef(null);

  const showBottomSheet = () => {
    sheetRef.current?.present();
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppText style={{fontSize: 20, fontWeight: '200'}}>Login</AppText>
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate(Screens.REGISTRATION)}
      />
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate(Screens.BOTTOM_TAB)}
      />
      <Button
        title="Coming Soon banner"
        onPress={() => store.dispatch(showModal(Modals.ComingSoon))}
      />
      <Button title="Bottom sheet" onPress={showBottomSheet} />
      <ExampleBottomSheet ref={sheetRef} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E8EAED',
    flex: 1,
    justifyContent: 'center',
  },
});
