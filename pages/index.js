// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native-web';
import {AccordionDetails, AccordionSummary, Container, Link, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppStoreSvg from "../src/components/illustrations/AppStoreSvg";
import {styled} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import FittrIconBig from "../src/components/illustrations/FittrIconBig";


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

    const textBig = `Your workouts\neverywhere you go`

    const textSmall = `Create, share and play workouts on any\ndevice. Workouts are not ordinary videos,\nthey are a program.`

    const downloadText = `Are you a fitness influencer\nor creator with a brand to\nbuild? Then claim your\nFittree link here`;

    return (
        <View>

            <Container maxWidth="md" sx={{px: 4}}>

                <TouchableOpacity>
                    <Link href='/' sx={{textDecoration: 'none'}}>
                        <FittrIconBig/>
                    </Link>
                </TouchableOpacity>

                <Typography variant='h5'
                            sx={{textAlign: 'center', my: 0.5, fontWeight: '700', fontFamily: 'Montserrat'}}
                            style={{whiteSpace: 'pre-line'}}>
                    {textBig}
                </Typography>

                <Typography variant='body2'
                            sx={{textAlign: 'center', my: 1, fontWeight: '400', fontFamily: 'Montserrat'}}
                            style={{whiteSpace: 'pre-line'}}>
                    {textSmall}
                </Typography>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnStyle}>
                    <Typography style={{color: 'white', fontFamily: 'Montserrat', fontWeight: '600'}}>
                        START FOR FREE
                    </Typography>
                </TouchableOpacity>


                <Typography color='#ef7a75' variant='h4'
                            sx={{textAlign: 'center', my: 2, fontWeight: '500', fontFamily: 'Montserrat'}}>
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
                            with your followers, clients, brand partners etc. Take your link everywhere your fitness
                            brand
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
                            It is simple, you have a brand (sense of value and reputation) to build, and we have the
                            means
                            to help you achieve that. Fittree is a fit-for-purpose link to the value you have to offer
                            to
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
                        <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>Is there a
                            Fittree
                            mobile app?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{fontWeight: '300', fontFamily: 'Montserrat'}}>
                            Yes and No, there’s a mobile app for creators to create and share workouts on the fly,
                            whilst
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
                        <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>How can I share
                            my
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
                        <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>Can I profit
                            from my
                            Workouts on Fittree?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{fontWeight: '300', fontFamily: 'Montserrat'}}>
                            You can't monetise your workouts on Fittree at the moment; however, we are working on ways
                            to
                            help you achieve such.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Typography variant='h5' sx={{textAlign: 'center', my: 5, fontFamily: 'Montserrat', fontWeight: '400'}} style={{whiteSpace: 'pre-line'}}>
                    {downloadText}
                </Typography>

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                    <AppStoreSvg/>
                </View>

            </Container>
            <View style={{backgroundColor: '#282828',}}>
                <TouchableOpacity style={styles.fittreeIconContainer}>
                    <Link href='/' sx={{textDecoration: 'none'}}>
                        <FittrIconBig/>
                    </Link>
                </TouchableOpacity>
            </View>
        </View>
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
    fittreeIconContainer: {
        marginLeft: 20
    },
    btnStyle: {
        alignItems: 'center',
        backgroundColor: '#ef7a75',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 200,
        height: 40,
        marginVertical: 30,
        margin: 'auto'
    },
});
