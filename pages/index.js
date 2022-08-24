// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native-web';
import {AccordionDetails, AccordionSummary, Container, Link, Typography, useMediaQuery, useTheme} from "@mui/material";
import {styled} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import FittrIconBig from "../src/components/illustrations/FittrIconBig";
import AppStoreSvg from "../src/components/illustrations/AppStoreSvg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {INSTAGRAM, INSTAGRAM_NAME, TWITTER, TWITTER_NAME} from "../src/utils/workout/utilsConstants";
import {SimpleLineIcons} from "@expo/vector-icons";

export default function App() {

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

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

    const downloadText = `Are you a fitness influencer\nor creator with a brand to\nbuild? Then claim your\nFittree link here`;

    return (
        <View>

            <Container maxWidth="lg" sx={{px: 4}}>

                <TouchableOpacity>
                    <Link href='/' sx={{textDecoration: 'none'}}>
                        <FittrIconBig/>
                    </Link>
                </TouchableOpacity>

                <View style={{marginBottom: isBigScreen ? 100 : 30}}>
                    <View>
                        <Typography variant='h3'
                                    sx={{
                                        textAlign: 'center',
                                        my: 0.8,
                                        fontWeight: '700',
                                        fontSize: !isBigScreen ? 30 : null,
                                        fontFamily: 'Montserrat'
                                    }}>
                            Your workouts
                        </Typography>
                        <Typography variant='h3'
                                    sx={{
                                        textAlign: 'center',
                                        my: 0.8,
                                        fontWeight: '700',
                                        fontSize: !isBigScreen ? 30 : null,
                                        fontFamily: 'Montserrat'
                                    }}>
                            everywhere you go
                        </Typography>
                    </View>

                    <Typography variant='h6'
                                sx={{
                                    textAlign: 'center',
                                    my: 2.5,
                                    fontWeight: '400',
                                    fontSize: !isBigScreen ? 14 : null,
                                    fontFamily: 'Montserrat'
                                }}>
                        Create, share and play workouts on any device
                    </Typography>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.btnStyle}>
                        <Typography style={{color: 'white', fontFamily: 'Montserrat', fontWeight: '500'}}>
                            START FOR FREE
                        </Typography>
                    </TouchableOpacity>
                </View>


                <View style={[isBigScreen ? styles.container : styles.containerSmall]}>
                    <View>
                        <Typography variant='h4'
                                    sx={{
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '700',
                                        fontFamily: 'Montserrat',
                                        marginBottom: 1
                                    }}
                                    style={{whiteSpace: 'pre-line'}}>
                            Create 5 secs
                        </Typography>
                        <Typography variant='h4'
                                    sx={{
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '700',
                                        fontFamily: 'Montserrat',
                                        marginBottom: 1
                                    }}
                                    style={{whiteSpace: 'pre-line'}}>
                            exercise videos
                        </Typography>
                        <Typography variant='body1'
                                    sx={{
                                        my: 0.5,
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '400',
                                        fontFamily: 'Montserrat'
                                    }}>
                            Shoot 5 seconds exercise videos
                        </Typography>
                        <Typography variant='body1'
                                    sx={{
                                        my: 0.5,
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '400',
                                        fontFamily: 'Montserrat'
                                    }}>
                            to demonstrate an exercise and include
                        </Typography>
                        <Typography variant='body1'
                                    sx={{
                                        my: 0.5,
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '400',
                                        fontFamily: 'Montserrat'
                                    }}>
                            a description about it as well as the
                        </Typography>
                        <Typography variant='body1'
                                    sx={{
                                        my: 0.5,
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '400',
                                        fontFamily: 'Montserrat'
                                    }}>
                            body parts trained and equipment used
                        </Typography>
                    </View>
                    <Image
                        source={require('../src/components/images/create_exercise.png')}
                        style={styles.mocksImage}
                    />
                </View>

                <View style={[isBigScreen ? styles.container : styles.containerSmall]}>
                    {isBigScreen ? <Image
                        source={require('../src/components/images/curate_workouts.png')}
                        style={styles.mocksImage}
                    /> : null}
                    <View>
                        <Typography variant='h4'
                                    sx={{
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '700',
                                        fontFamily: 'Montserrat',
                                        marginBottom: 1
                                    }}
                                    style={{whiteSpace: 'pre-line'}}>
                            Curate exercises
                        </Typography>
                        <Typography variant='h4'
                                    sx={{
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '700',
                                        fontFamily: 'Montserrat',
                                        marginBottom: 1
                                    }}
                                    style={{whiteSpace: 'pre-line'}}>
                            exercise videos
                        </Typography>
                        <Typography variant='body1'
                                    sx={{
                                        my: 0.5,
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '400',
                                        fontFamily: 'Montserrat'
                                    }}>
                            Curate various exercises into workouts
                        </Typography>
                        <Typography variant='body1'
                                    sx={{
                                        my: 0.5,
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '400',
                                        fontFamily: 'Montserrat'
                                    }}>
                            of Circuits or Reps and Sets
                        </Typography>
                    </View>
                    {!isBigScreen ? <Image
                        source={require('../src/components/images/curate_workouts.png')}
                        style={styles.mocksImage}
                    /> : null}
                </View>

                <View style={[isBigScreen ? styles.container : styles.containerSmall]}>
                    <View>
                        <Typography variant='h4'
                                    sx={{
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '700',
                                        fontFamily: 'Montserrat',
                                        marginBottom: 1
                                    }}
                                    style={{whiteSpace: 'pre-line'}}>
                            Go live
                        </Typography>
                        <Typography variant='body1'
                                    sx={{
                                        my: 0.5,
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '400',
                                        fontFamily: 'Montserrat'
                                    }}>
                            Launch your workouts to
                        </Typography>
                        <Typography variant='body1'
                                    sx={{
                                        my: 0.5,
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '400',
                                        fontFamily: 'Montserrat'
                                    }}>
                            your community and have them
                        </Typography>
                        <Typography variant='body1'
                                    sx={{
                                        my: 0.5,
                                        textAlign: isBigScreen ? 'left' : 'center',
                                        fontWeight: '400',
                                        fontFamily: 'Montserrat'
                                    }}>
                            experience an improved workout
                        </Typography>
                    </View>
                    <Image
                        source={require('../src/components/images/go_live.png')}
                        style={styles.mocksImage}
                    />
                </View>

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
                        <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>What can I
                            use
                            Fittree for?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{fontWeight: '300', fontFamily: 'Montserrat'}}>
                            Fittree is a tool for fitness influencers like you to create awesome workouts and share
                            them
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
                        <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>Why do I
                            need
                            Fittree?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{fontWeight: '300', fontFamily: 'Montserrat'}}>
                            It is simple, you have a brand (sense of value and reputation) to build, and we have the
                            means
                            to help you achieve that. Fittree is a fit-for-purpose link to the value you have to
                            offer
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
                        <Typography color='#ef7a75' sx={{fontWeight: 'bold', fontFamily: 'Montserrat'}}>How can I
                            share
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
                            You can't monetise your workouts on Fittree at the moment; however, we are working on
                            ways
                            to
                            help you achieve such.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <View>
                    <Typography variant='h6' sx={{
                        textAlign: 'center',
                        my: 0.5,
                        fontSize: !isBigScreen ? 14 : null,
                        fontFamily: 'Montserrat',
                        fontWeight: '400'
                    }}>
                        Are you a fitness influencer
                    </Typography>
                    <Typography variant='h6' sx={{
                        textAlign: 'center',
                        my: 0.5,
                        fontSize: !isBigScreen ? 14 : null,
                        fontFamily: 'Montserrat',
                        fontWeight: '400'
                    }}>
                        or creator with a brand to build?
                    </Typography>
                    <Typography variant='h6' sx={{
                        textAlign: 'center',
                        my: 0.5,
                        fontSize: !isBigScreen ? 14 : null,
                        fontFamily: 'Montserrat',
                        fontWeight: '400'
                    }}>
                        then claim your Fittree link here
                    </Typography>
                </View>

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}>
                    <AppStoreSvg/>
                </View>

            </Container>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Link href='/' sx={{textDecoration: 'none'}}>
                        <FittrIconBig/>
                    </Link>
                </TouchableOpacity>
                <View style={styles.footerItems}>
                    <TouchableOpacity>
                        <Link target="_blank" href={INSTAGRAM + INSTAGRAM_NAME} sx={{textDecoration: 'none'}}
                              rel="noopener">
                            <SimpleLineIcons name="social-instagram" size={20} color="#ef7a75"/>
                        </Link>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerItems}>
                        <Link target="_blank" href={TWITTER + TWITTER_NAME} sx={{textDecoration: 'none'}}
                              rel="noopener">
                            <SimpleLineIcons name="social-twitter" size={20} color="#ef7a75"/>
                        </Link>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    containerSmall: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    mocksImage: {
        height: 700,
        width: 300,
        resizeMode: 'contain',
    },
    btnStyle: {
        alignItems: 'center',
        backgroundColor: '#ef7a75',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        width: 200,
        height: 40,
        margin: 'auto',
    },
    footer: {
        backgroundColor: '#282828',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    footerItems: {
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',

    }
});
