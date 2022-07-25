import awsConfigs from '../src/aws-exports';
import {Amplify} from "@aws-amplify/core";
import {Provider} from "react-redux";
import {configureFonts, Provider as PaperProvider} from 'react-native-paper';
import store from "../store/store";
import Head from "next/head";

// const aws_exports_override = {...awsConfigs, aws_appsync_authenticationType: "AWS_IAM", ssr: true}
// Amplify.configure(aws_exports_override);

//Old approach
Amplify.configure({...awsConfigs, ssr: true});

const fontConfig = {
    web: {
        regular: {
            fontFamily: "Exo 2",
            fontWeight: "400",
        },
        medium: {
            fontFamily: "Exo 2",
            fontWeight: "500",
        },
        light: {
            fontFamily: "Exo 2",
            fontWeight: "300",
        },
        thin: {
            fontFamily: "Exo 2",
            fontWeight: "100",
        },
    },
};

const theme = {
    dark: false,
    roundness: 5,
    colors: {
        primary: "#282828",
        accent: "#f54755",
        background: "#FFFFFF",
        surface: "#FFFFFF",
        text: "#282828",
        textWhite: "#FFFFFF",
        disabled: "#f2f2f2",
        placeholder: "#7c7c7c",
        backdrop: "rgba(0, 0, 0, 0.1)",
        onSurface: "#282828",
    },
    fonts: configureFonts(fontConfig),
    animation: {
        scale: 1.0,
    },
};

function MyApp({Component, pageProps}) {

    // Auth.currentCredentials()
    //     .then(d => console.log('data: ', d))
    //     .catch(e => console.log('error: ', e))
    return (
        <>
            <Head>
                <title>Fittree</title>
            </Head>
            <Provider store={store}>
                <PaperProvider theme={theme}>
                    <Component {...pageProps} />
                </PaperProvider>
            </Provider>
        </>
    )
}

export default MyApp
