import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../route/MainStack';
const Enterpage = () => {
    const navigation = useNavigation<StackNavigationType>();

    return (
        <View>
            <TouchableOpacity
                style={{ padding: 15, backgroundColor: 'green' }}
                onPress={() => {
                    navigation.navigate('Tutorial');
                }}>
                <Text>Enter the app</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Enterpage;

const styles = StyleSheet.create({});
