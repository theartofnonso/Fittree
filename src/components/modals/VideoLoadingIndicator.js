import React from 'react';
import {StyleSheet, Text, View} from 'react-native-web';

const VideoLoadingIndicator = props => {
  return (
      <View style={styles.container}>
        <Text>Loading Video</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 5,
    fontSize: 20,
    lineHeight: 20,
  },
  progress: {
    width: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});
export default VideoLoadingIndicator;
