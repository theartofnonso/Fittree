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
                {isBigScreen &&
                    <TouchableOpacity style={styles.closeBtnStyle} onPress={() => close()}>
                        <Entypo name="cross" size={32} color="white"/>
                    </TouchableOpacity>
                }
                <View style={[isBigScreen ? styles.wrapper : styles.wrapperSmall]}>
                    {!isBigScreen &&
                        <View style={styles.navigationBar}>
                            <TouchableOpacity onPress={() => close()}>
                                <Entypo name="cross" size={24} color="#282828"/>
                            </TouchableOpacity>
                        </View>
                    }
                    <WorkoutCardBig workout={workout}/>
                    <View style={[ isBigScreen ? styles.previewInfo : styles.previewInfoSmall]}>
                        <Text style={styles.description}>{workout.description}</Text>
                        <Text>{displayRestInterval()}</Text>
                        {sortedWorkoutFits.map((workoutFit, i) =>
                            <WorkoutExerciseCard key={i} workoutFit={workoutFit}/>)}
                    </View>
                    <TouchableOpacity
                        style={[isBigScreen ? styles.startWorkoutBtn : styles.startWorkoutBtnSmall]}
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
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        height: '100vh',
    },
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '400px 300px',
        gridTemplateRows: '500px',
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: 8,
    },
    wrapperSmall: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'scroll',
        backgroundColor: 'white',
        padding: 8,
    },
    previewInfo: {
        overflow: 'scroll',
        paddingLeft: 10
    },
    previewInfoSmall: {
        overflow: 'scroll',
    },
    description: {
        marginVertical: 20,
    },
    navigationBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 8
    },
    closeBtnStyle: {
        position: 'fixed',
        top: 10,
        right: 10,
    },
    startWorkoutBtn: {
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
    startWorkoutBtnSmall: {
        backgroundColor: '#ef7a75',
        borderRadius: '100%',
        width: 50,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
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
