/* eslint-disable */
import React from "react";
import {Container, createTheme, Divider, Link, responsiveFontSizes, ThemeProvider, Typography} from "@mui/material";
import Favicon from "../illustrations/Favicon";
import NotFound from "../illustrations/NotFound";
import {StyleSheet, TouchableOpacity} from "react-native-web";
import FittrIconBig from "../illustrations/FittrIconBig";

const CreatorProfile500 = ({username}) => {

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);

    return (
        <Container
            maxWidth="md"
            sx={{
                height: '100vh',
                display: 'flex',
                padding: 2,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <NotFound />
            <ThemeProvider theme={responsiveFontTheme}>
                <Typography variant="body1" sx={{marginTop: 5}}>Unable to load {username}'s page at this moment</Typography>
            </ThemeProvider>
            <TouchableOpacity style={styles.fittreeIconContainer}>
                <Link href='/' sx={{textDecoration: 'none'}}>
                    <FittrIconBig/>
                </Link>
            </TouchableOpacity>
        </Container>
    );
};

const styles = StyleSheet.create({

    fittreeIconContainer: {
        position: 'absolute',
        bottom: 20
    },
})

export default CreatorProfile500;
