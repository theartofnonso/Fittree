/* eslint-disable */
import React from "react";
import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import Entypo from "react-native-vector-icons/Entypo";
import workoutsConstants from "../../../utils/workout/workoutsConstants";
import WorkoutCardBig from "../../cards/WorkoutCardBig";
import WorkoutExerciseCard from "../../cards/WorkoutExerciseCard";

const PreviewWorkout = ({workout, play}) => {

    /**
     * Play the appropriate workout
     */
    const playWorkout = () => {
        play()
    };

    /**
     * Navigate to previous screen
     * @returns {*}
     */
    const navigateBack = () => {}

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
        <SafeAreaView style={styles.rootStyle}>
            <View style={styles.containerStyle}>
                <View style={styles.navBarStyle}>
                    <TouchableOpacity style={styles.btnStyle} onPress={navigateBack}>
                        <Entypo name="cross" size={24} color="#282828"/>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollView}
                    style={styles.scrollView}>
                    <Text style={styles.creatorUsername}>Created by {workout.preferred_username}</Text>
                    <WorkoutCardBig workout={workout}/>
                    <Text style={styles.description}>{workout.description}</Text>
                    <Text>{displayRestInterval()}</Text>
                    {sortedWorkoutFits.map((workoutFit, i) =>
                        <WorkoutExerciseCard key={i} workoutFit={workoutFit}/>)}
                </ScrollView>
                <TouchableOpacity
                    style={styles.startWorkoutBtn}
                    onPress={playWorkout}>
                    <Text style={{fontWeight: "bold"}}>Start Workout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    rootStyle: {
        position: "absolute",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        backgroundColor: "white",
    },
    containerStyle: {
        backgroundColor: "white",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
    },
    navBarStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 15,
        marginBottom: 12,
        width: "100%",
    },
    creatorUsername: {
        fontFamily: "Days One",
        marginBottom: 10,
    },
    btnStyle: {
        alignItems: "center",
        borderRadius: 15,
        flexDirection: "column",
        justifyContent: "center",
        width: 40,
        height: 40,
    },
    description: {
        marginVertical: 20,
    },
    startWorkoutBtn: {
        alignItems: "center",
        borderRadius: 18,
        flexDirection: "column",
        justifyContent: "center",
        height: 40,
        width: "100%",
    },
    card: {
        width: "100%",
        height: 380,
        borderRadius: 8,
    },
    thumbnail: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 8,
    },
    textContainer: {
        ...StyleSheet.absoluteFillObject,
        marginHorizontal: 15,
        marginBottom: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
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
    subscribeBtn: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 3,
        width: 100,
        height: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    subscribeBtnText: {
        fontWeight: "bold",
    },
});
export default PreviewWorkout;
