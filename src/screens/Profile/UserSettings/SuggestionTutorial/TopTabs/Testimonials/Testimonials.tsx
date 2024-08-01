import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import getStyles from './Testimonials.style';
import useThemeStyles from '../../../../../../hooks/useThemeStyles';

const Testimonials: React.FC<{}> = ({}) => {
    const Data = [
        {
            id: 1,
            URL: require('../../../../../../assets/GradientBG.png'),
            Title: 'Share it like dance bug...',
        },
        {
            id: 2,
            URL: require('../../../../../../assets/GradientBG.png'),
            Title: 'Earn money online | HI...',
        },
        {
            id: 3,
            URL: require('../../../../../../assets/GradientBG.png'),
            Title: 'Share it like dance bug...',
        },
        {
            id: 4,
            URL: require('../../../../../../assets/GradientBG.png'),
            Title: 'Earn money online | HI...',
        },
        {
            id: 5,
            URL: require('../../../../../../assets/GradientBG.png'),
            Title: 'Share it like dance bug...',
        },
        {
            id: 6,
            URL: require('../../../../../../assets/GradientBG.png'),
            Title: 'Earn money online | HI...',
        },
        {
            id: 7,
            URL: require('../../../../../../assets/GradientBG.png'),
            Title: 'Earn money online | HI...',
        },
        {
            id: 8,
            URL: require('../../../../../../assets/GradientBG.png'),
            Title: 'Earn money online | HI...',
        },
        {
            id: 9,
            URL: require('../../../../../../assets/GradientBG.png'),
            Title: 'Earn money online | HI...',
        },
        {
            id: 10,
            URL: require('../../../../../../assets/GradientBG.png'),
            Title: 'Earn money online | HI...',
        },
    ];

    const Theme = useThemeStyles(styleCreator);

    const RenderItem: React.FC<{ item: any }> = ({ item }) => {
        return (
            <>
                <View style={[styles.DataContainer]}>
                    <View style={[styles.ImageContainer]}>
                        <Image
                            source={item.URL}
                            resizeMode={'cover'}
                            blurRadius={56}
                            style={[styles.Image]}
                        />
                        <View style={[styles.BadgeContainer]}>
                            <Image
                                source={require('../../../../../../assets/youtubeicon.png')}
                                resizeMode={'contain'}
                                style={[styles.Badge]}
                            />
                        </View>
                    </View>
                    <View style={[styles.TitleContainer]}>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                            style={[styles.Title,{color:Theme.TextColor.color}]}>
                            {item.Title}
                        </Text>
                    </View>
                </View>
            </>
        );
    };

    const styles = getStyles();

    return (
        <View style={{ backgroundColor: Theme.ActionColor.backgroundColor }}>
            <FlatList
                data={Data}
                renderItem={RenderItem}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.ContentContainerStyle]}
            />
        </View>
    );
};

export default Testimonials;

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
    });
