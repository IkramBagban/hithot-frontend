import { Dimensions, StyleSheet } from 'react-native';
import useThemeStyles from '../../../../hooks/useThemeStyles';
import { scale } from 'react-native-size-matters';

const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 14,
    },
    subcontainer: {
        width: '90%',
        paddingVertical: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    imagecontainer: {
        width: '10%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    image: {
        width: 18,
        height: 18,
    },
    walletcontainer: {
        width: '54%',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    wallettxt: {
        fontSize: 16,
        fontFamily: 'Figtree-Regular',
    },
    walletbalancetxt: {
        width: '36%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    walletcontainer2: {
        width: '36%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    wallettxt2: {
        fontSize: 18,
        fontFamily: 'Figtree-Bold',
    },
    storycontainer: {
        width: '90%',
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
    creatorContainer: {
        width: '100%',
        marginBottom: 6,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    creatorsubcontainer: {
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    accountreachcontainer: {
        width: '56%',
        flexDirection: 'column',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    acountreachtxt: {
        fontSize: 16,
        fontFamily: 'Figtree-Regular',
    },
    accountreachedcount: {
        fontSize: 18,
        fontFamily: 'Figtree-Bold',

        // opacity: 0.6,
    },
    seedashboardcontainer: {
        width: '36%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    dashboardiconcontainer: {
        width: '6%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    editprofilebtncontainer: {
        width: '100%',
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editprofiletxtcontainer: {
        width: scale(150),
        paddingVertical: 10,
        borderRadius: 8,
    },
    badgetscontainer: {
        width: '90%',
        marginTop: 14,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    badgettxt: {
        fontSize: 18,
        fontFamily: 'Figtree-Bold',
    },
    scrollViewContainer: {
        flexDirection: 'row',
        paddingHorizontal: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Example background color with opacity
        marginTop: 4,
    },
    actionItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4,
        marginHorizontal: 4,
    },
    actionItemInner: {
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Example background color with opacity
    },
    actionImage: {
        width: 26,
        height: 26,
    },
    actionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 2,
    },
    bottomSheetContainer: {
        flex: 1,
        position: 'relative',
    },
    headerContainer: {
        paddingHorizontal: 6,
        backgroundColor: '#21262B',
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'Font-BoldB',
        color: 'white',
        marginBottom: 4,
    },
    searchContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 4,
        marginBottom: 8,
    },
    searchTextInput: {
        flex: 1,
        fontSize: 14,
        color: 'white',
        fontFamily: 'Font-Sans',
    },
    favouritesText: {
        fontSize: 18,
        fontFamily: 'Font-BoldB',
        color: 'white',
        marginBottom: 8,
    },
    circleProfileContainer: {
        paddingHorizontal: 6,
        backgroundColor: '#21262B',
        marginTop: 2,
    },
    circleProfileScrollView: {
        flexDirection: 'row',
        paddingLeft: 6,
        backgroundColor: '#21262B',
    },
    badgescrollViewContainer: {
        marginTop: 14,
        paddingLeft: WIDTH / 18, // Assuming WIDTH is defined somewhere
        flexDirection: 'row', // Ensures horizontal scrolling
    },
    badgeContainer: {
        width: WIDTH / 3.8, // Adjust as per your design
        marginRight: 14,
        // Add additional styles if needed
    },
    badgeImageContainer: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeImage: {
        width: 88,
        height: 88,
        alignSelf: 'center',
    },
    badgeTextContainer: {
        width: '60%',
        marginTop: 34,
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
    },
    badgeText: {
        fontSize: 16,
        fontFamily: 'Figtree-Bold',
        color: '#FFFFFF',
    },
    smallBadgeContainer: {
        bottom: 0,
        position: 'absolute',
        alignSelf: 'center',
    },
    smallBadgeBackground: {
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000,
        backgroundColor: '#FFFFFF',
    },
    smallBadgeImage: {
        width: 18,
        height: 18,
    },
    badgeLabelContainer: {
        width: '100%',
        marginTop: 6,
        alignItems: 'center',
    },
    badgeLabel: {
        fontSize: 14,
        fontFamily: 'Figtree-Regular',
        // color: Theme.TextColor.color, // Replace with actual theme color
    },
    renderitemcontainer: {
        width: '90%',
        marginBottom: 14,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconContainer: {
        width: '14%',
        justifyContent: 'center',
    },
    icon: {
        height: 40,
        justifyContent: 'center',
    },
    textContainer: {
        width: '84%',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    titleText: {
        fontSize: 16,
        fontFamily: 'Figtree-Bold',
        color: '#FFFFFF',
    },
    subtitleText: {
        fontSize: 14,
        fontFamily: 'Figtree-Regular',
        color: '#FFFFFF',
        opacity: 0.6,
    },
});

export default styles;
