import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export const CardSection = (props) => (
  <View style={styles.containerStyle}>{props.children}</View>
);

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});
