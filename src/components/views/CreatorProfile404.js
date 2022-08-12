/* eslint-disable */
import React from "react";
import {Container, createTheme, Link, responsiveFontSizes, ThemeProvider, Typography} from "@mui/material";
import NotFound from "../illustrations/NotFound";

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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <NotFound />
            <ThemeProvider theme={responsiveFontTheme}>
                <Typography variant="body1" sx={{marginTop: 5}}>Can't find {username}, claim <Link href='#' color='#ef7a75' sx={{textDecoration: 'underline', fontWeight: 'bold'}}>Fittree/{username}</Link></Typography>
            </ThemeProvider>
        </Container>
    );
};

export default CreatorProfile404;
