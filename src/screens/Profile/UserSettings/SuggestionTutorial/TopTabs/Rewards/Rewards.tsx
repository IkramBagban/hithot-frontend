import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import getStyles from './Rewards.style';
import useThemeStyles from '../../../../../../hooks/useThemeStyles';

const Rewards: React.FC<{}> = ({}) => {
    const Data = [
        {
            id: 1,
            URL: require('../../../../../../assets/RewardsBG.png'),
        },
        {
            id: 2,
            URL: require('../../../../../../assets/RewardsBG.png'),
        },
        {
            id: 3,
            URL: require('../../../../../../assets/RewardsBG.png'),
        },
        {
            id: 4,
            URL: require('../../../../../../assets/RewardsBG.png'),
        },
        {
            id: 5,
            URL: require('../../../../../../assets/RewardsBG.png'),
        },
        {
            id: 6,
            URL: require('../../../../../../assets/RewardsBG.png'),
        },
        {
            id: 7,
            URL: require('../../../../../../assets/RewardsBG.png'),
        },
        {
            id: 8,
            URL: require('../../../../../../assets/RewardsBG.png'),
        },
        {
            id: 9,
            URL: require('../../../../../../assets/RewardsBG.png'),
        },
        {
            id: 10,
            URL: require('../../../../../../assets/RewardsBG.png'),
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
                            resizeMode={'contain'}
                            style={[styles.Image]}
                        />
                    </View>
                </View>
            </>
        );
    };

    const styles = getStyles();

    return (
        <View style={{backgroundColor:Theme.ActionColor.backgroundColor}}>
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

export default Rewards;

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
