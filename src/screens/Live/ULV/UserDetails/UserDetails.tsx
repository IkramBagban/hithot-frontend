import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import getStyles from './UserDetails.style';
import useThemeStyles from '../../../../hooks/useThemeStyles';

const UserDetails: React.FC = ({ ITEM }) => {
    const styles = useThemeStyles(getStyles);

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.ImageContainer]}>
                    <View style={[styles.ImageRadiusContainer]}>
                        <Image
                            source={{ uri: ITEM?.profile_pic }}
                            defaultSource={require('../../../../assets/GradientBG.png')}
                            style={[styles.Image]}
                        />
                    </View>
                </View>
                <View style={[styles.TitleContainer]}>
                    <Text style={[styles.TitleText]}>{ITEM?.first_name}</Text>
                </View>
                <View style={[styles.SubTitleContainer]}>
                    <Text style={[styles.SubTitleText]}>{ITEM?.username}</Text>
                </View>
                <View style={[styles.ScheduledContainer]}>
                    <Text style={[styles.ScheduledText]}>
                        Scheduled at 10 : 30
                    </Text>
                </View>
            </View>
        </>
    );
};

export default UserDetails;
