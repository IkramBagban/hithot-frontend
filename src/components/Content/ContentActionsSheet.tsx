import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useEffect, useRef } from 'react';
import BottomSheet, {
    BottomSheetFlatList,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Colors } from '../../theme/Colors';
import { Images } from '../../theme/Images';
import { useContentStore } from '../../store/contentStore';
import { useNavigation } from '@react-navigation/native';
import { STACK } from '../../route';
import { ContentType } from '../../constants';
import { useProfileStore } from '../../store/UserProfileStore';
import { Gifs } from '../../theme/Gifs';
import useThemeStyles from '../../hooks/useThemeStyles';

const ContentActionsSheet = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const { showSheet, toggleShowSheet, toggleSubscribeModel,enableCreateContent } =
        useContentStore();
    const { profileData } = useProfileStore();
    const navigation = useNavigation();
    const styles = useThemeStyles(styleCreator);

    useEffect(() => {
        if (showSheet) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [showSheet]);

    const contentActions = [
        {
            text: 'Image',
            icon: Gifs.postGif,
            type: ContentType.POST,
            isPremium: false,
            onPress: () => {},
        },
        {
            text: 'Short',
            icon: Gifs.shortsGif,
            type: ContentType.SHORT,
            isPremium: false,
            onPress: () => {},
        },
        {
            text: 'Go live',
            icon: Gifs.goLiveGif,
            type: ContentType.GO_LIVE,
            isPremium: false,
            onPress: () => {},
        },
        {
            text: 'Clip',
            icon: Gifs.clipGif,
            type: ContentType.CLIP,
            isPremium: true,
            onPress: () => {},
        },
    ];
    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={['35%']}
            index={-1}
            backgroundStyle={styles.backgroundStyle}
            handleIndicatorStyle={{ height: 3, backgroundColor: Colors.grey }}
            enablePanDownToClose
            onClose={() => showSheet && toggleShowSheet()}>
            <BottomSheetView style={styles.contentContainer}>
                <BottomSheetFlatList
                    data={contentActions}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    if (profileData?.hasSubscription) {
                                    } else {
                                        if (item.isPremium) {
                                            toggleShowSheet();
                                            toggleSubscribeModel();
                                            return;
                                        }
                                    }
                                    // console.log('pressed');
                                    toggleShowSheet();
                                    navigation.navigate(STACK.CreateContent, {
                                        type: item.type,
                                    });
                                    item?.onPress();
                                }}
                                style={[
                                    styles.rowNCenter,
                                    styles.bottomMargin,
                                    styles.spaceBtw,
                                ]}>
                                <BottomSheetView style={styles.rowNCenter}>
                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}>
                                        <Image
                                            source={item.icon}
                                            style={{
                                                height: 40,
                                                width: 40,
                                                resizeMode: 'contain',
                                            }}
                                        />
                                    </View>
                                    <Text style={styles.actionText}>
                                        {item.text}
                                    </Text>
                                </BottomSheetView>
                                {item.isPremium && (
                                    <BottomSheetView style={styles.rowNCenter}>
                                        <Image
                                            source={Images.crownIcon}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                resizeMode: 'contain',
                                                marginRight: 5,
                                            }}
                                        />
                                        <Text style={styles.premiumText}>
                                            Premium members only
                                        </Text>
                                    </BottomSheetView>
                                )}
                            </TouchableOpacity>
                        );
                    }}
                />
            </BottomSheetView>
        </BottomSheet>
    );
};
const styleCreator = colors =>
    StyleSheet.create({
        contentContainer: {
            flex: 1,
            paddingHorizontal: 15,
        },
        rowNCenter: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        bottomMargin: { marginBottom: 18 },
        spaceBtw: { justifyContent: 'space-between' },
        actionText: {
            color: colors.textColor,
            fontFamily: 'Figtree-Medium',
        },
        premiumText: {
            color: Colors.dullWhite,
            fontFamily: 'Figtree-Regular',
            fontSize: 14,
        },
        backgroundStyle: { backgroundColor: colors.bgColor },
    });

export default ContentActionsSheet;
