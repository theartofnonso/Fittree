/* eslint-disable */
import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import {createTheme, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Video} from "expo-av";
import {ScrollView} from "react-native-web";

const PreviewExercise = ({exercise, close}) => {

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
        if (isBigScreen || isBiggerScreen) {
            return styles.wrapperMd
        } else {
            return styles.wrapperXs
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
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                            {exercise.videoUrls.map((url, index) => {
                                return (
                                    <Video
                                        key={index}
                                        style={styles.video}
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
                        <View style={styles.title}>
                            <ThemeProvider theme={responsiveFontTheme}>
                                <Typography variant="h6" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 500,
                                }}>{exercise.title}</Typography>
                            </ThemeProvider>
                        </View>
                        <View style={styles.description}>
                            <ThemeProvider theme={responsiveFontTheme}>
                                <Typography variant="body2" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                    whiteSpace: 'pre-line'
                                }}>{exercise.description}</Typography>
                            </ThemeProvider>
                        </View>
                        <View>
                            <View style={{marginVertical: 4}}>
                                <ThemeProvider theme={responsiveFontTheme}>
                                    <Typography sx={{
                                        fontFamily: 'Montserrat',
                                        fontWeight: 500,
                                        marginVertical: 4
                                    }} variant="body2">Body Parts</Typography>
                                </ThemeProvider>
                            </View>
                            <View style={styles.list}>
                                {exercise.bodyParts.map((part, index) => {
                                    return (
                                        <View key={index} style={styles.tag}>
                                            <ThemeProvider theme={responsiveFontTheme}>
                                                <Typography sx={{
                                                    color: 'white',
                                                    textAlign: 'center',
                                                    fontFamily: 'Montserrat',
                                                    fontWeight: 300
                                                }}
                                                            variant="body2">{part}</Typography>
                                            </ThemeProvider>
                                        </View>
                                    );
                                })}
                            </View>
                            <View style={{marginVertical: 4}}>
                                <ThemeProvider theme={responsiveFontTheme}>
                                    <Typography sx={{
                                        fontFamily: 'Montserrat',
                                        fontWeight: 500,
                                    }} variant="body2">Equipment</Typography>
                                </ThemeProvider>
                            </View>
                            <View style={styles.list}>
                                {exercise.equipments.map((equipment, index) => {
                                    return (
                                        <View key={index} style={styles.tag}>
                                            <ThemeProvider theme={responsiveFontTheme}>
                                                <Typography sx={{
                                                    color: 'white',
                                                    textAlign: 'center',
                                                    fontFamily: 'Montserrat',
                                                    fontWeight: 300
                                                }} variant="body2">{equipment}</Typography>
                                            </ThemeProvider>
                                        </View>
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
    },
    video: {
        width: 300,
        marginHorizontal: 2,
    },
    title: {
        marginTop: 12,
    },
    description: {
        marginVertical: 12,
    },
    tagTitle: {
        marginVertical: 8,
        fontWeight: '500'
    },
    tag: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        backgroundColor: "#ef7a75",
        marginRight: 3,
        marginBottom: 5,
        borderRadius: 5,
    },
    tagText: {
        textAlign: "center",
        fontSize: 14,
        color: "white",
    },
});
export default PreviewExercise;
