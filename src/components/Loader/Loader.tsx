import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '../../theme/Colors';
import useThemeStyles from '../../hooks/useThemeStyles';

type LoaderProps = {
    isLoading: boolean;
    loaderContainer?: {};
    containerStyle?: {};
};
const Loader = ({
    isLoading,
    loaderContainer = {},
    containerStyle = {},
}: LoaderProps) => {
    const styles = useThemeStyles(styleCreator);
    return isLoading ? (
        <View style={[styles.loaderContainer, containerStyle]}>
            <View style={[styles.indicator, loaderContainer]}>
                <ActivityIndicator
                    size={'large'}
                    animating={isLoading}
                    color={Colors.primaryYellow}
                />
            </View>
        </View>
    ) : null;
};

const styleCreator = colors =>
    StyleSheet.create({
        loaderContainer: {
            zIndex: 1,
            height: '100%',
            width: '100%',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'rgba(255,255, 255, 0.3)',
        },
        indicator: {
            height: 40,
            width: 40,
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
    });

export default Loader;
