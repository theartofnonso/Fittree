import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
//import {convertMilliseconds} from '../../../utils/utils';
import {Text} from "react-native-web";

const WorkoutCompletedModal = props => {
  const calculateWorkoutDuration = () => {
    const startTime = props.startTime;
    const endTime = new Date().getTime();
    const difference = endTime - startTime;
    const seconds = 0 //convertMilliseconds(difference, 's');
    const minutes = 0 //convertMilliseconds(difference, 'm');
    const hour = 0 //convertMilliseconds(difference, 'h');

    let time;
    if (seconds <= 59) {
      time = seconds + ' secs';
    } else if (minutes <= 59) {
      time = minutes + ' mins';
    } else {
      time = hour + ' hr';
    }
    return time;
  };

  return (
    <SafeAreaView style={styles.rootStyle}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.textBig]}>
          Workout Completed
        </Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>
            It took you {calculateWorkoutDuration()}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnStyle}
          onPress={() => props.close()}
          testID="End_Workout_Btn">
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootStyle: {
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginVertical: 5,
    fontSize: 35,
    lineHeight: 35,
  },
  textSmall: {
    marginVertical: 5,
    fontSize: 20,
    lineHeight: 35,
  },
  textBig: {
    fontFamily: 'Days One',
    marginVertical: 5,
    fontSize: 25,
    lineHeight: 35,
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  timeText: {
    marginHorizontal: 8,
    marginVertical: 10,
    fontSize: 18,
  },
  btnStyle: {
    alignItems: 'center',
    backgroundColor: '#282828',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 200,
    height: 40,
    marginVertical: 10,
  },
});
export default WorkoutCompletedModal;
