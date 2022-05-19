import React, {forwardRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';

export const ExampleBottomSheet = forwardRef((props, sheetRef) => {
  const snapPoints = ['25%', '50%'];

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={backdropProps => (
        <BottomSheetBackdrop
          {...backdropProps}
          enableTouchThrough={true}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}>
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
