import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import getStyles from './PV.style'; // Saparate Style //
import UserDetails from './UserDetails/UserDetails';
import useThemeStyles from '../../../hooks/useThemeStyles';

// Popular videos //

const PV: React.FC = () => {
    const Data = [
        {
            id: 1,
            URL: require('../../../assets/GradientBG.png'),
        },
        {
            id: 2,
            URL: require('../../../assets/GradientBG.png'),
        },
        {
            id: 3,
            URL: require('../../../assets/GradientBG.png'),
        },
    ];

    const RenderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={[styles.ImageContainer]}>
                        <View style={[styles.ImageRadiusContainer]}>
                            <Image source={item.URL} style={[styles.Image]} />
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
                    <Text style={[styles.TitleText]}>Popular videos</Text>
                </View>
                <FlatList
                    data={Data}
                    renderItem={RenderItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}
                />
            </View>
        </>
    );
};

export default PV;
