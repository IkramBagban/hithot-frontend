import { View, Text, Image, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './ProfileTopTab.style'; // Saparate Style //
import AllSection from './AllSection/AllSection';
import ImagesSection from './ImagesSection/ImagesSection';
import ClipsSection from './ClipsSection/ClipsSection';
import SubscribeSection from './SubscribeSection/SubscribeSection';
import useThemeStyles from '../../../hooks/useThemeStyles';

const Tab = createMaterialTopTabNavigator();

const ProfileTopTab: React.FC<{ FB_ID: string; userData: any }> = ({
    FB_ID,
    userData,
}) => {
    console.log('Tab_userData', userData?.user_info);

    const styles = getStyles();
    const Theme = useThemeStyles(styleCreator);

    return (
        <Tab.Navigator
            sceneContainerStyle={{ flex: 1, backgroundColor: Theme.ContainerColor.backgroundColor }}
            screenOptions={{
                lazy: true,
                tabBarScrollEnabled: true,
                tabBarIndicatorStyle: [styles.TabBarIndicatorStyle],
                tabBarStyle: [styles.TabBarStyle],
                tabBarItemStyle: [styles.TabBarItemStyle],
                tabBarContentContainerStyle: [
                    styles.TabBarContentContainerStyle,
                ],
                tabBarLabelStyle: [styles.TabBarLableStyle],
            }}>
            <Tab.Screen
                name="All"
                initialParams={{ FB_ID }}
                component={AllSection} // Render Subscriptions Component //
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
                                        ? require('../../../assets/AllActive.png')
                                        : require('../../../assets/AllInActive.png')
                                }
                                resizeMode="contain"
                                style={[styles.Image]}
                            />
                            <View style={[styles.TitleContainer]}>
                                <Text
                                    style={[
                                        styles.TitleText,
                                        {
                                            color: props.focused
                                                ? '#F7C900'
                                                : '#FFFFFF',
                                            opacity: props.focused ? 1 : 0.6,
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
                component={AllSection} // Render Subscriptions Component //
                initialParams={{ FB_ID }}
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
                                        ? require('../../../assets/ShortsActive.png')
                                        : require('../../../assets/ShortsInActive.png')
                                }
                                resizeMode="contain"
                                style={[styles.Image]}
                            />
                            <View style={[styles.TitleContainer]}>
                                <Text
                                    style={[
                                        styles.TitleText,
                                        {
                                            color: props.focused
                                                ? '#F7C900'
                                                : '#FFFFFF',
                                            opacity: props.focused ? 1 : 0.6,
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
                component={ImagesSection}
                initialParams={{ FB_ID }}
                // component={AllSection} // Render Subscriptions Component //
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
                                            ? require('../../../assets/ImagesActive.png')
                                            : require('../../../assets/ImagesInActive.png')
                                    }
                                    resizeMode="contain"
                                    style={[styles.Image]}
                                />
                                <View style={[styles.TitleContainer]}>
                                    <Text
                                        style={[
                                            styles.TitleText,
                                            {
                                                color: props.focused
                                                    ? '#F7C900'
                                                    : '#FFFFFF',
                                                opacity: props.focused
                                                    ? 1
                                                    : 0.6,
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
                // initialParams={{ FB_ID }}
                component={() => (
                    <SubscribeSection userData={userData} FB_ID={FB_ID} />
                )} // Render Subscriptions Component //
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
                                        ? require('../../../assets/SubscribeActive.png')
                                        : require('../../../assets/subscribeinactive.png')
                                }
                                resizeMode="contain"
                                style={[styles.Image]}
                            />
                            <View style={[styles.TitleContainer]}>
                                <Text
                                    style={[
                                        styles.TitleText,
                                        {
                                            color: props.focused
                                                ? '#F7C900'
                                                : '#FFFFFF',
                                            opacity: props.focused ? 1 : 0.6,
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
                component={ClipsSection} // Render Clips Component //
                initialParams={{ FB_ID: FB_ID }}
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
                                        ? require('../../../assets/ClipsActive.png')
                                        : require('../../../assets/ClipsInActive.png')
                                }
                                resizeMode="contain"
                                style={[styles.Image]}
                            />
                            <View style={[styles.TitleContainer]}>
                                <Text
                                    style={[
                                        styles.TitleText,
                                        {
                                            color: props.focused
                                                ? '#F7C900'
                                                : '#FFFFFF',
                                            opacity: props.focused ? 1 : 0.6,
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

export default ProfileTopTab;

const styleCreator = colors =>
    StyleSheet.create({
        TextColor: {
            color: colors.textColor,
        },
        ActionColor: {
            backgroundColor: colors.bgLightColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
        IconColor: {
            tintColor: colors.iconColor,
        },
        ContainerColor: {
            backgroundColor: colors.bgColor,
        },
        BorderColor: {
            borderColor: colors.activeBorderColor,
        },
        subcontainerColor: {
            backgroundColor: colors.subContainerColor,
        },
    });