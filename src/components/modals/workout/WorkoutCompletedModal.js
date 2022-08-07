import React from 'react';
import {StyleSheet, TouchableOpacity, View,} from 'react-native';
import {createTheme, responsiveFontSizes, ThemeProvider, Typography} from "@mui/material";
import {Modal} from "react-native-paper";
import WorkoutCompletedSvg from "../../illustrations/WorkoutCompletedSvg";

const WorkoutCompletedModal = props => {

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);

    /**
     * calculate workout duration
     * @returns {string}
     */
    const calculateWorkoutDuration = () => {
        const startTime = props.startTime;
        const endTime = Date.now();
        const difference = (endTime - startTime) / 1000
        console.log("End ", endTime)
        return toReadableTime(difference)
    };

    /**
     * Convert date to readable format
     * @param difference
     * @returns {string}
     */
    const toReadableTime = (difference) => {
        /* extend the String by using prototypical inheritance */
        let seconds = parseInt(difference, 10); // don't forget the second param
        let hours   = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds - (hours * 3600)) / 60);
        seconds = seconds - (hours * 3600) - (minutes * 60);

        return minutes > 1 ? minutes + ' min(s)' : ' less than a min';
    }

    return (
        <Modal style={styles.rootStyle} visible={props.isVisible}>
            <View style={styles.container}>
                <WorkoutCompletedSvg/>
                <View style={styles.textContainer}>
                    <ThemeProvider theme={responsiveFontTheme}>
                        <Typography variant="h6" sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 700
                        }}> Workout Completed</Typography>
                        <Typography variant="body1" sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            my: 1
                        }}> It took you {calculateWorkoutDuration()}</Typography>
                    </ThemeProvider>
                </View>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnStyle}
                    onPress={props.navigateToWorkoutPreview}
                    testID="End_Workout_Btn">
                    <Typography style={{color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold'}}>
                        Close
                    </Typography>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    rootStyle: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
        position: 'fixed',
    },
    container: {
        height: '100vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        marginVertical: 20,
        display: 'flex',
        flex: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnStyle: {
        alignItems: 'center',
        backgroundColor: '#ef7a75',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 200,
        height: 40,
        marginVertical: 10,
    },
});
export default WorkoutCompletedModal;
