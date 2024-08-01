import { ScrollView, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './Subscription.style'; // Saparate Style //
import Header from './Header/Header';
import Profile from './Profile/Profile';

const Subscription: React.FC = () => {
    const route = useRoute();

    const { data } = route?.params;

    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <Header />
                <Profile data={data} />
            </View>
        </>
    );
};

export default Subscription;
