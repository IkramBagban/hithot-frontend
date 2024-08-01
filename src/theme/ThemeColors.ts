import { Colors } from './Colors';

/*
    Please ensure that all colors used in the app are selected from the Colors.ts file and follow the rgba format for consistency,
    as this app's design primarily uses that format.

    Meaningfull names can reduce time and increase code readability...

    Please go through Colors.ts file once. 

    ================ How to make your design theme bounded ================
    - First convert naitve wind code to StyleSheet. This is needed step.
    - Create a style creator function that accepts all the theme colors as parameter(mentiond below) 
    - Pass that styleCreator to useThemeStyles hook which returns an theme binded styles 

    Please refer ContentActionsSheet.tsx for better understanding.  

    Thanks! :)
*/

// 🌞
export const lightThemeColors = {
    bgColor: Colors.primaryWhite,
    textColor: Colors.primaryBlack,
    activeTabIconColor: Colors.primaryBlack,
    inActiveTabIconColor: Colors.lightInActiveTab,
    bgLightColor: '#EDEEEE',
    textLightColor: '#7A7D80',
    iconColor: '#21262B',

    //Categories
    activeContainerColor: Colors.smokeWhite,
    inActiveContainerColor: Colors.darkWhite,
    activeBorderColor: Colors.primaryBlack,
    inactiveBorderColor: Colors.primaryWhite,

    searchBoxColor: Colors.darkWhite,

    storyContainerColor: Colors.black14,

    //HomeScreen
    uploadBg: Colors.primaryWhite,

    //feedColor
    feedBgColor: Colors.white40,
    lightTextColor: Colors.black60,
    topButtonColor: Colors.black20,

    //ActionButtonColors
    containersColor: Colors.lighterGray,
    subContainerColor: null,

    // Auth section
    inputBoxBg: Colors.primaryWhite,
    inputBorderColor: Colors.primaryBlack,
    inputTitle: Colors.primaryBlack,
    placeholderColor: Colors.primaryColor,
    bgImageGradient: [
        'rgba(255,255,255,0)',
        'rgba(255,255,255,0.6)',
        'rgba(255,255,255,1)',
    ],
};

// 🌙
export const darkThemeColors = {
    bgColor: Colors.primaryColor,
    textColor: Colors.primaryWhite,
    activeTabIconColor: Colors.primaryWhite,
    inActiveTabIconColor: Colors.primaryWhite,
    bgLightColor: '#4B545E',
    textLightColor: '#B1B5B9',
    iconColor: '#FFFFFF',

    //Categories
    activeContainerColor: Colors.darkSteelGray,
    inActiveContainerColor: Colors.primaryColor,
    activeBorderColor: Colors.primaryWhite,
    inactiveBorderColor: Colors.charcoalGray,

    searchBoxColor: Colors.dullBlack,

    storyContainerColor: Colors.white14,

    //HomeScreen
    uploadBg: Colors.primaryBlack,

    //feedColor
    feedBgColor: Colors.black40,
    lightTextColor: Colors.white60,
    topButtonColor: Colors.white20,

    //ActionButtonColors
    containersColor: Colors.metalGray,
    subContainerColor: Colors.charcoalGray,

    // Auth section
    inputBoxBg:Colors.white14,
    inputBorderColor: Colors.white14,
    inputTitle:Colors.white60,
    placeholderColor:Colors.white60,
    bgImageGradient:[
        'rgba(33,38,43,0)',
        'rgba(33,38,43,0.2)',
        'rgba(33,38,43,1)',
    ]
};
