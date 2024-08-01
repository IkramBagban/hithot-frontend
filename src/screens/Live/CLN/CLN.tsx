import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import getStyles from './CLN.style'; // Saparate Style //
import UserDetails from './UserDetails/UserDetails';
import useThemeStyles from '../../../hooks/useThemeStyles';

interface DataItem {
    fb_id: string;
    username: string;
    first_name: string;
    last_name: string;
    profile_pic: string;
}

// Creators live now //

const CLN: React.FC<{ data: DataItem[] }> = ({ data }) => {
    const [errors, setError] = useState(false);

    // const Data = [
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
            <>
                <TouchableOpacity key={item.fb_id} activeOpacity={0.8}>
                    <View style={[styles.ImageContainer]}>
                        <View style={[styles.ImageRadiusContainer]}>
                            <Image
                                source={{
                                    uri: item?.profile_pic,
                                }}
                                defaultSource={require('../../../assets/GradientBG.png')}
                                style={[styles.Image]}
                            />
                            {/* Render UserDetails Component */}
                            <UserDetails ITEM={item} />
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        );
    };

    const styles = useThemeStyles(getStyles);

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.TitleContainer]}>
                    <Text style={[styles.TitleText]}>Creators live now</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={RenderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}
                />
            </View>
        </>
    );
};

export default CLN;
