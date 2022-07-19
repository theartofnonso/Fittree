import awsConfigs from '../src/aws-exports';
import {Amplify} from "@aws-amplify/core";
import {Provider} from "react-redux";
import store from "../store/store";
import {Auth} from "aws-amplify";

// const aws_exports_override = {...awsConfigs, aws_appsync_authenticationType: "AWS_IAM", ssr: true}
// Amplify.configure(aws_exports_override);

//Old approach
Amplify.configure({...awsConfigs, ssr: true});

function MyApp({Component, pageProps}) {
    // Auth.currentCredentials()
    //     .then(d => console.log('data: ', d))
    //     .catch(e => console.log('error: ', e))
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
