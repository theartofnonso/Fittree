/* eslint-disable */
import React from "react";
import {Container, createTheme, Divider, responsiveFontSizes, ThemeProvider, Typography} from "@mui/material";
import Favicon from "../illustrations/Favicon";

const CreatorProfile404 = ({username}) => {

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);

    return (
        <Container
            maxWidth="md"
            sx={{
                height: '100vh',
                display: 'flex',
                padding: 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Favicon/>
            <Divider orientation='vertical' sx={{height: 80, marginRight: 2}}/>

            <ThemeProvider theme={responsiveFontTheme}>
                <Typography variant="h6">Oops! {username} does not exist</Typography>
            </ThemeProvider>
        </Container>
    );
};

export default CreatorProfile404;
