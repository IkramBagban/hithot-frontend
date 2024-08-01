import React from 'react';
import { View } from 'react-native';
import Svg, {
    Text as SvgText,
    Defs,
    LinearGradient,
    Stop,
    Mask,
    Rect,
} from 'react-native-svg';

const GradientText = ({ text, gradientColors }) => {
    return (
        <Svg height="32" width="94">
            <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                    <Stop
                        offset="0"
                        stopColor={gradientColors[0]}
                        stopOpacity="1"
                    />
                    <Stop
                        offset="1"
                        stopColor={gradientColors[1]}
                        stopOpacity="1"
                    />
                </LinearGradient>
                <Mask id="mask" x="0" y="0" width="100%" height="100%">
                    <SvgText
                        x="50%"
                        y="50%"
                        dy=".35em"
                        fill="white"
                        fontSize="16"
                        fontWeight="bold"
                        textAnchor="middle">
                        {text}
                    </SvgText>
                </Mask>
            </Defs>
            <Rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#grad)"
                mask="url(#mask)"
            />
        </Svg>
    );
};

export default GradientText;
