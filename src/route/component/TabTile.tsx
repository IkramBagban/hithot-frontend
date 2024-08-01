import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import React, { useEffect, useRef } from 'react';
import useThemeStyles from '../../hooks/useThemeStyles';
import * as Animatable from 'react-native-animatable';

interface Props {
    icon: ImageSourcePropType;
    iconSelected: ImageSourcePropType;
    tabProps: BottomTabBarButtonProps;
    title: string;
}

const TabTile: React.FC<Props> = ({ tabProps, icon, iconSelected, title }) => {
    const {accessibilityState} = tabProps
    const focused = accessibilityState?.selected;
    const viewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef?.current.animate({
                0: { scale: 0.5 },
                1: { scale: 1.4 },
            });
        } else {
            viewRef?.current.animate({
                0: { scale: 1.4 },
                1: { scale: 1 },
            });
        }
    }, [focused]);
    const styles = useThemeStyles(styleCreator)
    return (
        <TouchableOpacity
            {...tabProps}
            onPress={tabProps.onPress}
            // className={`flex flex-1 items-center justify-center py-2  `}
        >
            <Animatable.View
                ref={viewRef}
                duration={1000}
                className={`flex flex-1 items-center justify-center py-2  `}>
                {title === 'Post' ? (
                    <Image
                        source={icon}
                        resizeMode="contain"
                        style={{
                            height: 95,
                            width: 95,
                            resizeMode: 'contain',
                            bottom: 5,
                        }}
                        // className=" w-10 h-10"
                    />
                ) : tabProps.accessibilityState?.selected ? (
                    <Image
                        source={iconSelected}
                        resizeMode="contain"
                        className=" w-5 h-5 mb-1"
                        style={styles.tabIconColor}
                    />
                ) : (
                    <Image
                        source={icon}
                        resizeMode="contain"
                        className=" w-5 h-5 mb-1"
                        style={styles.inActiveTabIconColor}
                    />
                )}
            </Animatable.View>
        </TouchableOpacity>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        tabIconColor: { tintColor: colors.activeTabIconColor },
        inActiveTabIconColor: { tintColor: colors.inActiveTabIconColor },
    });
export default TabTile;
