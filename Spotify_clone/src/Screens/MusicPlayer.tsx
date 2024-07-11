import React, { useState, useEffect, useRef } from 'react';
import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from 'react-native-track-player';
import { playListData } from '../Constants';
import SongInfo from '../Components/Songinfo';
import SongSlider from '../Components/SongSlider';
import ControlCenter from '../Components/ControlCenter';

const { width } = Dimensions.get('window');

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>();
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
        if (event.type === Event.PlaybackTrackChanged) {
            const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
            setTrack(playingTrack);
        }
    });

    useEffect(() => {
        const rotate = rotateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 10000, // Adjust the duration to control the speed of rotation
                useNativeDriver: true
            })
        ).start();

        return () => {
            rotateAnim.stopAnimation();
        };
    }, [rotateAnim]);

    const renderArtWork = () => {
        const rotate = rotateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Animated.Image
                            style={[styles.albumArtImg, { transform: [{ rotate }] }]}
                            source={{ uri: track.artwork.toString() }}
                        />
                    )}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headingTExt}>
                    Music Player
                </Text>
                </View>
            <FlatList
                horizontal
                data={playListData}
                renderItem={renderArtWork}
                keyExtractor={song => song.id.toString()}
            />

            <SongInfo track={track} />
            <SongSlider />
            <ControlCenter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#01CBC6',
    },
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumContainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        width: '100%',
        height: '100%',
        borderRadius: 150, // Make it a circle
    },
    headingTExt:{
        color:'#333',
        fontSize:30,
        fontWeight:'bold',
        marginTop:18,
        
    
    }
});

export default MusicPlayer;
