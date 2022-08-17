/* eslint-disable */
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native-web";
import Entypo from "react-native-vector-icons/Entypo";
import {Modal} from "react-native-paper";

const PauseModal = props => {

  return (
      <Modal style={styles.root} visible={props.isVisible}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.closeBtn} onPress={props.close}>
              <Entypo name="cross" size={32} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.play}>
              <Entypo name="controller-play" size={50} color="white" />
            </TouchableOpacity>
          </View>
      </Modal>
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
  closeBtn: {
    position: 'fixed',
    top: 10,
    right: 10,
  },
});

export default PauseModal;
