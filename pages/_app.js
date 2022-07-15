// import '../styles/globals.css'
// import {createTheme, ThemeProvider} from "@mui/material";
//
// import awsConfigs from '../src/aws-exports';
// import {Amplify} from "@aws-amplify/core";
import { Provider } from "react-redux";
import store from "../store/store";

// Amplify.configure({...awsConfigs, ssr: true});

function MyApp({Component, pageProps}) {
    // let theme = createTheme({
    //     palette: {
    //         primary: {
    //             main: '#000000',
    //             light: '#FFFFFF',
    //         },
    //         secondary: {
    //             main: '#ffbf66',
    //         },
    //         text: {
    //             primary: '#000000',
    //             light: '#FFFFFF',
    //             red: '#f55742',
    //             amber: '#ffbf66'
    //         }
    //     },
    //     typography: {
    //         fontFamily: 'Exo 2',
    //         fontWeightLight: 100,
    //         fontWeightRegular: 300,
    //         fontWeightMedium: 500,
    //         fontWeightBold: 700,
    //         button: {
    //             fontFamily: 'Exo 2',
    //         }
    //     },
    // });
    //
    // theme = createTheme(theme, {
    //     components: {
    //         MuiButton: {
    //             styleOverrides: {
    //                 root: {
    //                     // apply theme's border-radius instead of component's default
    //                     textTransform: 'capitalize',
    //                     fontFamily: theme.typography.fontFamily
    //                 },
    //             },
    //         },
    //     },
    // });

    return (
        // <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        // </ThemeProvider>
    )
}

export default MyApp
