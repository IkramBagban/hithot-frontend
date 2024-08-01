import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import useThemeStyles from '../../hooks/useThemeStyles';

const MentionUser = () => {
    const [showMentionInput, setShowMentionInput] = useState(false);
    const [mentionText, setMentionText] = useState<string>('');
    const styles = useThemeStyles(styleCreator);

    const handleTextChange = (text: String) => {
        console.log('text: ', text);
        setMentionText(text);
    };

    return (
        <View>
            <TextInput
                style={styles.mentionTextInput}
                value={mentionText}
                onChangeText={handleTextChange}
                placeholder="Mention someone..."
            />
        </View>
    );
};

export default MentionUser;

const styleCreator = colors =>
    StyleSheet.create({
        draggableContainer: {
            padding: 8,
            backgroundColor: 'white',
            borderRadius: 4,
        },

        mentionTextInput: {
            // flex: 1,
            // borderColor:

            borderWidth: 1,
            padding: 8,
            borderRadius: 4,
            color: colors.textColor,
            backgroundColor: colors?.bgColor,
        },
    });
