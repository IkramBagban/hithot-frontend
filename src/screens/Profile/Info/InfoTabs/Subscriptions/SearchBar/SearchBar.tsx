import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import getStyles from './SearchBar.style'; // Saparate Style //

// Send Props //

interface Props {
    OnChangeText: any;
}

const SearchBar: React.FC<Props> = ({ OnChangeText }) => {
    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <View style={styles.IconAndInputContainer}>
                    <View style={[styles.IconContainer]}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../../../../../assets/SearchIc.png')}
                                resizeMode="contain"
                                style={styles.Icon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.InputContainer}>
                        <TextInput
                            placeholder={'Search'}
                            placeholderTextColor={'#FFFFFF'}
                            style={styles.TextInput}
                            onChangeText={OnChangeText}
                        />
                    </View>
                </View>
            </View>
        </>
    );
};

export default SearchBar;
