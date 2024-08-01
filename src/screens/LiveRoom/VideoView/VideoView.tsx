import { View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Video from 'react-native-video';
import {
    requestMultiple,
    PERMISSIONS,
    RESULTS,
} from 'react-native-permissions';
import getStyles from './VideoView.style'; // Saparate Style //

const VideoView: React.FC = () => {
    const styles = getStyles();

    return (
        <View style={styles.Container}>
            <Video
                posterResizeMode="cover"
                resizeMode="cover"
                source={require('../../../assets/demovideo.mp4')}
                style={styles.Video}
                repeat={true}
            />
        </View>
    );
};

export default VideoView;
