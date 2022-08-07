import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {
    fetchCreatorProfile,
    selectCreator,
    selectCreatorStatus,
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
    Divider,
    Link,
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
import Favicon from "../src/components/illustrations/Favicon";
import {
    generateShareableLink,
    loadCircuitWorkout,
    loadRepsAndSetsWorkout
} from "../src/utils/workout/workoutsHelperFunctions";
import * as Clipboard from 'expo-clipboard';

const CreatorProfile = (props) => {

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

    const handleClose = () => {
        setShowSnackBar(false);
    };

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
                    padding: 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Favicon/>
                <Divider orientation='vertical' sx={{height: 80, marginRight: 2.5}}/>

                <ThemeProvider theme={responsiveFontTheme}>
                    <Typography variant="h6">
                        {username} doesn't seem to have an account
                        <br/>
                        <Typography variant="subtitle1">
                            You can claim it
                            <Link href='#' color='#000000' sx={{fontWeight: 'bold', marginLeft: 0.75}}>here</Link>
                        </Typography>
                    </Typography>
                </ThemeProvider>
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
                        <TouchableOpacity onPress={copyShareableLink}>
                            <Feather name="share" size={24} color="black"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoStyle}>
                        <Avatar.Image size={96} source={{
                            uri: 'https://' + profile.displayProfile,
                            cache: 'force-cache',
                        }}/>
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
                                                      onPress={() => setCurrentWorkout(item)}>
                                        <WorkoutCard workout={item}/>
                                    </TouchableOpacity>
                                );
                            })}
                        </View> :
                        <View style={styles.emptyStateViewStyle}>
                            <Typography variant="body2" textAlign='center' sx={{
                                fontFamily: 'Montserrat',
                                fontSize: 12
                            }}>{`${username} has no workouts`}</Typography>
                        </View>}
                </View>
                <ThemeProvider theme={responsiveFontTheme}>
                    <Typography variant="h6" sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        my: 4}}>
                        <Link href='#' color='#ef7a75' sx={{textDecoration: 'none'}}>Fittree</Link>
                    </Typography>
                </ThemeProvider>
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
        paddingVertical: 5,
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
    snackbar: {
        backgroundColor: "#ef7a75",
    },
});

export default CreatorProfile;
