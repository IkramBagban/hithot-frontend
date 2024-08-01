import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { Colors } from '../../theme/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useThemeStyles from '../../hooks/useThemeStyles';

const TagPeople = () => {
    const [input, setInput] = useState<string>('');
    const { top } = useSafeAreaInsets();
    const styles = useThemeStyles(styleCreator);

    // Sample data for users
    const users = [
        {
            id: 1,
            name: 'UG_Ikram',
            displayName: 'Rainbow',
            avatar: 'https://via.placeholder.com/50',
        },
        {
            id: 2,
            name: 'John_Doe',
            displayName: 'Sunshine',
            avatar: 'https://via.placeholder.com/50',
        },
        {
            id: 3,
            name: 'Jane_Smith',
            displayName: 'Moonlight',
            avatar: 'https://via.placeholder.com/50',
        },

    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.userContainer}
            onPress={() => console.log('item', item)}>
            {/* <Image source={{ uri: item.avatar }} style={styles.avatar} /> */}
            <StatusBar
                backgroundColor={Colors.dullGrey}
                barStyle="light-content"
            />
            <Image
                source={{
                    uri: 'https://th.bing.com/th/id/OIP.M5nx2ghAtXWr6ocfbG5CWQHaHa?rs=1&pid=ImgDetMain',
                }}
                style={styles.avatar}
            />
            <View style={styles.userInfo}>
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.displayName}>{item.displayName}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={[styles.container, { paddingTop: top }]}>
            <TextInput
                style={styles.input}
                placeholder="Tag people"
                value={input}
                onChangeText={setInput}
                placeholderTextColor={Colors.dullWhite}
            />
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bgColor,
        },
        input: {
            borderRadius: 8,
            padding: 10,
            marginVertical: 20,
            fontSize: 16,
            backgroundColor: colors.searchBoxColor,
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
            marginHorizontal: 10,
        },
        listContainer: {
            paddingHorizontal: 10,
        },
        userContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            // backgroundColor: Colors.secondaryColor,
            borderRadius: 8,
            marginVertical: 5,
        },
        avatar: {
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 1,
            borderColor: colors.activeContainerColor,
            marginRight: 10,
        },
        userInfo: {
            flex: 1,
        },
        username: {
            fontSize: 16,
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
        },
        displayName: {
            fontSize: 14,
            color: Colors.dullGrey,
            fontFamily: 'Figtree-Regular',
        },
    });

export default TagPeople;
