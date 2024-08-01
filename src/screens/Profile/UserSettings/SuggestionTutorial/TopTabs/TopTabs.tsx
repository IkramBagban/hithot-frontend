// App.js
import { Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import getStyles from './TopTabs.style';
import Tutorials from './Tutorials/Tutorials';
import Testimonials from './Testimonials/Testimonials';
import Rewards from './Rewards/Rewards';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
    const styles = getStyles();

    return (
        <Tab.Navigator
            sceneContainerStyle={{ flex: 1, backgroundColor: '#21262B' }}
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
                name="Tutorials"
                component={Tutorials}
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
                                        ? require('../../../../../assets/TutorialsActive.png')
                                        : require('../../../../../assets/TutorialsInActive.png')
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
                name="Testimonials"
                component={Testimonials}
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
                                        ? require('../../../../../assets/TestimonialsActive.png')
                                        : require('../../../../../assets/TestimonialsInActive.png')
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
                name="Rewards"
                component={Rewards}
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
                                            ? require('../../../../../assets/RewardsActive.png')
                                            : require('../../../../../assets/RewardsInActive.png')
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
        </Tab.Navigator>
    );
};

export default TopTabs;
