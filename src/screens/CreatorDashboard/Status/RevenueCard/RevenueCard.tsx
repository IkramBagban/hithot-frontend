import { Text, View, Image } from 'react-native';
import React from 'react';
import getStyles from './RevenueCard.style'; // Saparate Style //

const RevenueCard: React.FC = () => {
    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.SubContainer]}>
                    <View style={[styles.IconContainer]}>
                        <View style={[styles.IconRadiusContainer]}>
                            <Image
                                source={require('../../../../assets/greenuparrow.png')}
                                resizeMode="contain"
                                style={[styles.Icon]}
                            />
                            <View style={[styles.Absolute]} />
                        </View>
                    </View>
                    <View style={[styles.DetailsContainer]}>
                        <View style={[styles.RowContainer]}>
                            <View style={[styles.PriceContainer]}>
                                <Text style={[styles.Price]}>{'$6,726'}</Text>
                            </View>
                            <View style={[styles.PercentageContainer]}>
                                <Text style={[styles.Percentage]}>
                                    {'+2.5%'}
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.ActionTitleContainer]}>
                            <Text style={[styles.ActionTitle]}>
                                {'Revenue generated'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default RevenueCard;
