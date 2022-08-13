/* eslint-disable */
import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native-web";
import {Typography} from "@mui/material";
import {TouchableOpacity} from "react-native";
import workoutsConstants from "../../../utils/workout/workoutsConstants";

const IntervalModal = props => {

    const [intervalTime, setIntervalTime] = useState(props.intervalTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (intervalTime === 0) {
                clearInterval(intervalId);
                props.onFinish();
            } else {
                setIntervalTime(prevValue => prevValue - 1000);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [intervalTime]);

    /**
     * Display messages for respective intervals
     * @returns {JSX.Element}
     */
    const displayIntervalMessage = () => {

        switch (props.description) {
            case workoutsConstants.playMessages.WORKOUT_STARTING:
                return <View style={styles.intervalContainer}>
                    <Typography variant="body2" color='#ffffff' sx={{fontFamily: 'Montserrat', fontWeight: 500, my: 0.5}}>
                        {props.description}
                    </Typography>
                    <Typography variant="body2" color='#ffffff' sx={{fontFamily: 'Montserrat', fontWeight: 700, my: 0.5}}>
                        {intervalTime / 1000}s
                    </Typography>
                </View>
            case workoutsConstants.playMessages.NEXT_ROUND:
            case workoutsConstants.playMessages.NEXT_EXERCISE:
                return <View style={styles.intervalContainer}>
                    <Typography variant="body2" color='#ffffff' sx={{fontFamily: 'Montserrat', fontWeight: 500, my: 0.5}}>
                        {props.description}
                    </Typography>
                    <Typography variant="body2" color='#ffffff' sx={{fontFamily: 'Montserrat', fontWeight: 700, my: 0.5}}>
                        Rest for {intervalTime / 1000}s
                    </Typography>
                </View>
            default:
                return <Typography variant="body2" color='#ffffff' sx={{fontFamily: 'Montserrat', fontWeight: 500, my: 0.5}}>
                    Rest for {intervalTime / 1000}s
                </Typography>
        }
    }

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {displayIntervalMessage()}
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnStyle}
                    onPress={props.navigateToWorkoutPreview}
                    testID="End_Workout_Btn">
                    <Typography style={{color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold'}}>
                        End Workout
                    </Typography>
                </TouchableOpacity>
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    intervalContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    btnStyle: {
        alignItems: 'center',
        backgroundColor: '#ef7a75',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 200,
        height: 40,
        position: 'absolute',
        bottom: 50,
    },
});

export default IntervalModal;
