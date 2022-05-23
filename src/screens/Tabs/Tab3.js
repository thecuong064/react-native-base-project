import React from 'react';

import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';

export const Tab3 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab 3</Text>
      <Button title="Go back to Login" onPress={() => navigation.goBack()} />
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
