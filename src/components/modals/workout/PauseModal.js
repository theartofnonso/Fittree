/* eslint-disable */
import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native-web";
import {Entypo} from "@expo/vector-icons";
import {Typography} from "@mui/material";

const PauseModal = props => {

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.skipBtn}
                    onPress={props.play}
                    testID="End_Workout_Btn">
                    <Entypo name="controller-play" size={48} color="white"/>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.endWorkoutBtn}
                    onPress={props.navigateToWorkoutPreview}
                    testID="End_Workout_Btn">
                    <Typography style={{color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold'}}>
                        End Workout
                    </Typography>
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
  endWorkoutBtn: {
    alignItems: 'center',
    backgroundColor: '#ef7a75',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 200,
    height: 40,
    position: 'absolute',
    bottom: 50,
  },
});

export default PauseModal;
