/* eslint-disable */
import React, { useEffect, useState } from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import Entypo from "react-native-vector-icons/Entypo";

const IntervalModal = props => {

  const [intervalTime, setIntervalTime] = useState(props.intervalTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (intervalTime === 0) {
        clearInterval(intervalId);
        props.onFinish();
      } else {
        setIntervalTime(prevValue => prevValue - 1000);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [intervalTime]);

  return (
    <View style={styles.backdropStyle}>
      <Text style={styles.textWhite}>
        {props.description} in {intervalTime / 1000}s
      </Text>
      <TouchableOpacity onPress={props.close} style={styles.btnStyle}>
        <Entypo name="cross" size={40} color="#fafafa" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backdropStyle: {
    backgroundColor: "rgba(0,0,0,0.85)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    ...StyleSheet.absoluteFill,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  textWhite: {
    color: "white",
  },
  btnStyle: {
    fontSize: 20,
    position: "absolute",
    bottom: 50,
  },
});

export default IntervalModal;
