import React from 'react';
import {
    Image,
    ImageSourcePropType,
    TouchableOpacity,
    View,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface Props {
    url: ImageSourcePropType;
    width?: number;
    height?: number;
    onPress: () => void;
}

const CircleProfile: React.FC<Props> = ({ url, width, height, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
                width: scale(width || 32),
                height: verticalScale(height || 32),
            }}
            className="overflow-hidden rounded-full ">
            <Image
                source={url}
                resizeMode="cover"
                style={{
                    width: scale(width || 32),
                    height: verticalScale(height || 32),
                }}
            />
        </TouchableOpacity>
    );
};

export default CircleProfile;
