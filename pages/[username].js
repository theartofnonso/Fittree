import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {fetchCreatorProfile, selectCreator, selectWorkouts} from "../src/features/CreatorProfileSlice";
import {useDispatch, useSelector} from "react-redux";
import {Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import WorkoutCard from "../src/components/cards/WorkoutCard";
import Entypo from "react-native-vector-icons/Entypo";
import PreviewWorkout from "../src/components/modals/workout/PreviewWorkout";
import PlayCircuitWorkout from "../src/components/modals/workout/PlayCircuitWorkout";

const CreatorProfile = () => {

    /**
     * Retrieve creator's username
     */
    const router = useRouter()
    const {username} = router.query

    const dispatch = useDispatch();

    const profile = useSelector(selectCreator)

    const workouts = useSelector(selectWorkouts)

    const [currentWorkout, setCurrentWorkout] = useState(null)

    const [shouldPlayWorkout, setShouldPlayWorkout] = useState(false)

    /**
     * Play workout
     */
    const togglePlayWorkout = (shouldPlay) => {
        setShouldPlayWorkout(shouldPlay)
    }

    /**
     * Retrieve creator's profile
     * @type {Dispatch<AnyAction>}
     */
    useEffect(() => {
        dispatch(fetchCreatorProfile({username: username}));
    }, [username])

    if (profile === null) {
        /**
         * Creator page doesn't exist
         */
        return (
            <View>
                <Text variant='h5'>The page you’re looking for doesn’t exist.</Text>
                <Text>Want this to be your username? Create your Fittree now.</Text>
            </View>
        );
    } else if (Object.keys(profile).length === 0) {
        /**
         * Loading Creator page content
         */
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    } else {
        /**
         * Loaded Creator page content
         */
        return (
            <SafeAreaView style={styles.root}>
                <View style={styles.container}>
                    <View style={styles.topContainerStyle}>
                        <View style={styles.navBarStyle}>
                            <TouchableOpacity style={styles.btnStyle}>
                                <Entypo name="chevron-left" size={24} color="#282828"/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infoStyle}>
                            <Text style={{fontFamily: "Days One"}}>Live Workouts</Text>
                            <Text style={{fontSize: 15}}>
                                Find workouts that you have published
                            </Text>
                        </View>
                    </View>

                    {workouts.length > 0 ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            keyExtractor={workout => workout.id}
                            data={workouts}
                            renderItem={data => {
                                return (
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => setCurrentWorkout(data.item)}>
                                        <WorkoutCard workout={data.item}/>
                                    </TouchableOpacity>
                                );
                            }}
                        /> :
                        <View style={styles.emptyStateViewStyle}>
                            <Text style={styles.textEmptyStateStyle}>
                                {`${username} has no workouts yet `}
                            </Text>
                        </View>}
                </View>
                {currentWorkout && !shouldPlayWorkout?
                    <PreviewWorkout
                        workout={currentWorkout}
                        play={() => togglePlayWorkout(true)}/> : null}
                {currentWorkout && shouldPlayWorkout ?
                    <PlayCircuitWorkout
                        workout={currentWorkout}
                        end={() => togglePlayWorkout(false)}/> : null}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        height: '100%',
        width: Dimensions.get("window").width,
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "white",
    },
    navBarStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    infoStyle: {
        flexDirection: "column",
    },
    btnStyle: {
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: "column",
        justifyContent: "center",
        width: 40,
        height: 40,
        marginBottom: 20,
    },
    emptyStateViewStyle: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    textEmptyStateStyle: {
        color: "gray",
        fontFamily: "Exo2-Regular",
    },
    topContainerStyle: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 20,
    },
    errSnackbar: {
        backgroundColor: "#f54755",
    },
});

export default CreatorProfile;
