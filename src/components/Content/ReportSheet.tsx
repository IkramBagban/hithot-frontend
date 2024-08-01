import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from '../../theme/Colors';
import { Images } from '../../theme/Images';
import { useContentStore } from '../../store/contentStore';

const reportOptions = [
    { id: '1', reportText: 'I just don’t like it' },
    { id: '2', reportText: 'It’s spam' },
    { id: '3', reportText: 'Nudity or sexual activity' },
    { id: '4', reportText: 'Hate speech or symbols' },
    { id: '5', reportText: 'Violence or dangerous organisations' },
    { id: '6', reportText: 'False information' },
    { id: '7', reportText: 'Bullying or harassment' },
    { id: '8', reportText: 'Scam or fraud' },
    { id: '9', reportText: 'Intellectual property violation' },
    { id: '10', reportText: 'Suicide or self-injury' },
    { id: '11', reportText: 'Sale of illegal or regulated goods' },
];

const ReportOption: React.FC = ({ option, onPress }) => (
    <>
    <TouchableOpacity
        onPress={() => {
            onPress && onPress();
        }}
        style={styles.optionItem}>
        <Text style={styles.optionName}>{option.reportText}</Text>
    </TouchableOpacity>
    <View style={styles.line}/>
    </>
);

interface MusicSheetProps {
    onSongPress?: () => void;
}
const ReportSheet: React.FC = ({ onSongPress }: MusicSheetProps) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const { showReportSheet, toggleReportSheet,toggleReportSuccess } = useContentStore();

    useEffect(() => {
        if (showReportSheet) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [showReportSheet]);

    const handleSongPress = () => {
        toggleReportSheet();
        toggleReportSuccess();
        onSongPress && onSongPress();
    };
    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={['90%']}
            enablePanDownToClose
            handleIndicatorStyle={{ backgroundColor: Colors.grey }}
            backgroundStyle={{ backgroundColor: Colors.primaryColor }}
            handleStyle={styles.sheetHandleStyle}
            onClose={() => showReportSheet && toggleReportSheet()}>
            <View style={styles.container}>
                <Text style={styles.sheetTitle}>{`Report`}</Text>
                <Text
                    style={
                        styles.reportQuestion
                    }>{`Why are you reporting this post?`}</Text>
                <Text
                    style={
                        styles.reportDetail
                    }>{`This is a comment written by User1. This is the comment, and only this section is comment.`}</Text>

                <FlatList
                    data={reportOptions}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.bottomSpace}
                    style={{ marginTop: 15 }}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    renderItem={({ item }) => (
                        <ReportOption option={item} onPress={handleSongPress} />
                    )}
                />
            </View>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.primaryColor,
    },
    sheetHandleStyle: {
        backgroundColor: Colors.primaryColor,
        overflow: 'hidden',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    sheetTitle: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Bold',
        fontSize: 20,
        marginBottom: 25,
    },
    reportQuestion: {
        color: Colors.primaryWhite,
        fontFamily: 'Figtree-Bold',
        fontSize: 20,
    },
    reportDetail: {
        color: 'rgba(255,255,255,0.8)',
        fontFamily: 'Figtree-Regular',
        fontSize: 14,
        textAlign: 'justify',
        marginTop: 10,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'rgba(255,255,255,0.12)',
        paddingVertical: 10,
    },
    line: {
        height: 0.8,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.12)',
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
        fontFamily: 'Figtree-Regular',
        color: Colors.primaryWhite,
    },
    bottomSpace: { paddingBottom: 40 },
});

export default ReportSheet;
