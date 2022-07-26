/* eslint-disable */
import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native-web";
import {Typography} from "@mui/material";

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

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Typography variant="body2" color='#ffffff' sx={{fontFamily: 'Montserrat', fontWeight: 500}}>
                    {props.description} in {intervalTime / 1000}s
                </Typography>
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
    btnStyle: {
        fontSize: 20,
        position: "absolute",
        bottom: 50,
    },
});

export default IntervalModal;
