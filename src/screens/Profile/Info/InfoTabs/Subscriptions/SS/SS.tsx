import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getStyles from './SS.style'; // Saparate Style //
import LinearGradient from 'react-native-linear-gradient';

// Send Props //

interface DataItem {
    id: number;
    URL: any; // Adjust the type based on your image type
}

const SS: React.FC = () => {
    const navigation = useNavigation();
    const Data: DataItem[] = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
    ];

    const RenderItem: React.FC<{ item: DataItem }> = ({ item }) => {
        return (
            <View style={[styles.DetailsContainer]}>
                <View style={[styles.ImageContainer]}>
                    <View style={[styles.ImageRadiusContainer]}>
                        <Image
                            source={require('../../../../../../assets/GradientBG.png')}
                            style={[styles.Image]}
                        />
                    </View>
                </View>
                <View style={[styles.UsernameAndSubnameContainer]}>
                    <View style={[styles.UsernameContainer]}>
                        <Text style={[styles.UsernameText]}>
                            {'Ryhn_azz_.'}
                        </Text>
                    </View>
                    <View style={[styles.SubnameContainer]}>
                        <Text style={[styles.SubnameText]}>
                            {'Ryhn azithew'}
                        </Text>
                    </View>
                </View>
                <View style={[styles.ButtonContainer]}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <LinearGradient
                            colors={['#F7C900', '#EB853C']}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={[styles.ButtonSubContainer]}>
                            <Text style={[styles.ButtonText]}>
                                {'Subscribe'}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const styles = getStyles();

    return (
        <View style={[styles.Container]}>
            <View style={[styles.TitleContainer]}>
                <Text style={[styles.TitleText]}>Suggested subscription</Text>
            </View>
            <FlatList
                data={Data}
                renderItem={RenderItem}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.ContentContainerStyle]}
            />
        </View>
    );
};

export default SS;
