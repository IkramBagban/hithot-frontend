import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './TopTabs.style'; // Saparate Style //
import All from './All/All';
import Account from './Account/Account';
import PostUpload from './PostUpload/PostUpload';
import Post from './Post/Post';
import Short from './Short/Short';
import useThemeStyles from '../../../../../hooks/useThemeStyles';

const Tab = createMaterialTopTabNavigator();

const TopTabs: React.FC<{}> = ({}) => {
    const styles = getStyles();
      const Theme = useThemeStyles(styleCreator);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarScrollEnabled: true,
                tabBarIndicatorStyle: [styles.TabBarIndicatorStyle],
                tabBarStyle: [styles.TabBarStyle],
                tabBarItemStyle: [styles.TabBarItemStyle],
                tabBarContentContainerStyle: [
                    styles.TabBarContentContainerStyle,
                ],
                tabBarLabelStyle: [styles.TabBarLableStyle],
            }}
            sceneContainerStyle={[styles.SceneContainerStyle,{backgroundColor:Theme.ContainerColor.backgroundColor}]}>
            <Tab.Screen
                name=" All "
                component={All} // Render All Component //
                // initialParams={{ FB_ID }}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    backgroundColor: props.focused
                                        ? '#59B161'
                                        : undefined,
                                },
                            ]}>
                            <View style={[styles.TitleContainer]}>
                                <Text style={[styles.TitleText]}>
                                    {route.name}
                                </Text>
                            </View>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Account"
                component={Account} // Render Account Component //
                // initialParams={{ FB_ID }}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    backgroundColor: props.focused
                                        ? '#59B161'
                                        : undefined,
                                },
                            ]}>
                            <View style={[styles.TitleContainer]}>
                                <Text style={[styles.TitleText]}>
                                    {route.name}
                                </Text>
                            </View>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Post Upload"
                component={PostUpload} // Render PostUpload Component //
                // initialParams={{ FB_ID }}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    backgroundColor: props.focused
                                        ? '#59B161'
                                        : undefined,
                                },
                            ]}>
                            <View style={[styles.TitleContainer]}>
                                <Text style={[styles.TitleText]}>
                                    {route.name}
                                </Text>
                            </View>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Post"
                component={Post} // Render Post Component //
                // initialParams={{ FB_ID }}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    backgroundColor: props.focused
                                        ? '#59B161'
                                        : undefined,
                                },
                            ]}>
                            <View style={[styles.TitleContainer]}>
                                <Text style={[styles.TitleText]}>
                                    {route.name}
                                </Text>
                            </View>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Short"
                component={Short} // Render Short Component //
                // initialParams={{ FB_ID }}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    backgroundColor: props.focused
                                        ? '#59B161'
                                        : undefined,
                                },
                            ]}>
                            <View style={[styles.TitleContainer]}>
                                <Text style={[styles.TitleText]}>
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

export default TopTabs;

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
