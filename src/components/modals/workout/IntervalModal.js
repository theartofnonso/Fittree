/* eslint-disable */
import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native-web";

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
                <Text style={styles.textWhite}>
                    {props.description} in {intervalTime / 1000}s
                </Text>
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
    textWhite: {
        color: "white",
    },
    btnStyle: {
        fontSize: 20,
        position: "absolute",
        bottom: 50,
    },
});

export default IntervalModal;
