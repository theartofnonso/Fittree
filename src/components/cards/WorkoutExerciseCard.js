/* eslint-disable */
import React from "react";
import {StyleSheet, Text, View} from "react-native-web";
import {Video} from "expo-av";
import workoutsConstants from "../../utils/workout/workoutsConstants";

const WorkoutExerciseCard = props => {

  /**
   * Helper function to display appropriate RepsOrTimeValue
   * @returns {number|*}
   */
  const displayRepsOrTime = () => {
    if (props.workoutFit.repsOrTime === workoutsConstants.timer.type.REPS) {
      return props.workoutFit.repsOrTimeValue + " " + props.workoutFit.repsOrTime;
    }
    return props.workoutFit.repsOrTimeValue / 1000 + " " + props.workoutFit.repsOrTime;
  };

  return (
    <View style={styles.card}>
      <Video
        style={styles.videoStyle}
        source={{
          uri: "https://" + props.workoutFit.fit.videoUrls[0],
        }}
        poster="https://d26u7w064jxl38.cloudfront.net/public/fitpin-public/black_wallpaper.jpg"
        paused={true}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.workoutFit.fit.title}</Text>
        <Text
          style={styles.text}>{displayRepsOrTime()}{props.workoutFit.sets > 0 && ` x ${props.workoutFit.sets} Set(s)`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  videoStyle: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flex: 1,
  },
  textBig: {
    fontFamily: "Days One",
  },
  chip: {
    marginRight: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  chipsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default WorkoutExerciseCard;
