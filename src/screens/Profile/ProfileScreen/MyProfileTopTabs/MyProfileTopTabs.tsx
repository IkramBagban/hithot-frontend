// import { View, Text, Image } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import LinearGradient from 'react-native-linear-gradient';
// import getStyles from './MyProfileTopTabs.style'; // Saparate Style //
// import MyProfileAllSection from './MyProfileAllSection/MyProfileAllSection';
// import MyProfileImagesSection from './MyProfileImagesSection/MyProfileImagesSection';
// import MyProfileClipsSection from './MyProfileClipsSection/MyProfileClipsSection';
// import MyProfileSubscribeSection from './MyProfileSubscribeSection/MyProfileSubscribeSection';
// interface Props {
//     FB_ID: string;
//     refreshTrigger: any;
//     dataLoaded: boolean;
// }

// const Tab = createMaterialTopTabNavigator();

// const MyProfileTopTabs: React.FC<Props> = ({
//     FB_ID,
//     refreshTrigger,
//     dataLoaded,
// }) => {
//     // console.log('haji____', refreshTrigger);
//     console.log('dataLoaded', dataLoaded);

//     const styles = getStyles();

//     return (
//         <Tab.Navigator
//             sceneContainerStyle={{ flex: 1, backgroundColor: '#21262B' }}
//             screenOptions={{
//                 lazy: true,
//                 tabBarScrollEnabled: true,
//                 tabBarIndicatorStyle: [styles.TabBarIndicatorStyle],
//                 tabBarStyle: [styles.TabBarStyle],
//                 tabBarItemStyle: [styles.TabBarItemStyle],
//                 tabBarContentContainerStyle: [
//                     styles.TabBarContentContainerStyle,
//                 ],
//                 tabBarLabelStyle: [styles.TabBarLableStyle],
//             }}>
//             <Tab.Screen
//                 name="All"
//                 // initialParams={{ FB_ID }}
//                 component={() => (
//                     <MyProfileAllSection
//                         FB_ID={FB_ID}
//                         refreshTrigger={refreshTrigger}
//                         dataLoaded={dataLoaded}
//                     />
//                 )} // Render Subscriptions Component //
//                 options={({ route }) => ({
//                     tabBarLabel: props => (
//                         <View
//                             style={[
//                                 styles.TabMainContainer,
//                                 {
//                                     borderBottomWidth: props.focused
//                                         ? 1.28
//                                         : 1.28,
//                                     borderBottomColor: props.focused
//                                         ? '#EB853C'
//                                         : '#646B72',
//                                 },
//                             ]}>
//                             <Image
//                                 source={
//                                     props.focused
//                                         ? require('../../../../assets/AllActive.png')
//                                         : require('../../../../assets/AllInActive.png')
//                                 }
//                                 resizeMode="contain"
//                                 style={[styles.Image]}
//                             />
//                             <View style={[styles.TitleContainer]}>
//                                 <Text
//                                     style={[
//                                         styles.TitleText,
//                                         {
//                                             color: props.focused
//                                                 ? '#F7C900'
//                                                 : '#FFFFFF',
//                                             opacity: props.focused ? 1 : 0.6,
//                                         },
//                                     ]}>
//                                     {route.name}
//                                 </Text>
//                             </View>
//                         </View>
//                     ),
//                 })}
//             />
//             {/* <Tab.Screen
//                 name="Shorts"
//                 // initialParams={{ FB_ID }}
//                 component={() => (
//                     <MyProfileAllSection
//                         FB_ID={FB_ID}
//                         refreshTrigger={refreshTrigger}
//                         dataLoaded={dataLoaded}
//                     />
//                 )} // Render Subscriptions Component //
//                 options={({ route }) => ({
//                     tabBarLabel: props => (
//                         <View
//                             style={[
//                                 styles.TabMainContainer,
//                                 {
//                                     borderBottomWidth: props.focused
//                                         ? 1.28
//                                         : 1.28,
//                                     borderBottomColor: props.focused
//                                         ? '#EB853C'
//                                         : '#646B72',
//                                 },
//                             ]}>
//                             <Image
//                                 source={
//                                     props.focused
//                                         ? require('../../../../assets/ShortsActive.png')
//                                         : require('../../../../assets/ShortsInActive.png')
//                                 }
//                                 resizeMode="contain"
//                                 style={[styles.Image]}
//                             />
//                             <View style={[styles.TitleContainer]}>
//                                 <Text
//                                     style={[
//                                         styles.TitleText,
//                                         {
//                                             color: props.focused
//                                                 ? '#F7C900'
//                                                 : '#FFFFFF',
//                                             opacity: props.focused ? 1 : 0.6,
//                                         },
//                                     ]}>
//                                     {route.name}
//                                 </Text>
//                             </View>
//                         </View>
//                     ),
//                 })}
//             /> */}
//             {/* <Tab.Screen
//                 name="Images"
//                 // initialParams={{ FB_ID }}
//                 component={() => (
//                     <MyProfileImagesSection
//                         FB_ID={FB_ID}
//                         refreshTrigger={refreshTrigger}
//                         dataLoaded={dataLoaded}
//                     />
//                 )}
//                 // component={AllSection} // Render Subscriptions Component //
//                 options={({ route }) => ({
//                     tabBarLabel: props => (
//                         <>
//                             <View
//                                 style={[
//                                     styles.TabMainContainer,
//                                     {
//                                         borderBottomWidth: props.focused
//                                             ? 1.28
//                                             : 1.28,
//                                         borderBottomColor: props.focused
//                                             ? '#EB853C'
//                                             : '#646B72',
//                                     },
//                                 ]}>
//                                 <Image
//                                     source={
//                                         props.focused
//                                             ? require('../../../../assets/ImagesActive.png')
//                                             : require('../../../../assets/ImagesInActive.png')
//                                     }
//                                     resizeMode="contain"
//                                     style={[styles.Image]}
//                                 />
//                                 <View style={[styles.TitleContainer]}>
//                                     <Text
//                                         style={[
//                                             styles.TitleText,
//                                             {
//                                                 color: props.focused
//                                                     ? '#F7C900'
//                                                     : '#FFFFFF',
//                                                 opacity: props.focused
//                                                     ? 1
//                                                     : 0.6,
//                                             },
//                                         ]}>
//                                         {route.name}
//                                     </Text>
//                                 </View>
//                             </View>
//                         </>
//                     ),
//                 })}
//             /> */}
//             {/* <Tab.Screen
//                 name="Subscribe"
//                 // initialParams={{ FB_ID }}
//                 component={() => (
//                     <MyProfileSubscribeSection
//                         FB_ID={FB_ID}
//                         refreshTrigger={refreshTrigger}
//                         dataLoaded={dataLoaded}
//                     />
//                 )}
//                 // component={AllSection} // Render Subscriptions Component //
//                 options={({ route }) => ({
//                     tabBarLabel: props => (
//                         <View
//                             style={[
//                                 styles.TabMainContainer,
//                                 {
//                                     borderBottomWidth: props.focused
//                                         ? 1.28
//                                         : 1.28,
//                                     borderBottomColor: props.focused
//                                         ? '#EB853C'
//                                         : '#646B72',
//                                 },
//                             ]}>
//                             <Image
//                                 source={
//                                     props.focused
//                                         ? require('../../../../assets/SubscribeActive.png')
//                                         : require('../../../../assets/subscribeinactive.png')
//                                 }
//                                 resizeMode="contain"
//                                 style={[styles.Image]}
//                             />
//                             <View style={[styles.TitleContainer]}>
//                                 <Text
//                                     style={[
//                                         styles.TitleText,
//                                         {
//                                             color: props.focused
//                                                 ? '#F7C900'
//                                                 : '#FFFFFF',
//                                             opacity: props.focused ? 1 : 0.6,
//                                         },
//                                     ]}>
//                                     {route.name}
//                                 </Text>
//                             </View>
//                         </View>
//                     ),
//                 })}
//             /> */}
//             {/* <Tab.Screen
//                 name="Clips"
//                 // initialParams={{ FB_ID }}
//                 component={() => (
//                     <MyProfileClipsSection
//                         FB_ID={FB_ID}
//                         refreshTrigger={refreshTrigger}
//                         dataLoaded={dataLoaded}
//                     />
//                 )} // Render Clips Component //
//                 // component={AllSection} // Render Subscriptions Component //
//                 options={({ route }) => ({
//                     tabBarLabel: props => (
//                         <View
//                             style={[
//                                 styles.TabMainContainer,
//                                 {
//                                     borderBottomWidth: props.focused
//                                         ? 1.28
//                                         : 1.28,
//                                     borderBottomColor: props.focused
//                                         ? '#EB853C'
//                                         : '#646B72',
//                                 },
//                             ]}>
//                             <Image
//                                 source={
//                                     props.focused
//                                         ? require('../../../../assets/ClipsActive.png')
//                                         : require('../../../../assets/ClipsInActive.png')
//                                 }
//                                 resizeMode="contain"
//                                 style={[styles.Image]}
//                             />
//                             <View style={[styles.TitleContainer]}>
//                                 <Text
//                                     style={[
//                                         styles.TitleText,
//                                         {
//                                             color: props.focused
//                                                 ? '#F7C900'
//                                                 : '#FFFFFF',
//                                             opacity: props.focused ? 1 : 0.6,
//                                         },
//                                     ]}>
//                                     {route.name}
//                                 </Text>
//                             </View>
//                         </View>
//                     ),
//                 })}
//             /> */}
//         </Tab.Navigator>
//     );
// };

