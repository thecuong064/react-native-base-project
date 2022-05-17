import React from 'react';

import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import {Modals, Screens} from '../../constants';
import {showModal} from '../../redux/actions/modalActions';
import store from '../../redux/configureStore';

export const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate(Screens.REGISTRATION)}
      />
      <Button
        title="Coming Soon banner"
        onPress={() => store.dispatch(showModal(Modals.ComingSoon))}
      />
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
