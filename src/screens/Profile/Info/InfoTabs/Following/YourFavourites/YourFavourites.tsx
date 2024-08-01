import { Text, View, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import getStyles from './YourFavourites.style'; // Saparate Style //
import userFavouritesStore from '../../../../../../store/userFavouritesStore';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import useThemeStyles from '../../../../../../hooks/useThemeStyles';

// Send Props //

interface HeaderProps {
    FB_ID: string;
}

interface DataItem {
    id: number;
    profile_pic: any; // Adjust the type based on your image type
}

const YourFavourites: React.FC<HeaderProps> = ({ FB_ID }) => {
    const navigation = useNavigation();

    const { fetchFavourites, favourites, loading } = userFavouritesStore(
        state => ({
            fetchFavourites: state.fetchFavourites,
            loading: state.loading,
            favourites: state.favourites,
        }),
    );

    useEffect(() => {
        fetchFavourites(FB_ID);
    }, [FB_ID]);

    const RenderItem: React.FC<{ item: DataItem }> = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                // onPress={() => navigation.navigate('VisitProfile')}
            >
                <View style={[styles.ImageContainer]}>
                    <View style={[styles.ImageRadiusContainer]}>
                        {loading ? (
                            <>
                                <ShimmerPlaceholder
                                    LinearGradient={LinearGradient}
                                    shimmerColors={[
                                        '#171717',
                                        '#464646',
                                        '#2f2f2f',
                                    ]}
                                    style={[styles.Shimmer]}
                                />
                            </>
                        ) : (
                            <Image
                                source={{ uri: item?.profile_pic }}
                                resizeMode={'cover'}
                                style={[styles.Image]}
                            />
                        )}
                    </View>
                    {/* <View style={[styles.BadgeContainer]}>
                        <Text style={[styles.BadgeText]}>LIVE</Text>
                    </View> */}
                </View>
            </TouchableOpacity>
        );
    };

    const styles = getStyles();

     const Theme = useThemeStyles(styleCreator);

    return (
        <View style={[styles.Container]}>
            <View style={[styles.TitleContainer]}>
                <Text style={[styles.TitleText,{color:Theme.TextColor.color}]}>Your Favourites</Text>
            </View>
            <FlatList
                data={favourites}
                renderItem={RenderItem}
                horizontal={true}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[styles.ContentContainerStyle]}
            />
        </View>
    );
};

export default YourFavourites;

const styleCreator = colors =>
    StyleSheet.create({
        TextColor: {
            color: colors.textColor,
        },
        ActionColor: {
            backgroundColor: colors.bgLightColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
        IconColor: {
            tintColor: colors.iconColor,
        },
        ContainerColor: {
            backgroundColor: colors.bgColor,
        },
        BorderColor: {
            borderColor: colors.activeBorderColor,
        },
        subcontainerColor: {
            backgroundColor: colors.subContainerColor,
        },
    });
