import { Dimensions, StyleSheet } from "react-native";

   const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#21262B',
        // Add other styles as needed
    },
    circle: {
        position: 'absolute',
        width: 600,
        height: 640,
        borderRadius: 300,
        backgroundColor: '#303336', // light color
        top: 100,
        // left: WIDTH / 2 - 100,
        zIndex: -1,
        alignSelf: 'center',
    },
    subcontainer: {
        //   borderWidth: 1,
        //   borderColor: 'red',
        width: '90%',
        alignSelf: 'center',
    },
    detailssubcontainer: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#4B545E',
        padding: 10,
        borderRadius: 5,
    },
    ImageContainer: {
        width: '90%',
        //   borderWidth: 1,
        //   borderColor:'red'
    },
    image: {
        // borderWidth: 1,
        // borderColor:'red',
        width: '20%',
    },
    HeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    AllDetails: {
        //   borderWidth: 1,
        //   borderColor: 'red',
        marginTop: 10,
    },
    DetailsImageContainer: {
        width: 40,
        height: 40,
        //   alignSelf: 'center',
    },
    Detailsimage: {
        width: 40,
        height: 40,
    },
    DetailsTextContainer: {
        width: '100%',
        paddingLeft: 10,
    },
    DetailsText: {
        fontSize: 14,
        //   fontWeight: 'bold',
        color: 'white',
    },
    PackageDetailsContainer: {
        // width: '30%',
        width: WIDTH / 3.76,
        paddingVertical: 14,
        // marginRight: 14,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'red',
    },
    DurationContainer: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    Duration: {
        fontSize: 20,
        fontFamily: 'Figtree-Bold',
        color: '#FFFFFF',
    },
    DurationDaysContainer: {
        width: '90%',
        paddingVertical: 2,
        alignSelf: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    DurationDays: {
        fontSize: 18,
        fontFamily: 'Figtree-Medium',
        color: '#FFFFFF',
    },
    DurationTitleContainer: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    DurationTitle: {
        fontSize: 14,
        fontFamily: 'Figtree-Regular',
        color: '#FFFFFF',
    },
    BenefitContainer: {
        width: '90%',
        paddingTop: 14,
        alignSelf: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    Benefit: {
        fontSize: 14,
        fontFamily: 'Figtree-Regular',
        color: '#FFFFFF',
    },
    PlansContentContainerStyle: {
        // width: '0%',
        // paddingLeft: WIDTH / 18,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    PlansContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    PlansHeaderContainer: {
        width: '90%',
        paddingBottom: 14,
        alignSelf: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    PlansHeader: {
        fontSize: 20,
        fontFamily: 'Figtree-Bold',
        color: '#FFFFFF',
    },
});

export default styles;