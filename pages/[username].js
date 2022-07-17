import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {fetchCreatorProfile, selectCreator, selectWorkouts} from "../src/features/CreatorProfileSlice";
import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import WorkoutCard from "../src/components/cards/WorkoutCard";
import {Feather} from '@expo/vector-icons';
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
     * Close the preview modal
     */
    const closePreview = () => {
        setCurrentWorkout(null)
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
            <View style={styles.root}>

                <View style={styles.topContainerStyle}>
                    <View style={styles.navBarStyle}>
                        <TouchableOpacity style={styles.btnStyle}>
                            <Feather name="share" size={24} color="black"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoStyle}>
                        <Text style={{fontFamily: "Days One"}}>byByJane</Text>
                        <Text style={{fontSize: 15}}>
                            Passionate about improving lives through fitness
                        </Text>
                    </View>
                </View>
                {workouts.length > 0 ?
                    <View style={styles.wrapper}>
                        {workouts.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} activeOpacity={0.8}
                                                  onPress={() => setCurrentWorkout(item)}>
                                    <WorkoutCard workout={item}/>
                                </TouchableOpacity>
                            );
                        })}
                    </View> :
                    <View style={styles.emptyStateViewStyle}>
                        <Text style={styles.textEmptyStateStyle}>
                            {`${username} has no workouts yet `}
                        </Text>
                    </View>}
                {currentWorkout && !shouldPlayWorkout ?
                    <PreviewWorkout
                        workout={currentWorkout}
                        play={() => togglePlayWorkout(true)}
                        close={closePreview}/> : null}
                {shouldPlayWorkout ?
                    <PlayCircuitWorkout
                        workout={currentWorkout}
                        end={() => togglePlayWorkout(false)}/> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    navBarStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    infoStyle: {
        flexDirection: "column",
        alignItems: 'center'
    },
    wrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 200px))',
        justifyContent: 'center',
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
    emptyWorkoutStyle: {
        backgroundColor: "transparent",
    },
    errSnackbar: {
        backgroundColor: "#f54755",
    },
});

export default CreatorProfile;
