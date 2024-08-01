import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import getStyles from './UserDetails.style'; // Saparate Style //

const UserDetails: React.FC = ({ ITEM }) => {
    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.ScheduledContainer]}>
                    <View style={[styles.IconAndTimeTextContainer]}>
                        <View style={[styles.IconContainer]}>
                            <Image
                                source={require('../../../../assets/Clock.png')}
                                resizeMode={'contain'}
                                style={[styles.Icon]}
                            />
                        </View>
                        <View style={[styles.TimeTextContainer]}>
                            <Text style={[styles.TimeText]}>10 : 30</Text>
                        </View>
                        <View style={[styles.Absolute]} />
                    </View>
                </View>
                <View style={[styles.DetailsContainer]}>
                    <View style={[styles.ImageContainer]}>
                        <View style={[styles.ImageRadiusContainer]}>
                            <Image
                                source={require('../../../../assets/demoProfile2.png')}
                                style={[styles.Image]}
                            />
                        </View>
                    </View>
                    <View style={[styles.TitleContainer]}>
                        <Text style={[styles.TitleText]}>MoZuki</Text>
                    </View>
                    <View style={[styles.SubTitleAndStatusContainer]}>
                        <View style={[styles.SubTitleContainer]}>
                            <Text style={[styles.SubTitleText]}>@mozukiii</Text>
                        </View>
                        <View style={[styles.Dot]} />
                        <View style={[styles.StatusContainer]}>
                            <Text style={[styles.StatusText]}>2 min ago</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.ShadowContainer]}>
                    <Image
                        source={require('../../../../assets/downshadow.png')}
                        style={[styles.ShadowImage]}
                    />
                </View>
            </View>
        </>
    );
};

export default UserDetails;
