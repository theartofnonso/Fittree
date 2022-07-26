import {getInitialProps} from '@expo/next-adapter/document';
import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';

class CustomDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap" rel="stylesheet"/>
                <link rel="icon" type="image/png" href="/fittr.png"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}

CustomDocument.getInitialProps = async props => {
    // Mutate result...
    return await getInitialProps(props);
};

export default CustomDocument;
