/* eslint-disable */
import React from "react";
import Favicon from "../illustrations/Favicon";
import {View} from "react-native-web";

const CreatorProfileLoading = () => {

    return (
        <View
            style={{
                height: '100%',
                width: '100%',
                position: 'fixed',
                display: 'flex',
                padding: 2,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Favicon/>
        </View>
    );
};

export default CreatorProfileLoading;
