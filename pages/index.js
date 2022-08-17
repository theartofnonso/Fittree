// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import {StyleSheet, View} from 'react-native-web';
import {AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppStoreSvg from "../src/components/illustrations/AppStoreSvg";
import {styled} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';


export default function App() {

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({theme}) => ({
        border: 0,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        marginBottom: 15
    }));
    //
    // const AccordionSummary = styled((props) => (
    //     <MuiAccordionSummary
    //         expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    //         {...props}
    //     />
    // ))(({ theme }) => ({
    //     backgroundColor:
    //         theme.palette.mode === 'dark'
    //             ? 'rgba(255, 255, 255, .05)'
    //             : 'rgba(0, 0, 0, .03)',
    //     flexDirection: 'row-reverse',
    //     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    //         transform: 'rotate(90deg)',
    //     },
    //     '& .MuiAccordionSummary-content': {
    //         marginLeft: theme.spacing(1),
    //     },
    // }));
    //
    // const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    //     padding: theme.spacing(2),
    // }));

    return (
        <Container maxWidth="md" sx={{padding: 1}}>

            <Typography color='#ef7a75' variant='h4'
                        sx={{textAlign: 'center', my: 2, fontWeight: '700', fontFamily: 'Montserrat'}}>
                FAQs
            </Typography>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "#ef7a75"}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{backgroundColor: '#f5ede8', borderRadius: 3, px: 2, py: 1.2}}>
                    <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>What is
                        Fittree?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight: '300', fontFamily: 'Montserrat'}}>
                        Fittree is a link to your workouts. All you need is a fittree.io/username to share with
                        everyone, everywhere.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "#ef7a75"}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{backgroundColor: '#f5ede8', borderRadius: 3, px: 2, py: 1.2}}>
                    <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>What can I use
                        Fittree for?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight: '300', fontFamily: 'Montserrat'}}>
                        Fittree is a tool for fitness influencers like you to create awesome workouts and share them
                        with your followers, clients, brand partners etc. Take your link everywhere your fitness brand
                        exists.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "#ef7a75"}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{backgroundColor: '#f5ede8', borderRadius: 3, px: 2, py: 1.2}}>
                    <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>Why do I need
                        Fittree?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight: '300', fontFamily: 'Montserrat'}}>
                        It is simple, you have a brand (sense of value and reputation) to build, and we have the means
                        to help you achieve that. Fittree is a fit-for-purpose link to the value you have to offer to
                        your community.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "#ef7a75"}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{backgroundColor: '#f5ede8', borderRadius: 3, px: 2, py: 1.2}}>
                    <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>Is there a Fittree
                        mobile app?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight: '300', fontFamily: 'Montserrat'}}>
                        Yes and No, there’s a mobile app for creators to create and share workouts on the fly, whilst
                        workouts are easily accessible on the web via any platform.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "#ef7a75"}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{backgroundColor: '#f5ede8', borderRadius: 3, px: 2, py: 1.2}}>
                    <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>How can I share my
                        workouts?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight: '300', fontFamily: 'Montserrat'}}>
                        All you need is a fittree.io/username link
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "#ef7a75"}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{backgroundColor: '#f5ede8', borderRadius: 3, px: 2, py: 1.2}}>
                    <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>Can I profit from my
                        Workouts on Fittree?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontWeight: '300', fontFamily: 'Montserrat'}}>
                        You can't monetise your workouts on Fittree at the moment; however, we are working on ways to
                        help you achieve such.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Typography variant='h5' sx={{textAlign: 'center', my: 8, fontFamily: 'Montserrat'}}>
                Are you a fitness influencer or creator with a brand to build? Then claim your Fittree link here
            </Typography>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <AppStoreSvg/>
            </View>

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
