import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from '../../theme/Colors';
import { Song, categories, songsData } from '../../constants';
import { Images } from '../../theme/Images';
import useVideoStore from '../../store/VideoStore';
import { useContentStore } from '../../store/contentStore';

const moreOptions = [
    {
        id: 1,
        text: `Why you're seeing this post`,
        icon: Images.blockUserIcon,
        onPress: () => {},
    },
    {
        id: 2,
        text: `About this account`,
        icon: Images.whiteCrownIcon,
        onPress: () => {},
    },
    {
        id: 3,
        text: `Report`,
        icon: Images.reportIcon,
        onPress: () => {},
    },
];

const ReelOptions: React.FC = ({ option, onPress }) => (
    <TouchableOpacity
        onPress={() => {
            onPress && onPress();
        }}
        style={styles.optionItem}>
        <View
            style={{
                height: 32,
                width: 32,
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
            }}>
            <Image source={option.icon} style={styles.songImage} />
        </View>
        <Text
            style={[
                styles.optionName,
                option.id === 3 && { color: '#D32836' },
            ]}>
            {option.text}
        </Text>
    </TouchableOpacity>
);
const SecondaryOptions: React.FC = ({ title, onPress, icon }) => (
    <TouchableOpacity
        onPress={() => {
            onPress && onPress();
        }}
        style={styles.secondaryBtns}>
        <Text style={styles.secOptionName}>{title}</Text>
        <Image source={icon} style={styles.songImage} />
    </TouchableOpacity>
);

const ReelMoreOptions: React.FC = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const { showMoreOptions, toggleMoreOptions } = useVideoStore();
    const { toggleReportSheet } = useContentStore();

    useEffect(() => {
        if (showMoreOptions) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [showMoreOptions]);

    const handleOptionPress = option => {
        toggleMoreOptions();
        if (option.id === 3) {
            toggleReportSheet();
        }
    };
    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={['45%']}
            enablePanDownToClose
            handleIndicatorStyle={{ backgroundColor: Colors.grey }}
            backgroundStyle={{ backgroundColor: Colors.primaryColor }}
            onClose={() => showMoreOptions && toggleMoreOptions()}>
            <View style={styles.container}>
                <View style={styles.rowNCenter}>
                    <Text style={styles.postActionTitle}>{`Post actions`}</Text>
                    <TouchableOpacity
                        onPress={toggleMoreOptions}
                        style={styles.notInterestedBtn}>
                        <Image
                            source={Images.eyeCutIcon}
                            style={styles.eyeCutIcon}
                        />
                        <Text
                            style={styles.notIntText}>{`Not interested`}</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={moreOptions}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    renderItem={({ item }) => (
                        <ReelOptions
                            option={item}
                            onPress={() => handleOptionPress(item)}
                        />
                    )}
                />
                <View style={styles.secondRow}>
                    <SecondaryOptions
                        title={`Save to collection`}
                        icon={Images.saveBookmarkIcon}
                    />
                    <SecondaryOptions
                        title={`Duplicate short`}
                        icon={Images.copyIcon}
                    />
                </View>
            </View>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.primaryColor,
        zIndex: 9999,
    },
    sheetHandleStyle: {
        backgroundColor: Colors.primaryColor,
        overflow: 'hidden',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    postActionTitle: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Bold',
        fontSize: 18,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    songImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    secondRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    optionName: {
        fontSize: 16,
        fontFamily: 'Figtree-Medium',
        color: Colors.primaryWhite,
        marginRight: 5,
    },
    secOptionName: {
        fontSize: 14,
        fontFamily: 'Figtree-Medium',
        color: Colors.primaryWhite,
        marginRight: 5,
    },
    secondaryBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.12)',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    notInterestedBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(255,255,255,0.12)',
        borderRadius: 25,
        borderWidth: 0.6,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    notIntText: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Regular',
        fontSize: 14,
    },
    rowNCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    eyeCutIcon: {
        height: 16,
        width: 16,
        resizeMode: 'contain',
        marginRight: 8,
    },
});

export default ReelMoreOptions;
