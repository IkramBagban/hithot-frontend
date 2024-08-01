import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {
    Image,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
    StyleSheet,
    Linking,
} from 'react-native';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CenterHeader from '../../components/Headers/CustomHeader';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';
import FAQSection, { faqData } from '../../components/FAQ/FAQComp';
import { useEffect, useRef, useState } from 'react';
import WalletStore from '../../store/WalletStore';
import { useRoute } from '@react-navigation/native';
import Header from './Header/Header';
import getStyles from './WalletScreen.style';
import Footer from './Footer/Footer';
import FAQ from './FAQ/FAQ';
import HTEH from './HTEH/HTEH';
import ActionDetails from './ActionDetails/ActionDetails';
import useThemeStyles from '../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../config';
import Popup from './Popup/Popup';

const faqs: faqData[] = [
    {
        title: 'What is a referral?',
        description:
            'Go to rewards section from the homescreen and click on the type of rewards and then claim your reward to make it yours.',
    },
    {
        title: 'How many people can I refer?',
        description:
            'Go to rewards section from the homescreen and click on the type of rewards and then claim your reward to make it yours.',
    },
    // Other FAQ items...
];

const WalletScreen = () => {
    const { top } = useSafeAreaInsets();
    const { width } = useWindowDimensions();

    const route = useRoute();

    const { userDetails } = route?.params;

    const FB_ID = userDetails?.fb_id;

    const participateRef = useRef<BottomSheetModal>(null);

    const { fetchWalletHistory, walletHistoryData } = WalletStore(state => ({
        walletHistoryLoading: state.walletHistoryLoading,
        walletHistoryData: state.walletHistoryData,
        fetchWalletHistory: state.fetchWalletHistory,
    }));

    useEffect(() => {
        fetchWalletHistory(FB_ID);
    }, [FB_ID]);

    console.log('walletHistoryData', walletHistoryData);

    const styles = getStyles();
     const Theme = useThemeStyles(styleCreator);

        const [isDark, setIsDark] = useState('');

        useEffect(() => {
            const savedTheme = async () => {
                const theme = await AsyncStorage.getItem(StorageKey.$THEME);
                console.log('theme', theme);

                if (theme) {
                    setIsDark(theme === 'dark');
                }
            };
            savedTheme();
        }, []);


             const handleCall = () => {
                 const phoneNumber = '+919872073558';
                 Linking.openURL(`tel:${phoneNumber}`);
             };

             const handleEmail = () => {
                 const email = 'Support@hithot.live';
                 Linking.openURL(`mailto:${email}`);
             };


    const [ShowPopup, HidePopup] = useState(false);


      const PopupManage = () => {
          if (ShowPopup) {
              HidePopup(false);
          } else {
              HidePopup(true);
          }
      };

    return (
        <BottomSheetModalProvider>
            <View
                style={[
                    styles.Container,
                    { backgroundColor: Theme.ContainerColor.backgroundColor },
                ]}>
                <Header />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.ContentContainerStyle}>
                    <ActionDetails />
                    <HTEH OnPress={() => participateRef.current?.present()} />
                    <FAQ />
                </ScrollView>
                <Footer />
            </View>
            {/* bottom sheet */}
            <BottomSheetModal
                backdropComponent={props => (
                    <BottomSheetBackdrop
                        {...props}
                        disappearsOnIndex={-1}
                        appearsOnIndex={0}
                        onPress={() => participateRef.current?.close()}
                        opacity={0.8}
                    />
                )}
                keyboardBehavior="interactive"
                ref={participateRef}
                snapPoints={['75%']}
                handleIndicatorStyle={{
                    height: 4,
                    backgroundColor: Theme.ActionColor.backgroundColor,
                }}
                backgroundStyle={{
                    backgroundColor: Theme.ContainerColor.backgroundColor,
                }}
                handleStyle={{
                    backgroundColor: Theme.ContainerColor.backgroundColor,
                    borderTopRightRadius: 14,
                    borderTopLeftRadius: 14,
                    height: 24,
                    borderColor: 'transparent',
                }}>
                <BottomSheetScrollView
                    contentContainerStyle={{
                        backgroundColor: Theme.ContainerColor.backgroundColor,
                        paddingHorizontal: 24,
                    }}>
                    <View
                        style={[
                            localStyles.balanceContainer,
                            {
                                backgroundColor:
                                    Theme.ActionColor.backgroundColor,
                            },
                        ]}>
                        <Text
                            style={[
                                localStyles.hitsText,
                                {
                                    fontSize: RFValue(18),
                                    color: Theme.TextColor.color,
                                },
                            ]}>
                            HITS
                        </Text>
                        <Text
                            style={[
                                localStyles.balanceText,
                                {
                                    fontSize: RFValue(12),
                                    color: Theme.TextColor.color,
                                },
                            ]}>
                            Your balance: 0
                        </Text>
                    </View>
                    <Text
                        style={[
                            localStyles.mainText,
                            {
                                fontSize: RFValue(16),
                                color: Theme.TextColor.color,
                            },
                        ]}>
                        Now you can earn 200 diamonds on every video
                    </Text>
                    {[1, 2, 3].map((item, index) => (
                        <View style={localStyles.itemContainer} key={index}>
                            <View style={localStyles.itemNumberContainer}>
                                <Text
                                    style={[
                                        localStyles.itemNumber,
                                        { color: Theme.TextColor.color },
                                    ]}>
                                    {item}.
                                </Text>
                            </View>
                            <View style={localStyles.itemDescriptionContainer}>
                                <Text
                                    style={[
                                        localStyles.itemDescription,
                                        {
                                            fontSize: RFValue(12),
                                            color: Theme.TextColor.color,
                                        },
                                    ]}>
                                    Participate in HITHOT creator program and
                                    upload exclusive/fresh videos.
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={{ height: verticalScale(24) }}
                                onPress={() => {}}>
                                <LinearGradient
                                    colors={['#F7C900', '#EB853C']}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    style={localStyles.playButton}>
                                    <Text
                                        style={[
                                            localStyles.playButtonText,
                                            { fontSize: RFValue(12) },
                                        ]}>
                                        Play
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    ))}
                    <Text
                        style={[
                            localStyles.mainText,
                            {
                                fontSize: RFValue(16),
                                color: Theme.TextColor.color,
                            },
                        ]}>
                        Refer a friend
                    </Text>
                    {[1, 2].map((item, index) => (
                        <View style={localStyles.itemContainer} key={index}>
                            <View style={localStyles.itemNumberContainer}>
                                <Text
                                    style={[
                                        localStyles.itemNumber,
                                        { color: Theme.TextColor.color },
                                    ]}>
                                    {item}.
                                </Text>
                            </View>
                            <View style={localStyles.itemDescriptionContainer}>
                                <Text
                                    style={[
                                        localStyles.itemDescription,
                                        {
                                            fontSize: RFValue(12),
                                            color: Theme.TextColor.color,
                                        },
                                    ]}>
                                    {item === 1
                                        ? 'Share & win'
                                        : 'Refer HITHOT to your friend and earn 20 diamonds on every install.'}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={{ height: verticalScale(24) }}
                                onPress={() => {}}>
                                <LinearGradient
                                    colors={['#F7C900', '#EB853C']}
                                    start={{ x: 1, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    style={localStyles.playButton}>
                                    <Text
                                        style={[
                                            localStyles.playButtonText,
                                            { fontSize: RFValue(12) },
                                        ]}>
                                        Play
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    ))}
                    <View
                        style={[
                            localStyles.supportcontainer,
                            {
                                backgroundColor: isDark
                                    ? '#2D343B'
                                    : Theme.ActionColor.backgroundColor,
                                borderTopStartRadius: 10,
                                borderTopEndRadius: 10,
                                overflow: 'hidden',
                            },
                        ]}>
                        <View style={{ width: '20%', alignSelf: 'center' }}>
                            <Image
                                style={{ width: 54, height: 54 }}
                                source={require('../../assets/walletfooter.png')}
                            />
                        </View>
                        <View style={{ width: '78%', alignSelf: 'center' }}>
                            <Text
                                style={{
                                    color: Theme.TextColor.color,
                                    fontWeight: 'bold',
                                }}>
                                Your dedicated support partner, here to assist
                                you every step of the way
                            </Text>
                        </View>
                    </View>
                    <View
                        style={[
                            localStyles.supportcontainer,
                            {
                                backgroundColor: isDark
                                    ? Theme.ActionColor.backgroundColor
                                    : 'black',
                                borderBottomStartRadius: 10,
                                borderBottomEndRadius: 10,
                            },
                        ]}>
                        <TouchableOpacity
                            style={[localStyles.IconAndSubTitleContainer]}
                            onPress={() => handleCall()}>
                            <View style={[localStyles.IconContainer]}>
                                <Image
                                    source={require('../../assets/whitephone.png')}
                                    resizeMode={'contain'}
                                    style={[
                                        localStyles.Icon,
                                        {
                                            tintColor: isDark
                                                ? Theme.IconColor.tintColor
                                                : '#ffff',
                                        },
                                    ]}
                                />
                            </View>
                            <View style={[localStyles.SubTitleContainer]}>
                                <Text
                                    style={[
                                        localStyles.SubTitle,
                                        {
                                            color: isDark
                                                ? Theme.TextColor.color
                                                : '#ffff',
                                        },
                                    ]}>
                                    {'+91 9872073558'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[localStyles.IconAndSubTitleContainer]}
                            onPress={() => handleEmail()}>
                            <View style={[localStyles.IconContainer]}>
                                <Image
                                    source={require('../../assets/whiteemail.png')}
                                    resizeMode={'contain'}
                                    style={[
                                        localStyles.Icon,
                                        {
                                            tintColor: isDark
                                                ? Theme.IconColor.tintColor
                                                : '#fff',
                                        },
                                    ]}
                                />
                            </View>
                            <View style={[localStyles.SubTitleContainer]}>
                                <Text
                                    style={[
                                        localStyles.SubTitle,
                                        {
                                            color: isDark
                                                ? Theme.TextColor.color
                                                : '#fff',
                                        },
                                    ]}>
                                    {'Support@hithot.live'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={localStyles.purchaseButton}
                        onPress={() => PopupManage()}>
                        <LinearGradient
                            colors={['#F7C900', '#EB853C']}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={localStyles.purchaseButtonGradient}>
                            <Text
                                style={[
                                    localStyles.purchaseButtonText,
                                    { fontSize: RFValue(14) },
                                ]}>
                                Purchase hits
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </BottomSheetScrollView>
                {ShowPopup && <Popup />}
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

const localStyles = StyleSheet.create({
    balanceContainer: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 8,
    },
    hitsText: {
        color: 'white',
        fontWeight: 'bold',
    },
    balanceText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontFamily: 'sans-serif',
    },
    mainText: {
        color: 'white',
        fontWeight: 'bold',
        marginVertical: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 12,
    },
    itemNumberContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 8,
        paddingHorizontal: 4,
    },
    itemNumber: {
        color: 'white',
        fontFamily: 'sans-serif',
    },
    itemDescriptionContainer: {
        flex: 1,
    },
    itemDescription: {
        color: 'white',
        fontFamily: 'sans-serif',
    },
    playButton: {
        borderRadius: 10,
        width: '100%',
        paddingVertical: 4,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    purchaseButton: {
        width: '100%',
        marginTop: 16,
    },
    purchaseButtonGradient: {
        borderRadius: 10,
        width: '100%',
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purchaseButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    IconAndSubTitleContainer: {
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    IconContainer: {
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    Icon: {
        width: 20,
        height: 20,
    },
    SubTitleContainer: {
        marginLeft: 8,
        alignItems: 'flex-end',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    SubTitle: {
        textAlign: 'right',
        fontSize: 14,
        fontFamily: 'Figtree-Regular',
        color: '#FFFFFF',
    },
    supportcontainer: {
        // borderWidth: 1,
        // borderColor: 'red',
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        // borderRadius: 5,
       
    },
});

export default WalletScreen;

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
