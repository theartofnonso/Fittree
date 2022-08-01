import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View,} from 'react-native';
//import {convertMilliseconds} from '../../../utils/utils';
import {createTheme, responsiveFontSizes, ThemeProvider, Typography} from "@mui/material";
import {Modal} from "react-native-paper";
import WorkoutCompletedSvg from "../../illustrations/WorkoutCompletedSvg";

const WorkoutCompletedModal = props => {

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);

    const calculateWorkoutDuration = () => {
        const startTime = props.startTime;
        const endTime = new Date().getTime();
        const difference = endTime - startTime;
        const seconds = 0 //convertMilliseconds(difference, 's');
        const minutes = 0 //convertMilliseconds(difference, 'm');
        const hour = 0 //convertMilliseconds(difference, 'h');

        let time;
        if (seconds <= 59) {
            time = seconds + ' secs';
        } else if (minutes <= 59) {
            time = minutes + ' mins';
        } else {
            time = hour + ' hr';
        }
        return time;
    };

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
                            fontWeight: 400
                        }}> It took you {calculateWorkoutDuration()}</Typography>
                    </ThemeProvider>
                </View>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnStyle}
                    onPress={() => props.close()}
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
