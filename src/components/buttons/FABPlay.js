import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Feather} from "@expo/vector-icons";

const FABPlay = props => {
  return (
    <TouchableOpacity style={styles.fab} onPress={props.onPress}>
      <Feather name="play" size={24} color="white"/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 40,
    bottom: 50,
    color: 'white',
    backgroundColor: '#ef7a75',
    padding: 10,
    borderRadius: 15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default FABPlay;
