import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import getStyles from './ULV.style'; // Saparate Style //
import UserDetails from './UserDetails/UserDetails';
import useThemeStyles from '../../../hooks/useThemeStyles';

// Upcoming live videos //
interface DataItem {
    fb_id: string;
    username: string;
    first_name: string;
    last_name: string;
    profile_pic: string;
}
const ULV: React.FC<{ data: DataItem[] }> = ({ data }) => {
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
    // ];

    const RenderItem: React.FC<{ item: DataItem }> = ({ item }) => {
        return (
            <>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={[styles.ImageContainer]}>
                        <View style={[styles.ImageRadiusContainer]}>
                            <Image
                                source={{ uri: item?.profile_pic }}
                                defaultSource={require('../../../assets/GradientBG.png')}
                                style={[styles.Image]}
                                resizeMode="cover"
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
                    <Text style={[styles.TitleText]}>Upcoming live videos</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={RenderItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}
                />
            </View>
        </>
    );
};

export default ULV;
