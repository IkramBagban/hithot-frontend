import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import getStyles from './UserDetails.style'; // Saparate Style //
import { Gifs } from '../../../../theme/Gifs';

const UserDetails: React.FC = ({ ITEM }: any) => {
    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.BadgeAndTotalMembersContainer]}>
                    <Image
                        source={Gifs.liveGif}
                        style={[styles.liveView]}
                        resizeMode="contain"
                    />
                    {/* <View style={[styles.BadgeContainer]}>
                        <Text style={[styles.BadgeText]}>LIVE</Text>
                    </View> */}
                    <View style={[styles.TotalMembersContainer]}>
                        <Text style={[styles.TotalMembersText]}>3.4K</Text>
                    </View>
                </View>
                <View style={[styles.DetailsContainer]}>
                    <View style={[styles.TitleContainer]}>
                        <Text style={[styles.TitleText]}>
                            BEAUTY TIPS FOR YOU GUYS
                        </Text>
                    </View>
                    <View style={[styles.ImageAndSubTitleAndStatusContainer]}>
                        <View style={[styles.ImageContainer]}>
                            <View style={[styles.ImageRadiusContainer]}>
                                <Image
                                    source={{ uri: ITEM?.profile_pic }}
                                    defaultSource={require('../../../../assets/GradientBG.png')}
                                    style={[styles.Image]}
                                />
                            </View>
                        </View>
                        <View style={[styles.SubTitleContainer]}>
                            <Text
                                numberOfLines={1}
                                style={[styles.SubTitleText]}>
                                {ITEM?.username}
                            </Text>
                        </View>
                        <View style={[styles.Dot]} />
                        <View style={[styles.StatusContainer]}>
                            <Text style={[styles.StatusText]}>2m</Text>
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
