import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {
    fetchCreatorProfile,
    selectCreator,
    selectCreatorStatus,
    selectExercises,
    selectWorkouts
} from "../src/features/CreatorProfileSlice";
import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, TouchableOpacity, View} from "react-native-web";
import WorkoutCard from "../src/components/cards/WorkoutCard";
import {Feather} from '@expo/vector-icons';
import {Avatar, TextInput} from "react-native-paper";
import {searchExerciseOrWorkout} from "../src/utils/workoutAndExerciseUtils";
import {
    Alert,
    Container,
    createTheme,
    responsiveFontSizes,
    Snackbar,
    ThemeProvider,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import PreviewWorkout from "../src/components/modals/workout/PreviewWorkout";
import PlayCircuitWorkout from "../src/components/modals/workout/PlayCircuitWorkout";
import workoutsConstants from "../src/utils/workout/workoutsConstants";
import PlayRepsAndSetsWorkout from "../src/components/modals/workout/PlayRepsAndSetsWorkout";
import {
    generateShareableLink,
    loadCircuitWorkout,
    loadRepsAndSetsWorkout,
    sortWorkouts
} from "../src/utils/workout/workoutsHelperFunctions";
import * as Clipboard from 'expo-clipboard';
import CreatorProfile404 from "../src/components/views/CreatorProfile404";
import CreatorProfile500 from "../src/components/views/CreatorProfile500";
import CreatorProfileLoading from "../src/components/views/CreatorProfileLoading";
import EmptyState from "../src/components/illustrations/EmptyState";
import Socials from "../src/components/views/Socials";
import FittrIconBig from "../src/components/illustrations/FittrIconBig";
import ShareSvg from "../src/components/icons/ShareSvg";

const CreatorProfile = () => {

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);

    /**
     * Retrieve creator's username
     */
    const router = useRouter()
    const {username} = router.query

    const dispatch = useDispatch();

    const profile = useSelector(selectCreator)

    const status = useSelector(selectCreatorStatus)

    const workouts = useSelector(selectWorkouts)

    const exercises = useSelector(selectExercises)

    const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);

    const [currentWorkout, setCurrentWorkout] = useState(null)

    const [shouldPlayWorkout, setShouldPlayWorkout] = useState(false)

    const [searchQuery, setSearchQuery] = React.useState('');

    /**
     * Show snackbar for err message
     */
    const [showSnackBar, setShowSnackBar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState("");

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
     * Preview a workout from the list
     */
    const previewWorkout = (selectedWorkout) => {
        const enrichedWorkout = {
            ...selectedWorkout,
            workoutExercises: sortWorkouts(selectedWorkout, exercises),
        };
        setCurrentWorkout(enrichedWorkout);
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
    const getWorkoutPlayComponent = () => {

        if (currentWorkout.type === workoutsConstants.workoutType.CIRCUIT) {
            const rounds = loadCircuitWorkout(currentWorkout);
            return <PlayCircuitWorkout
                workout={currentWorkout}
                rounds={rounds}
                end={() => togglePlayWorkout(false)}/>

        } else {
            const exercises = loadRepsAndSetsWorkout(currentWorkout);
            return <PlayRepsAndSetsWorkout
                workout={currentWorkout}
                exercises={exercises}
                end={() => togglePlayWorkout(false)}/>
        }
    }

    /**
     * copy shareable link
     */
    const copyShareableLink = () => {
        Clipboard.setStringAsync(generateShareableLink(username)).then(() => {
            setSnackbarMessage("Link copied")
            setShowSnackBar(true)
        });
    }

    /**
     * Display Avatar
     * @returns {JSX.Element}
     */
    const displayAvatar = () => {
        if (profile) {
            return profile.displayProfile ?
                <Avatar.Image size={80} source={{uri: "https://" + profile.displayProfile, cache: "force-cache"}}
                              style={styles.avatar}/> :
                <Avatar.Text size={80} label={profile.preferred_username.slice(0, 1).toUpperCase()} color="white"
                             style={styles.avatar}/>;
        }
    };

    const handleClose = () => {
        setShowSnackBar(false);
    };

    /**
     * Retrieve creator's profile
     * @type {Dispatch<AnyAction>}
     */
    useEffect(() => {
        if (username) {
            dispatch(fetchCreatorProfile({username: username}));
        }
    }, [username])

    if (status === workoutsConstants.profileStatus.LOADING) {
        /**
         * Creator page is still loading
         */
        return <CreatorProfileLoading/>
    } else if (status === workoutsConstants.profileStatus.FAILED) {
        /**
         * Backend error from server
         */
        return <CreatorProfile500 username={username}/>

    } else {
        /**
         * Page is ready but profile may not exists
         */
        if (profile === null) {
            /**
             * Creator doesn't exist
             */
            return <CreatorProfile404 username={username}/>
        }
        /**
         * Loaded Creator page content
         */
        return (
            <Container maxWidth="md" sx={{padding: 1}}>
                <View style={styles.topContainerStyle}>
                    <View style={styles.navBarStyle}>
                        <TouchableOpacity onPress={copyShareableLink}>
                            <ShareSvg/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoStyle}>
                        {displayAvatar()}
                        <ThemeProvider theme={theme}>
                            <Typography variant="h6" textAlign='center' sx={{
                                my: 1,
                                fontFamily: 'Montserrat',
                                fontWeight: 500
                            }}>{profile.preferred_username}</Typography>
                            <Typography variant="body2" textAlign='center' sx={{
                                fontFamily: 'Montserrat',
                                fontSize: 12
                            }}>{profile.displayBrief}</Typography>
                        </ThemeProvider>
                        {profile ? <Socials profile={profile}/> : null}
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
                </View>
                <View style={[isBigScreen ? styles.listOfWorkoutsContainer : styles.listOfWorkoutsContainerSmall]}>
                    {workouts.length > 0 ?
                        <View style={[isBigScreen ? styles.wrapper : styles.wrapperSmall]}>
                            {filteredWorkouts.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} activeOpacity={0.8}
                                                      onPress={() => previewWorkout(item)}>
                                        <WorkoutCard workout={item}/>
                                    </TouchableOpacity>
                                );
                            })}
                        </View> :
                        <View style={styles.emptyStateViewStyle}>
                            <EmptyState/>
                            <Typography variant="body1" textAlign='center' sx={{
                                fontFamily: 'Montserrat',
                                fontSize: 12,
                                fontWeight: 700,
                                marginTop: 5
                            }}>{`${username} has no workouts`}</Typography>
                        </View>}
                </View>
                <View style={styles.fittreeIconContainer}>
                    <FittrIconBig/>
                </View>

                {/*<ThemeProvider theme={responsiveFontTheme}>*/}
                {/*    <Typography variant="h6" sx={{*/}
                {/*        fontFamily: 'Montserrat',*/}
                {/*        fontWeight: 'bold',*/}
                {/*        textAlign: 'center',*/}
                {/*        my: 4*/}
                {/*    }}>*/}
                {/*        <Link href='#' color='#ef7a75' sx={{textDecoration: 'none'}}>Fittree</Link>*/}
                {/*    </Typography>*/}
                {/*</ThemeProvider>*/}
                {currentWorkout && !shouldPlayWorkout ?
                    <PreviewWorkout
                        workout={currentWorkout}
                        play={() => togglePlayWorkout(true)}
                        close={closePreview}/> : null}
                {shouldPlayWorkout ? getWorkoutPlayComponent() : null}
                <Snackbar
                    autoHideDuration={2000}
                    open={showSnackBar}
                    onClose={handleClose}
                    message={snackbarMessage}>
                    <Alert severity="success" sx={{width: '100%'}}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    navBarStyle: {
        justifyContent: "space-between",
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    avatar: {
        backgroundColor: "#ef7a75",
    },
    infoStyle: {
        flexDirection: "column",
        alignItems: 'center'
    },
    listOfWorkoutsContainer: {
        height: 800,
        overflow: 'scroll',
        borderRadius: 8,
    },
    listOfWorkoutsContainerSmall: {
        height: 400,
        overflow: 'scroll',
        borderRadius: 8
    },
    wrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: 8,
        overflow: 'scroll'
    },
    wrapperSmall: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: 8,
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
        marginBottom: 15,
    },
    textInputStyle: {
        backgroundColor: "#f6f6f6",
        flex: 1,
        height: 40,
    },
    emptyWorkoutStyle: {
        backgroundColor: "transparent",
    },
    fittreeIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    snackbar: {
        backgroundColor: "#ef7a75",
    },
});

export default CreatorProfile;
