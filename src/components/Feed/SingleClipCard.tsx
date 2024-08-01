import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import ClipCard from './ClipCard';
import { RootStackParamList } from '../../route/MainStack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type SingleClipProp = RouteProp<RootStackParamList, 'SingleClip'>;
interface SingleClip {
    videoUrl: string;
    thumUrl: string;
}
const SingleClipCard = () => {
    const navigation = useNavigation<BottomTabNavigationProp<any>>();
    const route = useRoute<SingleClipProp>();

    const parentNavigation = navigation.getParent();

    useEffect(() => {
        parentNavigation?.setOptions({ tabBarStyle: { display: 'none' } });

        return () => {
            parentNavigation?.setOptions({ tabBarStyle: { display: 'flex' } });
        };
    }, [parentNavigation]);

    const { videoUrl, thumUrl } = route.params;
    return <ClipCard videoUri={videoUrl} thumbnailUri={thumUrl} />;
};

export default SingleClipCard;

const styles = StyleSheet.create({});
