import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native-web';
//import LinearGradient from 'react-native-linear-gradient';
import workoutsConstants from '../../../utils/workout/workoutsConstants';

const WorkoutCardBig = props => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: 'https://' + props.workout.thumbnailUrl,
          cache: 'force-cache',
        }}
      />
      {/*<LinearGradient*/}
      {/*  colors={['transparent', '#000000']}*/}
      {/*  style={styles.overlay}*/}
      {/*/>*/}
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.textBig]}>
          {props.workout.title}
        </Text>
        <Text style={[styles.text, styles.intensityLevel]}>
          {props.workout.intensityLevel}{' '}
          {props.workoutType === workoutsConstants.workoutType.CIRCUIT
            ? `|" ${props.workout.rounds} Round(s)`
            : null}
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {props.workout.equipments.map((equipment, index) => {
            return (
              <Text key={index} style={styles.chipBtnText}>
                {equipment}
              </Text>
            );
          })}
        </View>
        <View style={styles.bottomCardSection}>
          <View style={styles.chipsContainer}>
            {props.workout.bodyParts.map((bodyPart, index) => {
              return (
                <Text key={index} style={styles.chipBtnText}>
                  {bodyPart}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 400,
    borderRadius: 8,
    marginBottom: 10,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    marginHorizontal: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
  },
  intensityLevel: {
    fontFamily: 'Days One',
    marginTop: -5,
  },
  textBig: {
    fontFamily: 'Days One',
    fontSize: 18,
  },
  chipBtnText: {
    fontSize: 12,
    color: 'white',
    marginRight: 8,
  },
  chipsContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
  },
  bottomCardSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  liveText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  liveContainer: {
    borderRadius: 3,
    paddingHorizontal: 2,
    width: 40,
    backgroundColor: '#ffffffff',
  },
});

export default WorkoutCardBig;
