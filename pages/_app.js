import awsConfigs from '../src/aws-exports';
import {Amplify} from "@aws-amplify/core";
import {Provider} from "react-redux";
import store from "../store/store";

Amplify.configure({...awsConfigs, ssr: true});

function MyApp({Component, pageProps}) {

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
