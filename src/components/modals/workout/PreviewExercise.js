/* eslint-disable */
import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import {Box, createTheme, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Video} from "expo-av";
import {ScrollView} from "react-native-web";

const PreviewExercise = ({exercise, close}) => {

    const [isLoading, setIsLoading] = useState(true);

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const isBiggerScreen = useMediaQuery(theme.breakpoints.up('md'));

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);

    /**
     * Get appropriate styling for wrapper component
     * @returns {number}
     */
    const getWrapperStyling = () => {
        if (isBiggerScreen) {
            return styles.wrapperLg
        } else if (isBigScreen) {
            return styles.wrapperMd
        } else {
            return styles.wrapperXs
        }
    }

    /**
     * Get appropriate styling for video component
     * @returns {number}
     */
    const getVideoStyling = () => {
        if (isBiggerScreen) {
            return styles.videoLg
        } else if (isBigScreen) {
            return styles.videoMd
        } else {
            return styles.videoXs
        }
    }

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {isBigScreen &&
                    <TouchableOpacity style={styles.closeBtnStyle} onPress={close}>
                        <Entypo name="cross" size={32} color="white"/>
                    </TouchableOpacity>
                }
                <View style={[getWrapperStyling()]}>
                    {!isBigScreen &&
                        <View style={styles.navigationBar}>
                            <TouchableOpacity onPress={close}>
                                <Entypo name="cross" size={32} color="#282828"/>
                            </TouchableOpacity>
                        </View>
                    }
                    <View style={styles.videoContainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {exercise.videoUrls.map((url, index) => {
                                return (
                                    <Video
                                        key={index}
                                        style={[getVideoStyling()]}
                                        source={{uri: "https://" + url}}
                                        resizeMode="contain"
                                        shouldPlay={true}
                                        isLooping={true}
                                        isMuted={true}
                                    />
                                );
                            })}
                        </ScrollView>
                    </View>
                    <View style={styles.previewInfo}>
                        <Box sx={{my: 0.3}}>
                            <ThemeProvider theme={responsiveFontTheme}>
                                <Typography variant="h6" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 500,
                                }}>{exercise.title}</Typography>
                            </ThemeProvider>
                        </Box>
                        <Box sx={{my: 0.3}}>
                            <ThemeProvider theme={responsiveFontTheme}>
                                <Typography variant="body2" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                }}>{exercise.description}</Typography>
                            </ThemeProvider>
                        </Box>
                        <View>
                            <View style={styles.list}>
                                {exercise.equipments.map((equipment, index) => {
                                    return (
                                        <ThemeProvider key={index} theme={responsiveFontTheme}>
                                            <Typography sx={{
                                                marginRight: 1,
                                                fontFamily: 'Montserrat',
                                                fontWeight: 300}}
                                                        variant="body2">{equipment}</Typography>
                                        </ThemeProvider>
                                    );
                                })}
                            </View>
                            <View style={styles.list}>
                                {exercise.bodyParts.map((part, index) => {
                                    return (
                                        <ThemeProvider key={index} theme={responsiveFontTheme}>
                                            <Typography sx={{
                                                marginRight: 1,
                                                fontFamily: 'Montserrat',
                                                fontWeight: 300}}
                                                        variant="body2">{part}</Typography>
                                        </ThemeProvider>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        height: '100vh',
    },
    wrapperXs: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'scroll',
        backgroundColor: 'white',
    },
    wrapperMd: {
        display: 'grid',
        gridTemplateColumns: '550px',
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: 8,
    },
    wrapperLg: {
        display: 'grid',
        gridTemplateColumns: '800px',
        gridTemplateRows: '500px',
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: 8,
    },
    previewInfo: {
        padding: 10,
        flex: 1,
        overflow: 'scroll',
    },
    list: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 2,
    },
    chip: {
        marginRight: 8,
        fontFamily: 'Montserrat',
        fontWeight: 400,
    },
    scrollViewContainer: {
        alignItems: 'center',
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 2,
    },
    navigationBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    closeBtnStyle: {
        position: 'fixed',
        top: 10,
        right: 10,
    },
    btnStyle: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: 40,
    },
    videoContainer: {
        height: 300,
        backgroundColor: 'black',
        overflow: 'hidden'
    },
    videoXs: {
        width: 300,
        marginHorizontal: 2,
    },
    videoMd: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    videoLg: {},
    playInfoContainer: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    playInfoContainerSmall: {
        padding: 20
    },
    playBtnsContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    playBtnsContainerSmall: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    pauseBtn: {
        alignItems: "center",
        borderRadius: 5,
        flexDirection: "column",
        justifyContent: "center",
        width: 40,
        height: 40,
        marginHorizontal: 15,
    },
});
export default PreviewExercise;
