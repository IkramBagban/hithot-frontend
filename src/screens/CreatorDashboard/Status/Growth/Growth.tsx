import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import getStyles from './Growth.style'; // Saparate Style //
import { StackedBarChart } from 'react-native-chart-kit';

// Like And View

const Growth: React.FC = () => {
    const ScreenWidth = Dimensions.get('screen').width;

    const Data = {
        data: [
            [400, 180, 50],
            [300, 50, 50],
            [400, 140, 100],
            [380, 50, 50],
            [390, 80, 50],
            [300, 50, 50],
        ],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        legend: ['Man', 'Women', 'New Customer'],
        barColors: ['#116CFF', '#FFD000', '#FFFFFF'],
    };

    const ChartConfig = {
        backgroundGradientFrom: '#333B42',
        backgroundGradientTo: '#333B42',
        color: (opacity = 1) => `rgba(214, 216, 217, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 15,
        useShadowColorFromDataset: false, // optional
    };

    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.SubContainer]}>
                    <View style={[styles.HeaderContainer]}>
                        <View style={[styles.TitleContainer]}>
                            <Text style={[styles.Title]}>
                                {'Customer growth'}
                            </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={[styles.ActionButtonContainer]}>
                                <View
                                    style={[styles.ActionButtonTextContainer]}>
                                    <Text style={[styles.ActionButtonText]}>
                                        {'In this year'}
                                    </Text>
                                </View>
                                <View
                                    style={[styles.ActionButtonIconContainer]}>
                                    <Image
                                        source={require('../../../../assets/dropdown.png')}
                                        resizeMode={'contain'}
                                        style={[styles.ActionButtonIcon]}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.ChartContainer]}>
                        <StackedBarChart
                            showLegend={false}
                            data={Data}
                            chartConfig={{
                                backgroundGradientFrom: '#333B42',
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientTo: '#333B42',
                                backgroundGradientToOpacity: 0.5,
                                color: (opacity = 1) =>
                                    `rgba(214, 216, 217, ${opacity})`,
                                strokeWidth: 1, // optional, default 3
                                barPercentage: 0.5,
                                barRadius: 20,
                                useShadowColorFromDataset: false, // optional
                                propsForHorizontalLabels: {
                                    fontSize: 12,
                                    fontFamily: 'Figtree-Regular',
                                },
                            }}
                            width={ScreenWidth}
                            height={200}
                        />
                    </View>
                </View>
            </View>
        </>
    );
};

export default Growth;
