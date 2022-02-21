import React from 'react';

import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import Screens from '../../constants/Screens';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate(Screens.REGISTRATION)}
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

export default Login;
