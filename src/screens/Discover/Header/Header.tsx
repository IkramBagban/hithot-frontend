import { View, TouchableOpacity, Image, FlatList, Text, Dimensions, StyleSheet, Platform } from 'react-native';
import React, { useContext, useState } from 'react';
import Categories from './Categories/Categories';
import { useNavigation } from '@react-navigation/native';
import useThemeStyles from '../../../hooks/useThemeStyles';
import { ThemeContext } from '../../../theme/ThemeContext';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

// Send Props //

interface DataItem {
    id: number;
    OnPress: () => void;
    URL: any; // Adjust the type based on your image type
    TITLE: any;
    Active: number;
}

const Header: React.FC<Props> = ({ OnChangeText }) => {
    // All State's //

    const [ActiveButton, InActiveButton] = useState(1);

    const Data: DataItem[] = [
        {
            id: 1,
            OnPress: () => InActiveButton(1),
            URL: require('../../../assets/kingicon.png'),
            TITLE: 'All',
            Active: ActiveButton === 1,
        },
        {
            id: 2,
            OnPress: () => InActiveButton(2),
            URL: require('../../../assets/RedHeart.png'),
            TITLE: 'Liked posts',
            Active: ActiveButton === 2,
        },
        {
            id: 3,
            OnPress: () => InActiveButton(3),
            URL: require('../../../assets/Audios.png'),
            TITLE: 'Audios',
            Active: ActiveButton === 3,
        },
        {
            id: 4,
            OnPress: () => InActiveButton(4),
            URL: require('../../../assets/fitness.png'),
            TITLE: 'Fitness',
            Active: ActiveButton === 4,
        },
        {
            id: 5,
            OnPress: () => InActiveButton(4),
            URL: require('../../../assets/TrendingChallenges.png'),
            TITLE: 'Trending challenges',
            Active: ActiveButton === 5,
        },
    ];

    const RenderItem: React.FC<{ item: DataItem }> = ({ item }) => {
        return (
            <>
                {/* Render Categories Component */}
                <Categories
                    ID={item.id}
                    OnPress={item.OnPress}
                    Active={item.Active}
                    URL={item.URL}
                    TITLE={item.TITLE}
                />
            </>
        );
    };

    const navigation = useNavigation();

    const styles = useThemeStyles(styleCreator);

    const {isDark} = useContext(ThemeContext);

    return (
        <>
            <View style={[styles.Container]}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('SearchSection')}>
                    <View style={styles.IconAndTitleContainer}>
                        <View style={[styles.IconContainer]}>
                            <Image
                                source={isDark ? require('../../../assets/SearchIc.png') : require('../../../assets/SearchIcDark.png')}
                                resizeMode="contain"
                                style={styles.Icon}
                            />
                        </View>
                        <View style={styles.TitleContainer}>
                            <Text style={[styles.Title]}>{'Search'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <FlatList
                    data={Data}
                    renderItem={RenderItem}
                    horizontal={true}
                    nestedScrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}
                />
            </View>
        </>
    );
};

const styleCreator = colors => 
    StyleSheet.create({
        Container: {
            width: '100%',
            paddingTop: Platform.OS === 'ios' ? 60 : 40,
            paddingBottom: 14,
            backgroundColor: colors.bgColor,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconAndTitleContainer: {
            width: '90%',
            paddingVertical: 14,
            paddingHorizontal: 14,
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: colors.searchBoxColor,
            // borderWidth: 1,
            // borderColor: 'red',
        },
        IconContainer: {
            width: '10%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Icon: {
            width: 18,
            height: 18,
        },
        TitleContainer: {
            width: '90%',
            justifyContent: 'center',
            // borderWidth: 1,
            // borderColor: 'red',
        },
        Title: {
            fontSize: 16,
            fontFamily: 'Figtree-Regular',
            color: colors.textColor,
            opacity: 0.6,
        },
        ContentContainerStyle: {
            paddingTop: 14,
            paddingLeft: WIDTH / 18,
            // borderWidth: 1,
            // borderColor: 'red',
        },
    });

export default Header;
