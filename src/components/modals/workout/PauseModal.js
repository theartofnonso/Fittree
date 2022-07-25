/* eslint-disable */
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native-web";
import Entypo from "react-native-vector-icons/Entypo";

const PauseModal = props => {

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.play}>
          <Entypo name="controller-play" size={50} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    height: '100vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PauseModal;
