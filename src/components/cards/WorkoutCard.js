import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native-web';

const WorkoutCard = ({workout}) => {
    return (
        <View style={styles.card}>
            <Image
                style={styles.thumbnail}
                source={{
                    uri: 'https://' + workout.thumbnailUrl,
                    cache: 'force-cache',
                }}
            />
            {/*<LinearGradient*/}
            {/*  colors={['transparent', '#000000']}*/}
            {/*  style={styles.overlay}*/}
            {/*/>*/}
            <View style={styles.textContainer}>
                <Text style={[styles.text, styles.textBig]}>
                    {workout.title}
                </Text>
                <Text style={[styles.text, styles.intensityLevel]}>
                    {workout.intensityLevel}
                </Text>
                <View style={{flexDirection: 'row'}}>
                    {workout.equipments.length > 0 ? (
                        <Text style={styles.text}>
                            {workout.equipments.slice(0, 3).join(' ')}
                        </Text>
                    ) : null}
                    {workout.equipments.length > 3 ? (
                        <Text style={styles.text}>{'. . .'}</Text>
                    ) : null}
                </View>
                <View style={styles.bottomCardSection}>
                    <View style={styles.chipsContainer}>
                        {workout.bodyParts.slice(0, 3).map((bodyPart, index) => {
                            return (
                                <Text key={index} style={styles.chipBtnText}>
                                    {bodyPart}
                                </Text>
                            );
                        })}
                        {workout.bodyParts.length > 3 ? (
                            <Text style={styles.text}>{'. . .'}</Text>
                        ) : null}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        display: 'flex',
         borderRadius: 8,
        // margin: 5,
        minWidth: '28rem',
    },
    thumbnail: {
        // width: 200,
        //  height: 250,
        borderRadius: 8,
        width: '14rem',
        height: '11rem',
        objectFit: 'cover'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    textContainer: {
        ...StyleSheet.absoluteFillObject,
        marginHorizontal: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    text: {
        color: 'white',
    },
    intensityLevel: {
        fontFamily: 'Days One',
        marginTop: -5,
    },
    textBig: {
        fontFamily: 'Days One',
        fontSize: 18,
    },
    chipBtnText: {
        fontSize: 12,
        color: 'white',
        marginRight: 8,
    },
    chipsContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1,
    },
    bottomCardSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    liveText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    liveContainer: {
        borderRadius: 3,
        paddingHorizontal: 2,
        width: 40,
        backgroundColor: '#ffffffff',
    },
});

export default WorkoutCard;
