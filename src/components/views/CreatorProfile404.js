/* eslint-disable */
import React from "react";
import {createTheme, Link, responsiveFontSizes, ThemeProvider, Typography} from "@mui/material";
import NotFound from "../illustrations/NotFound";
import FittrIconBig from "../illustrations/FittrIconBig";
import {StyleSheet, TouchableOpacity, View} from "react-native-web";

const CreatorProfile404 = ({username}) => {

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
                <Typography variant="body1" sx={{marginTop: 5}}>We can't find {username}, claim <Link href='#'
                                                                                                      color='#ef7a75'
                                                                                                      sx={{
                                                                                                          textDecoration: 'underline',
                                                                                                          fontWeight: 'bold'
                                                                                                      }}>Fittree.io/{username}</Link></Typography>
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
        bottom: 10
    },
})

export default CreatorProfile404;