// export default MyProfileTopTabs;

// App.js



import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabsStore from '../../../../store/TabsStore';
import MyProfileAllSection from './MyProfileAllSection/MyProfileAllSection';
import MyProfileImagesSection from './MyProfileImagesSection/MyProfileImagesSection';
import getStyles from './MyProfileTopTabs.style';
import { Image, StyleSheet, Text, View } from 'react-native';
import MyProfileSubscribeSection from './MyProfileSubscribeSection/MyProfileSubscribeSection';
import MyProfileClipsSection from './MyProfileClipsSection/MyProfileClipsSection';
import useThemeStyles from '../../../../hooks/useThemeStyles';

const Tab = createMaterialTopTabNavigator();

const styles = getStyles();

interface HeaderProps {
    IsCreatorShow: (isEnabled: boolean) => void;
    refreshTrigger: any;
    FB_ID: string;
}

const MyProfileTopTabs: React.FC<HeaderProps> = ({ FB_ID }) => {
    console.log('FB_ID____________________', FB_ID);

    const fetchData = TabsStore(state => state.fetchData);
    const loadDataFromStorage = TabsStore(state => state.loadDataFromStorage);

    useEffect(() => {
        const initializeData = async () => {
            await loadDataFromStorage();
            fetchData(FB_ID, FB_ID);
        };
        initializeData();
    }, []);

    const Theme = useThemeStyles(styleCreator);

    return (
        <Tab.Navigator
            sceneContainerStyle={{
                flex: 1,
                backgroundColor: Theme.bgColor.backgroundColor,
            }}
            screenOptions={{
                lazy: true,
                tabBarScrollEnabled: true,
                tabBarIndicatorStyle: [styles.TabBarIndicatorStyle],
                tabBarStyle: [
                    styles.TabBarStyle,
                    { backgroundColor: Theme.bgColor.backgroundColor },
                ],
                tabBarItemStyle: [styles.TabBarItemStyle],
                tabBarContentContainerStyle: [
                    styles.TabBarContentContainerStyle,
                ],
                tabBarLabelStyle: [styles.TabBarLableStyle],
            }}>
            <Tab.Screen
                name="All"
                component={MyProfileAllSection}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    borderBottomWidth: props.focused
                                        ? 1.28
                                        : 1.28,
                                    borderBottomColor: props.focused
                                        ? '#EB853C'
                                        : '#646B72',
                                },
                            ]}>
                            <Image
                                source={
                                    props.focused
                                        ? require('../../../../assets/AllActive.png')
                                        : require('../../../../assets/AllInActive.png')
                                }
                                resizeMode="contain"
                                style={[
                                    styles.Image,
                                    {
                                        tintColor: props.focused
                                            ? null
                                            : Theme.inActiveTabIconColor
                                                  .tintColor,
                                    },
                                ]}
                            />
                            <View style={[styles.TitleContainer]}>
                                <Text
                                    style={[
                                        styles.TitleText,
                                        {
                                            color: props.focused
                                                ? '#F7C900'
                                                : Theme.TextLightColor.color,
                                        },
                                    ]}>
                                    {route.name}
                                </Text>
                            </View>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Shorts"
                component={MyProfileAllSection}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    borderBottomWidth: props.focused
                                        ? 1.28
                                        : 1.28,
                                    borderBottomColor: props.focused
                                        ? '#EB853C'
                                        : '#646B72',
                                },
                            ]}>
                            <Image
                                source={
                                    props.focused
                                        ? require('../../../../assets/ShortsActive.png')
                                        : require('../../../../assets/ShortsInActive.png')
                                }
                                resizeMode="contain"
                                style={[
                                    styles.Image,
                                    {
                                        tintColor: props.focused
                                            ? null
                                            : Theme.inActiveTabIconColor
                                                  .tintColor,
                                    },
                                ]}
                            />
                            <View style={[styles.TitleContainer]}>
                                <Text
                                    style={[
                                        styles.TitleText,
                                        {
                                            color: props.focused
                                                ? '#F7C900'
                                                : Theme.TextLightColor.color,
                                        },
                                    ]}>
                                    {route.name}
                                </Text>
                            </View>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Images"
                component={MyProfileImagesSection}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <>
                            <View
                                style={[
                                    styles.TabMainContainer,
                                    {
                                        borderBottomWidth: props.focused
                                            ? 1.28
                                            : 1.28,
                                        borderBottomColor: props.focused
                                            ? '#EB853C'
                                            : '#646B72',
                                    },
                                ]}>
                                <Image
                                    source={
                                        props.focused
                                            ? require('../../../../assets/ImagesActive.png')
                                            : require('../../../../assets/ImagesInActive.png')
                                    }
                                    resizeMode="contain"
                                    style={[
                                        styles.Image,
                                        {
                                            tintColor: props.focused
                                                ? null
                                                : Theme.inActiveTabIconColor
                                                      .tintColor,
                                        },
                                    ]}
                                />
                                <View style={[styles.TitleContainer]}>
                                    <Text
                                        style={[
                                            styles.TitleText,
                                            {
                                                color: props.focused
                                                    ? '#F7C900'
                                                    : Theme.TextLightColor
                                                          .color,
                                            },
                                        ]}>
                                        {route.name}
                                    </Text>
                                </View>
                            </View>
                        </>
                    ),
                })}
            />
            <Tab.Screen
                name="Subscribe"
                component={MyProfileSubscribeSection}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    borderBottomWidth: props.focused
                                        ? 1.28
                                        : 1.28,
                                    borderBottomColor: props.focused
                                        ? '#EB853C'
                                        : '#646B72',
                                },
                            ]}>
                            <Image
                                source={
                                    props.focused
                                        ? require('../../../../assets/SubscribeActive.png')
                                        : require('../../../../assets/subscribeinactive.png')
                                }
                                resizeMode="contain"
                                style={[
                                    styles.Image,
                                    {
                                        tintColor: props.focused
                                            ? null
                                            : Theme.inActiveTabIconColor
                                                  .tintColor,
                                    },
                                ]}
                            />
                            <View style={[styles.TitleContainer]}>
                                <Text
                                    style={[
                                        styles.TitleText,
                                        {
                                            color: props.focused
                                                ? '#F7C900'
                                                : Theme.TextLightColor.color,
                                        },
                                    ]}>
                                    {route.name}
                                </Text>
                            </View>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Clips"
                component={MyProfileClipsSection}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    borderBottomWidth: props.focused
                                        ? 1.28
                                        : 1.28,
                                    borderBottomColor: props.focused
                                        ? '#EB853C'
                                        : '#646B72',
                                },
                            ]}>
                            <Image
                                source={
                                    props.focused
                                        ? require('../../../../assets/ClipsActive.png')
                                        : require('../../../../assets/ClipsInActive.png')
                                }
                                resizeMode="contain"
                                style={[
                                    styles.Image,
                                    {
                                        tintColor: props.focused
                                            ? null
                                            : Theme.inActiveTabIconColor
                                                  .tintColor,
                                    },
                                ]}
                            />
                            <View style={[styles.TitleContainer]}>
                                <Text
                                    style={[
                                        styles.TitleText,
                                        {
                                            color: props.focused
                                                ? '#F7C900'
                                                : Theme.TextLightColor.color,
                                        },
                                    ]}>
                                    {route.name}
                                </Text>
                            </View>
                        </View>
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        bgColor: {
            backgroundColor: colors.bgColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
        tabIconColor: {
            tintColor: colors.activeTabIconColor,
        },
        inActiveTabIconColor: {
            tintColor: colors.inActiveTabIconColor,
        },
    });

export default MyProfileTopTabs;
