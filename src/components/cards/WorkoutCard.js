import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native-web';
//import LinearGradient from "react-native-linear-gradient";
const WorkoutCard = ({workout}) => {
  return (
    <View style={styles.card}>
      {/*<img*/}
      {/*  src={'https://' + workout.thumbnailUrl}*/}
      {/* alt='Hello'/>*/}
      <Image
          style={styles.thumbnail}
          source={{
            uri: 'https://' + workout.thumbnailUrl,
            cache: 'force-cache',
          }}
      />
      {/*<LinearGradient*/}
      {/*  colors={['transparent', '#000000']}*/}
      {/*  style={styles.overlay}*/}
      {/*/>*/}
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.textBig]}>
          {workout.title}
        </Text>
        <Text style={[styles.text, styles.intensityLevel]}>
          {workout.intensityLevel}
        </Text>
        <View style={{flexDirection: 'row'}}>
          {workout.equipments.length > 0 ? (
            <Text style={styles.text}>
              {workout.equipments.slice(0, 3).join(' ')}
            </Text>
          ) : null}
          {workout.equipments.length > 3 ? (
            <Text style={styles.text}>{'. . .'}</Text>
          ) : null}
        </View>
        <View style={styles.bottomCardSection}>
          <View style={styles.chipsContainer}>
            {workout.bodyParts.slice(0, 3).map((bodyPart, index) => {
              return (
                <Text key={index} style={styles.chipBtnText}>
                  {bodyPart}
                </Text>
              );
            })}
            {workout.bodyParts.length > 3 ? (
              <Text style={styles.text}>{'. . .'}</Text>
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
    width: 200,
    height: 200,
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
