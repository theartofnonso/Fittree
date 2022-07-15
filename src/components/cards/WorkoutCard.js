import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Caption, Headline} from 'react-native-paper';

const WorkoutCard = props => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: 'https://' + props.workout.thumbnailUrl,
          cache: 'force-cache',
        }}
      />
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.overlay}
      />
      <View style={styles.textContainer}>
        <Headline style={[styles.text, styles.textBig]}>
          {props.workout.title}
        </Headline>
        <Caption style={[styles.text, styles.intensityLevel]}>
          {props.workout.intensityLevel}
        </Caption>
        <View style={{flexDirection: 'row'}}>
          {props.workout.equipments.length > 0 ? (
            <Caption style={styles.text}>
              {props.workout.equipments.slice(0, 3).join(' ')}
            </Caption>
          ) : null}
          {props.workout.equipments.length > 3 ? (
            <Caption style={styles.text}>{'. . .'}</Caption>
          ) : null}
        </View>
        <View style={styles.bottomCardSection}>
          <View style={styles.chipsContainer}>
            {props.workout.bodyParts.slice(0, 3).map((bodyPart, index) => {
              return (
                <Caption key={index} style={styles.chipBtnText}>
                  {bodyPart}
                </Caption>
              );
            })}
            {props.workout.bodyParts.length > 3 ? (
              <Caption style={styles.text}>{'. . .'}</Caption>
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 200,
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

export default WorkoutCard;
