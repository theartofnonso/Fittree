import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native-web';
import workoutsConstants from '../../utils/workout/workoutsConstants';
import {LinearGradient} from "expo-linear-gradient";
import {useMediaQuery} from "react-responsive";

const WorkoutCardBig = props => {

    const isBigScreen = useMediaQuery({query: '(min-width: 700px)'})

    return (
        <View style={styles.card}>
            <View>
                <Image
                    style={[isBigScreen ? styles.thumbnail : styles.thumbnailSmall]}
                    source={{
                        uri: 'https://' + props.workout.thumbnailUrl,
                        cache: 'force-cache',
                    }}
                />
                <LinearGradient
                    colors={['transparent', '#000000']}
                    style={styles.overlay}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.text, styles.textBig]}>{props.workout.title}</Text>
                <Text style={[styles.text, styles.intensityLevel]}>
                    {props.workout.intensityLevel}{' '}
                    {props.workoutType === workoutsConstants.workoutType.CIRCUIT ? `|" ${props.workout.rounds} Round(s)` : null}
                </Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {props.workout.equipments.map((equipment, index) => {
                        return (<Text key={index} style={styles.chipBtnText}>{equipment}</Text>);
                    })}
                </View>
                <View style={styles.bottomCardSection}>
                    <View style={styles.chipsContainer}>
                        {props.workout.bodyParts.map((bodyPart, index) => {
                            return (<Text key={index} style={styles.chipBtnText}>{bodyPart}</Text>);
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
    },
    thumbnail: {
        width: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    thumbnailSmall: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    textContainer: {
        ...StyleSheet.absoluteFillObject,
        marginHorizontal: 10,
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
});

export default WorkoutCardBig;
