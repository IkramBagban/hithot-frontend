import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './InfoTabs.style'; // Saparate Style //
import Following from './Following/Following';
import Followers from './Followers/Followers';
import Subscriptions from './Subscriptions/Subscriptions';

const Tab = createMaterialTopTabNavigator();

// formateNumber function ( 2887 to 2.9K ) //

const formatNumber = number => {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K';
    } else {
        return number.toString();
    }
};

const InfoTabs: React.FC<{
    FB_ID: string;
    Index: number;
    TotalFollowers: number;
    TotalFollowing: number;
    IsLoggedin: boolean;
}> = ({ FB_ID, Index, TotalFollowers, TotalFollowing, IsLoggedin }) => {
    const styles = getStyles();

    return (
        <Tab.Navigator
            initialRouteName={Index === 0 ? 'Followers' : 'Following'}
            screenOptions={{
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
                name="Following"
                component={() => (
                    <Following FB_ID={FB_ID} IsLoggedin={IsLoggedin} />
                )} // Render Following Component //
                // initialParams={{ FB_ID }}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    backgroundColor: props.focused
                                        ? '#787B7E'
                                        : undefined,
                                },
                            ]}>
                            <View style={[styles.TitleContainer]}>
                                <Text style={[styles.TitleText]}>
                                    {route.name}
                                </Text>
                            </View>
                            <LinearGradient
                                colors={['#F7C900', '#EB853C']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                style={[styles.CountContainer]}>
                                <Text style={[styles.CountText]}>
                                    {formatNumber(TotalFollowing)}{' '}
                                    {/* Render formatNumber function  */}
                                </Text>
                            </LinearGradient>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Followers"
                component={() => (
                    <Followers FB_ID={FB_ID} IsLoggedin={IsLoggedin} />
                )} // Render Followers Component //
                // initialParams={{ FB_ID }}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    backgroundColor: props.focused
                                        ? '#787B7E'
                                        : undefined,
                                },
                            ]}>
                            <View style={[styles.TitleContainer]}>
                                <Text style={[styles.TitleText]}>
                                    {route.name}
                                </Text>
                            </View>
                            <LinearGradient
                                colors={['#F7C900', '#EB853C']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                style={[styles.CountContainer]}>
                                <Text style={[styles.CountText]}>
                                    {formatNumber(TotalFollowers)}{' '}
                                    {/* Render formatNumber function  */}
                                </Text>
                            </LinearGradient>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Subscriptions"
                component={() => (
                    <Subscriptions FB_ID={FB_ID} IsLoggedin={IsLoggedin} />
                )} // Render Subscriptions Component //
                // initialParams={{ FB_ID }}
                options={({ route }) => ({
                    tabBarLabel: props => (
                        <View
                            style={[
                                styles.TabMainContainer,
                                {
                                    backgroundColor: props.focused
                                        ? '#787B7E'
                                        : undefined,
                                },
                            ]}>
                            <View style={[styles.TitleContainer]}>
                                <Text style={[styles.TitleText]}>
                                    {route.name}
                                </Text>
                            </View>
                            <LinearGradient
                                colors={['#F7C900', '#EB853C']}
                                start={{ x: 1, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                style={[styles.CountContainer]}>
                                <Text style={[styles.CountText]}>
                                    {'2.3K'}
                                    {/* Render formatNumber function  */}
                                </Text>
                            </LinearGradient>
                        </View>
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

export default InfoTabs;
