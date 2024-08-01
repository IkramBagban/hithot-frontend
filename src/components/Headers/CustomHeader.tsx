import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import useThemeStyles from '../../hooks/useThemeStyles';
interface Props {
    HeaderIc?: ImageSourcePropType;
    title?: string;
    bgColor?: string;
    RightComp?: React.FC;
}
const CenterHeader: React.FC<Props> = ({
    title,
    HeaderIc,
    bgColor,
    RightComp,
    z,
}) => {
    const navigation = useNavigation();

    const styles = useThemeStyles(styleCreator);
    return (
        <View
            // style={{ backgroundColor: bgColor || '#21262B' }}
            style={styles.container}
            className={`w-full relative flex flex-row items-center justify-center  px-6 pb-1 pt-3`}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className=" w-6 h-6 flex items-start justify-center absolute left-6 top-4"
                style={styles.arrowContainer}>
                <Image
                    source={require('../../assets/WhiteArrow.png')}
                    resizeMode="contain"
                    className=" w-6 h-3"
                />
            </TouchableOpacity>

            {HeaderIc ? (
                <Image
                    source={HeaderIc}
                    resizeMode="contain"
                    className=" w-8 h-8"
                />
            ) : (
                <Text
                    style={styles.title}
                    // style={{ fontSize: RFValue(18) }}
                    // className={`text-white font-sans`}
                >
                    {title || ''}
                </Text>
            )}
            {RightComp ? (
                <View className=" absolute right-6 top-2">
                    <RightComp />
                </View>
            ) : null}
            {/* {RightComp && (
        <View className=''>
          <RightComp />
        </View>
      )} */}
        </View>
    );
};

export default CenterHeader;

const styleCreator = colors =>
    StyleSheet.create({
        container: {
            backgroundColor: colors.bgColor,
        },
        title: {
            color: colors.textColor,
            fontSize: RFValue(18),
            fontFamily: ' font-sans',
        },
        arrowContainer: {
            backgroundColor: colors.bgColor,
            // padding:1
        },
    });
