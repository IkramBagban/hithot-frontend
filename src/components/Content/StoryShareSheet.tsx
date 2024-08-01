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
import LinearGradient from 'react-native-linear-gradient';

const StoryShareSheet = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const {
        showShareStorySheet,
        toggleShowShareStorySheet,
        toggleSendStorySheet,
    } = useContentStore();
    const navigation = useNavigation();

    useEffect(() => {
        if (showShareStorySheet) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [showShareStorySheet]);

    const shareActions = [
        {
            text: 'Your Story',
            icon: Images.imageActionIcon,
            hasMore: false,
            onPress: () => {},
        },
        {
            text: 'Message',
            icon: Images.chatIcon,
            hasMore: true,
            onPress: () => {
                toggleSendStorySheet();
            },
        },
    ];
    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={['35%']}
            index={-1}
            backgroundStyle={{ backgroundColor: Colors.primaryColor }}
            handleIndicatorStyle={{ height: 3, backgroundColor: Colors.grey }}
            enablePanDownToClose
            onClose={() => showShareStorySheet && toggleShowShareStorySheet()}>
            <BottomSheetView style={styles.contentContainer}>
                <Text style={styles.shareTitle}>{`Share`}</Text>
                <BottomSheetFlatList
                    data={shareActions}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    // console.log('pressed');
                                    toggleShowShareStorySheet();
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
                                            height: 34,
                                            width: 34,
                                            borderRadius: 6,
                                            backgroundColor:
                                                'rgba(255,255,255,0.2)',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginRight: 10,
                                        }}>
                                        <Image
                                            source={item.icon}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                resizeMode: 'contain',
                                            }}
                                        />
                                    </View>
                                    <Text style={styles.actionText}>
                                        {item.text}
                                    </Text>
                                </BottomSheetView>
                                {item.hasMore && (
                                    <BottomSheetView style={styles.rowNCenter}>
                                        <Image
                                            source={Images.leftExpandIcon}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                resizeMode: 'contain',
                                                marginRight: 5,
                                            }}
                                        />
                                    </BottomSheetView>
                                )}
                            </TouchableOpacity>
                        );
                    }}
                    ListFooterComponent={() => (
                        <TouchableOpacity
                            style={{
                                alignSelf: 'center',
                                marginTop: 20,
                                width: '100%',
                            }}
                            onPress={() => {}}>
                            <LinearGradient
                                colors={[Colors.gradient1, Colors.gradient2]}
                                style={styles.postOptionButton}>
                                <Text style={styles.selectedText}>
                                    {'Share'}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    )}
                />
            </BottomSheetView>
        </BottomSheet>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    rowNCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomMargin: { marginBottom: 15 },
    spaceBtw: { justifyContent: 'space-between' },
    actionText: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Medium',
    },
    postOptionButton: {
        height: 54,
        width: '100%',
        padding: 10,
        borderRadius: 8,
        backgroundColor: Colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedText: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Medium',
        textTransform: 'capitalize',
    },
    shareTitle: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Bold',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 15,
    },
});

export default StoryShareSheet;
