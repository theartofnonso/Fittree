import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {
    fetchCreatorProfile,
    selectCreator,
    selectCreatorStatus,
    selectWorkouts
} from "../src/features/CreatorProfileSlice";
import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import WorkoutCard from "../src/components/cards/WorkoutCard";
import {Feather} from '@expo/vector-icons';
import {Avatar, Caption, TextInput, Title} from "react-native-paper";
import {searchExerciseOrWorkout} from "../src/utils/arrUtils";
import {Container, Divider, Link, useMediaQuery, useTheme} from "@mui/material";
import PreviewWorkout from "../src/components/modals/workout/PreviewWorkout";
import PlayCircuitWorkout from "../src/components/modals/workout/PlayCircuitWorkout";
import workoutsConstants from "../src/utils/workout/workoutsConstants";
import PlayRepsAndSetsWorkout from "../src/components/modals/workout/PlayRepsAndSetsWorkout";
import Favicon from "../src/components/illustrations/Favicon";

const CreatorProfile = () => {

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

    /**
     * Retrieve creator's username
     */
    const router = useRouter()
    const {username} = router.query

    const dispatch = useDispatch();

    const profile = useSelector(selectCreator)

    const status = useSelector(selectCreatorStatus)

    const workouts = useSelector(selectWorkouts)

    const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);

    const [currentWorkout, setCurrentWorkout] = useState(null)

    const [shouldPlayWorkout, setShouldPlayWorkout] = useState(false)

    const [searchQuery, setSearchQuery] = React.useState('');

    /**
     * Load workouts into filtered workouts
     */
    useEffect(() => {
        if (workouts.length > 0) {
            setFilteredWorkouts(workouts)
        }
    }, [workouts])

    /**
     * Filter workouts
     * @param query
     */
    const onChangeSearch = query => {
        setSearchQuery(query);
        const searchResult = searchExerciseOrWorkout(workouts, query)
        setFilteredWorkouts(searchResult);
    };

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
     * Display appropriate workout play component
     * @returns {JSX.Element}
     */
    const getWorkoutComponent = () => {
        if (currentWorkout.type === workoutsConstants.workoutType.CIRCUIT) {
            return <PlayCircuitWorkout
                workout={currentWorkout}
                end={() => togglePlayWorkout(false)}/>

        } else {
            return <PlayRepsAndSetsWorkout
                workout={currentWorkout}
                end={() => togglePlayWorkout(false)}/>
        }
    }

    /**
     * Retrieve creator's profile
     * @type {Dispatch<AnyAction>}
     */
    useEffect(() => {
        dispatch(fetchCreatorProfile({username: username}));
    }, [username])

    if (status !== 'ready') {
        /**
         * Creator page is still loading
         */
        return (
            <Container
                maxWidth="md"
                sx={{
                    height: '100vh',
                    display: 'flex',
                    padding: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Favicon/>
            </Container>
        );
    } else if (profile === null) {
        /**
         * Creator doesn't exist
         */
        return (
            <Container
                maxWidth="md"
                sx={{
                    height: '100vh',
                    display: 'flex',
                    padding: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Favicon/>
                <Divider orientation='vertical' sx={{height: 80, marginRight: 2.5}}/>
                <View>
                    <Text style={{marginVertical: 3}}>{username} doesn't seem to have a Fittree account</Text>
                    <Text style={{marginVertical: 3}}>You can claim it <Link href='#' color='#000000' sx={{fontWeight: 'bold'}}>here</Link> </Text>
                </View>
            </Container>
        );
    } else {
        /**
         * Loaded Creator page content
         */
        return (
            <Container maxWidth="md" sx={{padding: 1}}>
                <View style={styles.topContainerStyle}>
                    <View style={styles.navBarStyle}>
                        <TouchableOpacity style={styles.btnStyle}>
                            <Feather name="share" size={24} color="black"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoStyle}>
                        <Avatar.Image size={96} source={{
                            uri: 'https://' + profile.displayProfile,
                            cache: 'force-cache',
                        }}/>
                        <Title style={{fontFamily: "Exo 2", fontWeight: "400"}}>{profile.preferred_username}</Title>
                        <Caption style={{fontSize: 15, textAlign: 'center'}}>{profile.displayBrief}</Caption>
                    </View>
                </View>
                <TextInput
                    autoCapitalize="none"
                    mode="outlined"
                    autoCorrect={false}
                    value={searchQuery}
                    label="Search workouts"
                    maxLength={15}
                    style={styles.textInputStyle}
                    outlineColor='white'
                    onChangeText={value => onChangeSearch(value.toLowerCase())}
                />
                {workouts.length > 0 ?
                    <View style={[isBigScreen ? styles.wrapper : styles.wrapperSmall]}>
                        {filteredWorkouts.map((item, index) => {
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
                {shouldPlayWorkout ? getWorkoutComponent() : null}
            </Container>
        );
    }
}

const styles = StyleSheet.create({

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
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: 8,
    },
    wrapperSmall: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: 8,
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
    textInputStyle: {
        backgroundColor: "#f6f6f6",
        flex: 1,
        height: 40,
        marginVertical: 20,
    },
    emptyWorkoutStyle: {
        backgroundColor: "transparent",
    },
    errSnackbar: {
        backgroundColor: "#f54755",
    },
});

export default CreatorProfile;
