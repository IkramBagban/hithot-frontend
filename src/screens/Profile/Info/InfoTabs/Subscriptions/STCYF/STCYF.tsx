import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getStyles from './STCYF.style'; // Saparate Style //
import LinearGradient from 'react-native-linear-gradient';

// Send Props //

interface DataItem {
    id: number;
    URL: any; // Adjust the type based on your image type
}

const STCYF: React.FC = () => {
    const navigation = useNavigation();
    const Data: DataItem[] = [
        {
            id: 1,
            URL: require('../../../../../../assets/GradientBG.png'),
        },
        {
            id: 2,
            URL: require('../../../../../../assets/GradientBG.png'),
        },
        {
            id: 3,
            URL: require('../../../../../../assets/GradientBG.png'),
        },
        {
            id: 4,
            URL: require('../../../../../../assets/GradientBG.png'),
        },
    ];

    const RenderItem: React.FC<{ item: DataItem }> = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('LiveRoom')}>
                <View style={[styles.ImageContainer]}>
                    <View style={[styles.ImageRadiusContainer]}>
                        <Image source={item.URL} style={[styles.Image]} />
                    </View>
                    <LinearGradient
                        colors={['#F7C900', '#EB853C']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={[styles.BadgeContainer]}>
                        <Text style={[styles.BadgeText]}>Subscribe</Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        );
    };

    const styles = getStyles();

    return (
        <View style={[styles.Container]}>
            <View style={[styles.TitleContainer]}>
                <Text style={[styles.TitleText]}>
                    Subscribe to creators you follow
                </Text>
            </View>
            <FlatList
                data={Data}
                renderItem={RenderItem}
                horizontal={true}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[styles.ContentContainerStyle]}
            />
        </View>
    );
};

export default STCYF;
