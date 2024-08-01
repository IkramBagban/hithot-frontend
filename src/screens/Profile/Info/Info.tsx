import { ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './Info.style'; // Saparate Style //
import Header from './Header/Header';
import InfoTabs from './InfoTabs/InfoTabs'; // InfoTabs as Following, Followers and Subscriptions Tab //

const Info: React.FC = () => {
    const route = useRoute(); // Add this line to check the route parameters

    const {
        FB_ID,
        index,
        username,
        TotalFollowers,
        TotalFollowing,
        IsLoggedin,
    } = route.params as {
        FB_ID: string;
        index: number;
        username: string;
        TotalFollowers: number;
        TotalFollowing: number;
        IsLoggedin: boolean;
    };

    const styles = getStyles();

    return (
        <>
            <LinearGradient
                colors={['#21262B', '#21262B']}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1 }}>
                <Header UserName={username} />
                <InfoTabs
                    FB_ID={FB_ID}
                    Index={index}
                    TotalFollowers={TotalFollowers}
                    TotalFollowing={TotalFollowing}
                    IsLoggedin={IsLoggedin}
                />
            </LinearGradient>
        </>
    );
};

export default Info;
