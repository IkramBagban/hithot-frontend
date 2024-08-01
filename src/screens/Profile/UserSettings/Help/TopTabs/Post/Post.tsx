import { View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import getStyles from './Post.style'; // Saparate Style //

const Post: React.FC = () => {
    const navigation = useNavigation();

    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}></View>
        </>
    );
};

export default Post;
