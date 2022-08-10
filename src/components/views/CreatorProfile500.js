/* eslint-disable */
import React from "react";
import {Container, createTheme, Divider, responsiveFontSizes, ThemeProvider, Typography} from "@mui/material";
import Favicon from "../illustrations/Favicon";
import NotFound from "../illustrations/NotFound";

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
        </Container>
    );
};

export default CreatorProfile500;
