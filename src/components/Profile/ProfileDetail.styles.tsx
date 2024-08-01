import { Dimensions, StyleSheet } from 'react-native';
import useThemeStyles from '../../hooks/useThemeStyles';
import { scale } from 'react-native-size-matters';

const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // marginBottom: 14,
    },
    subcontainer: {
        width: '90%',
        // paddingVertical: 8,
        alignSelf: 'center',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    storycontainer: {
        // width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilepiccontainer: {
        width: 82,
        marginBottom: 14,
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    profilesubcontainer: {
        width: 76, // Adjust the size of the icon
        height: 76,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    profileimage: {
        borderRadius: 1000,
        borderWidth: 2,
        borderColor: '#21262B',
    },
    profileverified: {
        width: 22, // Adjust the size of the icon
        height: 22,
        right: 0,
        bottom: 6, // Adjust this value to position the icon correctly
        borderRadius: 100,
        position: 'absolute',
        zIndex: 1,
    },
    statsContainer: {
        flex: 1, // Fills remaining space
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 16, // Equivalent to ml-6 (assuming margin units are in pixels)
        paddingVertical: 16, // Equivalent to py-4 (assuming padding units are in pixels)
    },
    startItem: {
        paddingVertical: 8, // Equivalent to py-2 (assuming padding units are in pixels)
        paddingHorizontal: 16, // Equivalent to px-3 (assuming padding units are in pixels)
        flex: 1, // Makes the element fill available space (optional, depending on layout)
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        // marginBottom:8,
        // Assuming this style applies to elements with this class
        display: 'flex', // Assuming flexbox is not set on a parent element
        flexDirection: 'row', // Default value, arranges items horizontally
        alignItems: 'flex-start', // Aligns child elements at the top
    },
});

export default styles