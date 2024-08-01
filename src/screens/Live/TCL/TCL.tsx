import React, { useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getStyles from './TCL.style'; // Saparate Style //
import useLiveFeedStore from '../../../store/liveFeedStore';
import { Gifs } from '../../../theme/Gifs';
import LottieView from 'lottie-react-native';
import { Lotties } from '../../../theme/Lotties';
import useThemeStyles from '../../../hooks/useThemeStyles';

// Send Props //

interface DataItem {
    fb_id: string;
    username: string;
    first_name: string;
    last_name: string;
    profile_pic: string;
}

// Top creators live //

const TCL: React.FC<{ data: DataItem[] }> = ({ data }) => {
    const navigation = useNavigation();

    // const Data: DataItem[] = [
    //     {
    //         id: 1,
    //         URL: require('../../../assets/GradientBG.png'),
    //     },
    //     {
    //         id: 2,
    //         URL: require('../../../assets/GradientBG.png'),
    //     },
    //     {
    //         id: 3,
    //         URL: require('../../../assets/GradientBG.png'),
    //     },
    //     {
    //         id: 4,
    //         URL: require('../../../assets/GradientBG.png'),
    //     },
    // ];

    const RenderItem: React.FC<{ item: DataItem }> = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('LiveRoom')}>
                <View style={[styles.ImageContainer]}>
                    <View style={[styles.ImageRadiusContainer]}>
                        <Image
                            source={{ uri: item?.profile_pic }}
                            defaultSource={require('../../../assets/GradientBG.png')}
                            style={[styles.Image]}
                            resizeMode="cover"
                        />
                    </View>

                    <Image
                        source={Gifs.liveGif}
                        style={[styles.liveHeader]}
                        resizeMode="contain"
                    />
                    {/* <View style={[styles.BadgeContainer]}>
                        <Text style={[styles.BadgeText]}>LIVE</Text>
                    </View> */}
                </View>
                {/* <LottieView
                    source={Lotties.liveCircleLottie}
                    style={{
                        height: 30,
                        width: 80,
                        // backgroundColor: 'red',
                    }}
                    autoPlay
                    loop
                /> */}
            </TouchableOpacity>
        );
    };

    const styles = useThemeStyles(getStyles);

    return (
        <View style={[styles.Container]}>
            <View style={[styles.TitleContainer]}>
                <Text style={[styles.TitleText]}>Top creators live</Text>
            </View>
            <FlatList
                data={data}
                renderItem={RenderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[styles.ContentContainerStyle]}
            />
        </View>
    );
};

export default TCL;
