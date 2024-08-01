import {
    ScrollView,
    View,
    Image,
    TouchableOpacity,
    Text,
    FlatList,
    Dimensions,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import getStyles from './Profile.style';
import LinearGradient from 'react-native-linear-gradient';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Profile: React.FC<{ data: any }> = ({ data }) => {
    const navigation = useNavigation();

    const [ShowData, HideData] = useState(false);

    const DataManage = () => {
        if (ShowData) {
            HideData(false);
        } else {
            HideData(true);
        }
    };

    const [ActiveButton, InActiveButton] = useState(2);

    const PackageData = [
        {
            id: 1,
            OnPress: () => InActiveButton(1),
            Duration: 'Weekly',
            DurationDays: '7',
            Benefit: '1-2K followers',
            Active: ActiveButton === 1,
        },
        {
            id: 2,
            OnPress: () => InActiveButton(2),
            Duration: 'Monthly',
            DurationDays: '30',
            Benefit: '1-2K followers',
            Active: ActiveButton === 2,
        },
        {
            id: 3,
            OnPress: () => InActiveButton(3),
            Duration: 'Yearly',
            DurationDays: '365',
            Benefit: '1-2K followers',
            Active: ActiveButton === 3,
        },
    ];

    const PackageRenderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity activeOpacity={0.8} onPress={item.OnPress}>
                    <LinearGradient
                        colors={[
                            item.Active ? '#F7C900' : '#45494D',
                            item.Active ? '#EB853C' : '#45494D',
                        ]}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={[
                            styles.PackageDetailsContainer,
                            {
                                width: item.Active
                                    ? WIDTH / 3.46
                                    : WIDTH / 3.76,
                                borderWidth: item.Active ? 2.28 : undefined,
                                borderColor: item.Active
                                    ? '#FFFFFF'
                                    : undefined,
                                paddingVertical: item.Active ? 28 : 14,
                            },
                        ]}>
                        <View style={[styles.DurationContainer]}>
                            <Text style={[styles.Duration]}>
                                {item.Duration}
                            </Text>
                        </View>
                        <View style={[styles.DurationDaysContainer]}>
                            <Text style={[styles.DurationDays]}>
                                {item.DurationDays}
                            </Text>
                        </View>
                        <View style={[styles.DurationTitleContainer]}>
                            <Text style={[styles.DurationTitle]}>{'days'}</Text>
                        </View>
                        <View style={[styles.BenefitContainer]}>
                            <Text style={[styles.Benefit]}>{item.Benefit}</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </>
        );
    };

    const Data = [
        {
            id: 1,
            URL: require('../../../assets/exclusivecontent.png'),
            Title: 'Exclusive content',
            SubTitle:
                'Stand out from the crowd, increase visibility and build confidence among followers with the coveted blue tick verification.',
        },
        {
            id: 2,
            URL: require('../../../assets/directmessaging.png'),
            Title: 'Direct messaging',
            SubTitle:
                "Elevate your account's security with verification, offering peace of mind and safeguarding againts unauthorized access.",
        },
        {
            id: 3,
            URL: require('../../../assets/support.png'),
            Title: 'Support',
            SubTitle:
                "Verified account's receive enhanced support features, ensuring swift resolution and personalized assistance for your social media needs.",
        },
    ];

    const RenderItem = ({ item }) => {
        return (
            <>
                <View style={[styles.DataContainer]}>
                    <View style={[styles.DataIconContainer]}>
                        <Image
                            source={item.URL}
                            resizeMode={'contain'}
                            style={[styles.DataIcon]}
                        />
                    </View>
                    <View style={[styles.TitleAndSubTitleContainer]}>
                        <View style={[styles.TitleContainer]}>
                            <Text style={[styles.Title]}>{item.Title}</Text>
                        </View>
                        <View style={[styles.SubTitleContainer]}>
                            <Text style={[styles.SubTitle]}>
                                {item.SubTitle}
                            </Text>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    const styles = getStyles();

    return (
        <>
            <View style={[styles.IndicatorContainer]}>
                <View
                    style={[
                        styles.Indicator,
                        {
                            backgroundColor: ShowData ? '#45494D' : '#FFFFFF',
                        },
                    ]}
                />
                <View
                    style={[
                        styles.Indicator,
                        {
                            backgroundColor: ShowData ? '#FFFFFF' : '#45494D',
                        },
                    ]}
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.ContentContainerStyle]}>
                {!ShowData ? (
                    <View style={[styles.ProfileContainer]}>
                        <View style={[styles.ImageContainer]}>
                            <View style={[styles.ImageAndBadgeContainer]}>
                                <View style={[styles.ImageRadiusContainer]}>
                                    <Image
                                        source={{ uri: data?.profile_pic }}
                                        resizeMode={'cover'}
                                        style={[styles.Image]}
                                    />
                                </View>
                                <View style={[styles.BadgeContainer]}>
                                    <View style={[styles.BadgeRadiusContainer]}>
                                        <Image
                                            source={require('../../../assets/subscribe.png')}
                                            resizeMode={'contain'}
                                            style={[styles.Badge]}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.NameAndUsernameContainer]}>
                            <View style={[styles.NameContainer]}>
                                <Text
                                    style={[
                                        styles.Name,
                                    ]}>{`${data?.first_name} ${data?.last_name}`}</Text>
                            </View>
                            <View style={[styles.UsernameContainer]}>
                                <Text style={[styles.Username]}>
                                    {data?.username}
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.ButtonContainer]}>
                            <LinearGradient
                                colors={['#F7C900', '#EB853C']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                style={[styles.ButtonSubContainer]}>
                                <View style={[styles.ButtonTextContainer]}>
                                    <Text style={[styles.ButtonText]}>
                                        {'Selected account'}
                                    </Text>
                                </View>
                                <View style={[styles.IconContainer]}>
                                    <Image
                                        source={require('../../../assets/selectedright.png')}
                                        resizeMode={'contain'}
                                        style={[styles.Icon]}
                                    />
                                </View>
                            </LinearGradient>
                        </View>
                    </View>
                ) : (
                    <View style={[styles.PlansContainer]}>
                        <View style={[styles.PlansHeaderContainer]}>
                            <Text style={[styles.PlansHeader]}>
                                {'Subscription package'}
                            </Text>
                        </View>
                        <FlatList
                            data={PackageData}
                            renderItem={PackageRenderItem}
                            horizontal={true}
                            nestedScrollEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={[
                                styles.PlansContentContainerStyle,
                            ]}
                        />
                    </View>
                )}
                <View style={[styles.FlatListHeaderContainer]}>
                    <Text style={[styles.FlatListHeader]}>
                        {'Benefits of subscription'}
                    </Text>
                </View>
                <FlatList
                    data={Data}
                    renderItem={RenderItem}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>
            <View style={[styles.FooterContainer]}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => DataManage()}>
                    <LinearGradient
                        colors={['#F7C900', '#EB853C']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={[styles.FooterSubContainer]}>
                        <View style={[styles.FooterTitleContainer]}>
                            <Text style={[styles.FooterTitle]}>{'Next'}</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Profile;
