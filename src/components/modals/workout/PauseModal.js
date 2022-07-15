/* eslint-disable */
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native-web";

const PauseModal = props => {

  return (
    <View style={styles.backdropStyle}>
      <TouchableOpacity onPress={props.play}>
        {/*<Entypo name="controller-play" size={50} color="white" />*/}
      </TouchableOpacity>
      <TouchableOpacity onPress={props.close} style={styles.btnStyle}>
        {/*<Entypo name="cross" size={40} color="#fafafa" />*/}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backdropStyle: {
    backgroundColor: "rgba(0,0,0,0.85)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFill,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  btnStyle: {
    fontSize: 20,
    position: "absolute",
    bottom: 50,
  },
});

export default PauseModal;
