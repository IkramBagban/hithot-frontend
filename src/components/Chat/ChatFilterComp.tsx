import React = require('react');
import { Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const ChatFilterComp = () => {
    return (
        <TouchableOpacity>
            <Image
                source={require('../../assets/filter.png')}
                resizeMode="contain"
                style={{
                    width: scale(16),
                    height: verticalScale(16),
                }}
            />
        </TouchableOpacity>
    );
};

export default ChatFilterComp;
