/* eslint-disable */
import React from "react";
import {TouchableOpacity, View} from "react-native-web";
import {SimpleLineIcons} from "@expo/vector-icons";
import {Link} from "@mui/material";
import {INSTAGRAM, TIKTOK, TWITTER, YOUTUBE} from "../../utils/workout/utilsConstants";
import TikTokSvg from "../illustrations/TikTokSvg";

const Socials = ({profile}) => {

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginVertical: 20
        }}>
            {profile.instagram ?
                <TouchableOpacity style={{marginHorizontal: 6}}>
                    <Link target="_blank" href={INSTAGRAM + profile.instagram} sx={{textDecoration: 'none'}}
                          rel="noopener">
                        <SimpleLineIcons name="social-instagram" size={24} color="#ef7a75"/>
                    </Link>
                </TouchableOpacity> : null}
            {profile.facebook ?
                <TouchableOpacity style={{marginHorizontal: 6}}>
                    <Link target="_blank" href={INSTAGRAM + profile.facebook} sx={{textDecoration: 'none'}}
                          rel="noopener">
                        <SimpleLineIcons name="social-facebook" size={24} color="#ef7a75"/>
                    </Link>
                </TouchableOpacity> : null}
            {profile.twitter ?
                <TouchableOpacity style={{marginHorizontal: 6}}>
                    <Link target="_blank" href={TWITTER + profile.twitter} sx={{textDecoration: 'none'}}
                          rel="noopener">
                        <SimpleLineIcons name="social-twitter" size={24} color="#ef7a75"/>
                    </Link>
                </TouchableOpacity> : null}
            {/*{profile.spotify ?*/}
            {/*    <TouchableOpacity style={{marginHorizontal: 6}}><SimpleLineIcons name="social-spotify" size={24}*/}
            {/*                                                                     color="#ef7a75"/></TouchableOpacity> : null}*/}
            {profile.tiktok ?
                <TouchableOpacity style={{marginLeft: 1, marginRight: 6}}>
                    <Link target="_blank" href={TIKTOK + profile.tiktok} sx={{textDecoration: 'none'}}
                          rel="noopener">
                        <TikTokSvg/>
                    </Link>
                </TouchableOpacity> : null}
            {profile.youtube ?
                <TouchableOpacity style={{marginHorizontal: 6}}>
                    <Link target="_blank" href={YOUTUBE + profile.youtube} sx={{textDecoration: 'none'}}
                          rel="noopener">
                        <SimpleLineIcons name="social-youtube" size={24} color="#ef7a75"/>
                    </Link>
                </TouchableOpacity> : null}
        </View>
    );
};

export default Socials;
