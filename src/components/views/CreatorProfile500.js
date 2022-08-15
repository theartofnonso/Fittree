/* eslint-disable */
import React from "react";
import {createTheme, Link, responsiveFontSizes, ThemeProvider, Typography} from "@mui/material";
import NotFound from "../illustrations/NotFound";
import {StyleSheet, TouchableOpacity, View} from "react-native-web";
import FittrIconBig from "../illustrations/FittrIconBig";

const CreatorProfile500 = ({username}) => {

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);

    return (
        <View
            style={{
                height: '100%',
                width: '100%',
                position: 'fixed',
                display: 'flex',
                padding: 2,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <NotFound/>
            <ThemeProvider theme={responsiveFontTheme}>
                <Typography variant="body1" sx={{marginTop: 5}}>Unable to load {username}'s page at this
                    moment</Typography>
            </ThemeProvider>
            <TouchableOpacity style={styles.fittreeIconContainer}>
                <Link href='/' sx={{textDecoration: 'none'}}>
                    <FittrIconBig/>
                </Link>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    fittreeIconContainer: {
        position: 'absolute',
        bottom: 0
    },
})

export default CreatorProfile500;
