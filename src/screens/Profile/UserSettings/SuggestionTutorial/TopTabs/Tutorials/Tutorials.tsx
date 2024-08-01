import {
    View,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    Linking,
    StyleSheet,
} from 'react-native';
import getStyles from './Tutorials.style';
import useThemeStyles from '../../../../../../hooks/useThemeStyles';

const Tutorials: React.FC<{}> = ({}) => {
    const Data = [
        {
            id: 1,
            URL: 'Fk40F_spZA4',
            Title: 'Share it like dance bug...',
        },
        {
            id: 2,
            URL: '_6yrGnOwiIU',
            Title: 'Earn money online | HI...',
        },
        {
            id: 3,
            URL: 'U-H5ALvmu8o',
            Title: 'Share it like dance bug...',
        },
        {
            id: 4,
            URL: 'Yx7slrBudLQ',
            Title: 'Earn money online | HI...',
        },
        {
            id: 5,
            URL: 'BdJQY3KPL3Q',
            Title: 'Share it like dance bug...',
        },
        {
            id: 6,
            URL: 'FoH5PxL0lXI',
            Title: 'Earn money online | HI...',
        },
        {
            id: 7,
            URL: '2O615fJmAtE',
            Title: 'Earn money online | HI...',
        },
        {
            id: 8,
            URL: 'BdJQY3KPL3Q',
            Title: 'Earn money online | HI...',
        },
        {
            id: 9,
            URL: '-CE-notBUXI',
            Title: 'Earn money online | HI...',
        },
        // {
        //     id: 10,
        //     URL: require('../../../../../../assets/GradientBG.png'),
        //     Title: 'Earn money online | HI...',
        // },
    ];

    const Theme = useThemeStyles(styleCreator);

    const RenderItem: React.FC<{ item: any }> = ({ item }) => {

        const thumbnailURL = `https://img.youtube.com/vi/${item.URL}/hqdefault.jpg`;
        const videoURL = `https://youtu.be/${item.URL}`;
        console.log('thumbnailURL',thumbnailURL);
        


         const handlePress = () => {
             Linking.openURL(videoURL);
         };


        return (
            <>
                <TouchableOpacity
                    style={[styles.DataContainer]}
                    onPress={handlePress}>
                    <View style={[styles.ImageContainer]}>
                        <Image
                            source={{ uri: thumbnailURL }}
                            resizeMode={'contain'}
                            // blurRadius={5}
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
                            style={[
                                styles.Title,
                                { color: Theme.TextColor.color },
                            ]}>
                            {item.Title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </>
        );
    };

    const styles = getStyles();

    return (
        <View
            style={{
                backgroundColor: Theme.ActionColor.backgroundColor,
            }}>
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

export default Tutorials;

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