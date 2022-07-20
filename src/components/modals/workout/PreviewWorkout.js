/* eslint-disable */
import React from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import workoutsConstants from "../../../utils/workout/workoutsConstants";
import WorkoutCardBig from "../../cards/WorkoutCardBig";
import WorkoutExerciseCard from "../../cards/WorkoutExerciseCard";
import {useMediaQuery} from "react-responsive";
import Entypo from "react-native-vector-icons/Entypo";
import {Feather} from '@expo/vector-icons';

const PreviewWorkout = ({workout, play, close}) => {

    const isBigScreen = useMediaQuery({query: '(min-width: 700px)'})

    /**
     * Play the appropriate workout
     */
    const playWorkout = () => {
        play()
    };

    if (!workout) {
        return <View/>;
    }

    /**
     * Sorted WorkoutFits
     * @type {unknown[]}
     */
    const sortedWorkoutFits = Array.from(workout.workoutFits.items).sort((a, b) => a.index - b.index);

    /**
     * Display information for intervals
     * @returns {string}
     */
    const displayRestInterval = () => {
        if (workout.type === workoutsConstants.workoutType.CIRCUIT) {
            if ((workout.rounds > 1) && workout.roundsInterval > 0) {
                return `${workout.rounds} rounds\nRest for ${workout.roundsInterval / 1000} secs after each round`;
            }
            return "No rest after each round";
        }

        if (workout.type === workoutsConstants.workoutType.REPS_SETS) {
            if ((workout.workoutFits.items.length > 1) && workout.setsInterval > 0) {
                return `Rest for ${workout.setsInterval / 1000} secs after each set`;
            }
            return "No rest after each set";
        }

    };

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.closeBtnStyle} onPress={() => close()}>
                    <Entypo name="cross" size={24} color="white"/>
                </TouchableOpacity>
                <View style={[isBigScreen ? styles.wrapper : styles.wrapperSmall]}>
                    <WorkoutCardBig workout={workout}/>
                    <View style={styles.previewInfo}>
                        <Text style={styles.description}>{workout.description}</Text>
                        <Text>{displayRestInterval()}</Text>
                        {sortedWorkoutFits.map((workoutFit, i) =>
                            <WorkoutExerciseCard key={i} workoutFit={workoutFit}/>)}
                    </View>
                    <TouchableOpacity
                        style={styles.startWorkoutBtn}
                        onPress={playWorkout}>
                        <Feather name="play" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
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
    },
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '400px 350px',
        gridTemplateRows: '600px',
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: 8,
    },
    wrapperSmall: {
        display: 'grid',
        gridTemplateColumns: '300px',
        gridTemplateRows: '2fr 1.5fr',
        height: 500,
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 'auto',
    },
    previewInfo: {
        paddingLeft: 10,
        overflow: 'scroll',
    },
    closeBtnStyle: {
        position: 'fixed',
        top: 10,
        right: 10,
    },
    description: {
        marginVertical: 20,
    },
    startWorkoutBtn: {
        textAlign: "center",
        backgroundColor: '#ef7a75',
        borderRadius: '100%',
        width: 50,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 15,
        bottom: 15,
        boxShadow: '1px 1px 5px gray'
    },
    card: {
        width: "100%",
        height: 380,
        borderRadius: 8,
    },
    thumbnail: {
        width: 200,
        height: 250,
        borderRadius: 8,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 8,
    },
    text: {
        color: "white",
    },
    textBig: {
        fontFamily: "Days One",
    },
    chipBtn: {
        marginRight: 8,
        backgroundColor: "white",
        borderRadius: 18,
        color: "white",
        paddingHorizontal: 8,
    },
    chipsContainer: {
        flexGrow: 0,
    },
    chipsContents: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
    },
    videoStyle: {
        height: Dimensions.get("window").width / 2,
    },
    workoutFitsContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    divider: {
        borderWidth: 0.5,
        borderColor: "#d5d5d5",
        marginVertical: 8,
    },
    restInterval: {
        marginBottom: 10,
    },
    textBold: {
        fontWeight: "bold",
    },
    textWhite: {
        color: "white",
    },
    scrollView: {
        marginBottom: 10,
        width: "100%",
    },
    errSnackbar: {
        backgroundColor: "#f54755",
    },
    infoSnackbar: {
        backgroundColor: "#282828",
    },
});
export default PreviewWorkout;
