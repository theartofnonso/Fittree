/* eslint-disable */
import React from "react";
import {Container} from "@mui/material";
import Favicon from "../illustrations/Favicon";

const CreatorProfileLoading = () => {

    return (
        <Container
            maxWidth="md"
            sx={{
                height: '100vh',
                display: 'flex',
                padding: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Favicon/>
        </Container>
    );
};

export default CreatorProfileLoading;
