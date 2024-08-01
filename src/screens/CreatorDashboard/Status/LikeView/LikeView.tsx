import { Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import getStyles from './LikeView.style'; // Saparate Style //
import { ProgressChart } from 'react-native-chart-kit';

// Like And View

const LikeView: React.FC = () => {
    const LikesData = {
        labels: ['Likes'], // optional
        data: [0.75],
    };

    const LikesChartConfig = {
        backgroundGradientFrom: '#333B42',
        // backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#333B42',
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 74, 77, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false, // optional
    };

    const ViewsData = {
        labels: ['Likes'], // optional
        data: [0.75],
    };

    const ViewsChartConfig = {
        backgroundGradientFrom: '#333B42',
        // backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#333B42',
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(52, 130, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false, // optional
    };

    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.SubContainer]}>
                    <View style={[styles.DetailsContainer]}>
                        <View style={[styles.ChartAndIconContainer]}>
                            <ProgressChart
                                data={LikesData}
                                chartConfig={LikesChartConfig}
                                hideLegend={true}
                                width={40}
                                height={40}
                                strokeWidth={2}
                                radius={18}
                            />
                            <View style={[styles.IconContainer]}>
                                <Image
                                    source={require('../../../../assets/ChartLike.png')}
                                    resizeMode={'contain'}
                                    style={[styles.Icon]}
                                />
                            </View>
                        </View>
                        <View style={[styles.TitleAndSubTitleContainer]}>
                            <View style={[styles.TitleContainer]}>
                                <Text style={[styles.Title]}>{'50K'}</Text>
                            </View>
                            <View style={[styles.SubTitleContainer]}>
                                <Text style={[styles.SubTitle]}>
                                    {'Likes this month'}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.DetailsContainer]}>
                        <View style={[styles.ChartAndIconContainer]}>
                            <ProgressChart
                                data={ViewsData}
                                chartConfig={ViewsChartConfig}
                                hideLegend={true}
                                width={40}
                                height={40}
                                strokeWidth={2}
                                radius={18}
                            />
                            <View style={[styles.IconContainer]}>
                                <Image
                                    source={require('../../../../assets/ChartView.png')}
                                    resizeMode={'contain'}
                                    style={[styles.Icon]}
                                />
                            </View>
                        </View>
                        <View style={[styles.TitleAndSubTitleContainer]}>
                            <View style={[styles.TitleContainer]}>
                                <Text style={[styles.Title]}>{'150K'}</Text>
                            </View>
                            <View style={[styles.SubTitleContainer]}>
                                <Text style={[styles.SubTitle]}>
                                    {'Views this month'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default LikeView;
