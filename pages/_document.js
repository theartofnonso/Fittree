import { getInitialProps } from '@expo/next-adapter/document';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;400;500;600&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}

CustomDocument.getInitialProps = async props => {
    const result = await getInitialProps(props);
    // Mutate result...
    return result;
};

export default CustomDocument;
