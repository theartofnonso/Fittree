// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import {StyleSheet} from 'react-native-web';
import {Accordion, AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function App() {
    return (
        <Container maxWidth="md" sx={{padding: 1}}>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What is Fittree?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Fittree is a link to your workouts. All you need is a fittree.io/username to share with everyone, everywhere.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>What can I use Fittree for?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Fittree is a tool for fitness influencers like you to create awesome workouts and share them with your followers, clients, brand partners etc. Take your link everywhere your fitness brand exists.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Why do I need Fittree?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        It is simple, you have a brand (sense of value and reputation) to build, and we have the means to help you achieve that. Fittree is a fit-for-purpose link to the value you have to offer to your community.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Is there a Fittree mobile app?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes and No, there’s a mobile app for creators to create and share workouts on the fly, whilst workouts are easily accessible on the web via any platform.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How can I share my workouts?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        All you need is a fittree.io/username link
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Can I profit from my Workouts on Fittree?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You can't monetise your workouts on Fittree at the moment; however, we are working on ways to help you achieve such.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 300,
        borderWidth: 1
    },
    text: {
        fontSize: 16,
    },
});
