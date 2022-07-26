/* eslint-disable */
import React from "react";
import {StyleSheet, View} from "react-native-web";
import {Video} from "expo-av";
import workoutsConstants from "../../utils/workout/workoutsConstants";
import {createTheme, responsiveFontSizes, ThemeProvider, Typography} from "@mui/material";

const WorkoutExerciseCard = props => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    /**
     * Helper function to display appropriate RepsOrTimeValue
     * @returns {number|*}
     */
    const displayRepsOrTime = () => {
        if (props.workoutFit.repsOrTime === workoutsConstants.timer.type.REPS) {
            return props.workoutFit.repsOrTimeValue + " " + props.workoutFit.repsOrTime;
        }
        return props.workoutFit.repsOrTimeValue / 1000 + " " + props.workoutFit.repsOrTime;
    };

    return (
        <View style={styles.card}>
            <Video
                style={styles.videoStyle}
                source={{
                    uri: "https://" + props.workoutFit.fit.videoUrls[0],
                }}
                poster="https://d26u7w064jxl38.cloudfront.net/public/fitpin-public/black_wallpaper.jpg"
                paused={true}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                <ThemeProvider theme={theme}>
                    <Typography variant="body1" sx={{fontFamily: 'Montserrat', fontWeight: 500, fontSize: 12}}>{props.workoutFit.fit.title}</Typography>
                    <Typography variant="body2" sx={{fontFamily: 'Montserrat', fontWeight: 300, fontSize: 12}}>{displayRepsOrTime()}{props.workoutFit.sets > 0 && ` x ${props.workoutFit.sets} Set(s)`}</Typography>
                </ThemeProvider>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    videoStyle: {
        height: 50,
        width: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        flex: 1,
    },
});

export default WorkoutExerciseCard;
