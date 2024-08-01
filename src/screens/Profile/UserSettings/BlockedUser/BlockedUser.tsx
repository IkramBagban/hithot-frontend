import {
    View,
    ScrollView,
    FlatList,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './BlockedUser.style';
import Header from './Header/Header';
import blockUserStore from '../../../../store/blockUserStore';
import { useEffect } from 'react';
import useThemeStyles from '../../../../hooks/useThemeStyles';

const BlockedUser = () => {
    const { block, loading, error, fetchBlockUser } = blockUserStore();

    useEffect(() => {
        fetchBlockUser();
    }, []);

    const ListHeaderComponent = () => {
        return (
            <>
                <View style={[styles.TitleAndSubTitleContainer]}>
                    <View style={[styles.TitleContainer]}>
                        <Text
                            style={[
                                styles.Title,
                                { color: Theme.TextColor.color },
                            ]}>
                            {'Blocked users'}
                        </Text>
                    </View>
                    <View style={[styles.SubTitleContainer]}>
                        <Text
                            style={[
                                styles.SubTitle,
                                { color: Theme.TextColor.color },
                            ]}>
                            {block.length}
                        </Text>
                    </View>
                </View>
            </>
        );
    };

    const RenderItem = ({ item }) => {
        return (
            <>
                <View style={[styles.DetailsContainer]}>
                    <View style={[styles.ImageContainer]}>
                        <View style={[styles.ImageRadiusContainer]}>
                            <Image
                                source={
                                    item?.user_info?.profile_pic === undefined
                                        ? require('../../../../assets/GradientBG.png')
                                        : { uri: item?.user_info?.profile_pic }
                                }
                                style={[styles.Image]}
                            />
                        </View>
                    </View>
                    <View style={[styles.UsernameAndSubnameContainer]}>
                        <View style={[styles.UsernameContainer]}>
                            <Text
                                style={[
                                    styles.UsernameText,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {item?.user_info?.username === undefined
                                    ? 'HITHOT user'
                                    : item?.user_info?.username}
                            </Text>
                        </View>
                        <View style={[styles.SubnameContainer]}>
                            <Text
                                style={[
                                    styles.SubnameText,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {item?.user_info?.total_fans === undefined
                                    ? '0 followers'
                                    : item?.total_fans}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.ButtonContainer]}>
                        <TouchableOpacity
                            disabled={
                                item?.user_info === undefined ? true : false
                            }
                            activeOpacity={0.8}>
                            <LinearGradient
                                colors={['#F7C900', '#EB853C']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                style={[
                                    styles.ButtonSubContainer,
                                    {
                                        opacity:
                                            item?.user_info === undefined
                                                ? 0.4
                                                : undefined,
                                    },
                                ]}>
                                <Text style={[styles.ButtonText]}>
                                    {'Unblock'}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        );
    };

    const styles = getStyles();

      const Theme = useThemeStyles(styleCreator);


    return (
        <>
            <View style={[styles.Container,{backgroundColor:Theme.ContainerColor.backgroundColor}]}>
                <Header />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.ContentContainerStyle]}>
                    <FlatList
                        ListHeaderComponent={ListHeaderComponent}
                        data={block}
                        renderItem={RenderItem}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[
                            styles.FlatListContentContainerStyle,
                        ]}
                        ListEmptyComponent={() => (
                            <>
                                {block.length === 0 && (
                                    <View style={[styles.EmptyContainer]}>
                                        <View
                                            style={[styles.EmptyIconContainer]}>
                                            <Image
                                                source={require('../../../../assets/emptyBlockedUsers.png')}
                                                resizeMode={'contain'}
                                                style={[styles.EmptyIcon]}
                                            />
                                        </View>
                                        <Text style={[styles.EmptyText,{color:Theme.TextColor.color}]}>
                                            {'No blocked user available'}
                                        </Text>
                                    </View>
                                )}
                            </>
                        )}
                    />
                </ScrollView>
            </View>
        </>
    );
};

export default BlockedUser;

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