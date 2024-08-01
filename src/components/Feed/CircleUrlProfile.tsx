import React from 'react';
import {
    Image,
    ImageSourcePropType,
    TouchableOpacity,
    View,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
interface Props {
    url: string;
    width?: number;
    height?: number;
    onPress: () => void;
}

const CircleUrlProfile: React.FC<Props> = ({ url, width, height, onPress }) => {
    // console.log('Circle profile uli', url);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
                width: scale(width || 32),
                height: verticalScale(height || 32),
                borderRadius: scale(14),
                position: 'relative',
            }}
            className="overflow-hidden ">
            <Image
                source={{ uri: url }}
                resizeMode="cover"
                style={{
                    width: '100%', // Fill the view's width
                    height: '100%', // Fill the view's height
                }}
            />
        </TouchableOpacity>
    );
};

export default CircleUrlProfile;
