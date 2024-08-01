import { Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import getStyles from './ARTM.style'; // Saparate Style //
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
} from 'react-native-chart-kit';

// Accounts reached this month

const ARTM: React.FC = () => {
    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.SubContainer]}>
                    <View style={[styles.DetailsContainer]}>
                        <View style={[styles.RowContainer]}>
                            <View style={[styles.PriceContainer]}>
                                <Text style={[styles.Price]}>{'10,254'}</Text>
                            </View>
                            <View style={[styles.PercentageContainer]}>
                                <Text style={[styles.Percentage]}>
                                    {'+2.5%'}
                                </Text>
                            </View>
                            <View style={[styles.IconContainer]}>
                                <Image
                                    source={require('../../../../assets/reddownarrow.png')}
                                    resizeMode="contain"
                                    style={[styles.Icon]}
                                />
                            </View>
                        </View>
                        <View style={[styles.ActionTitleContainer]}>
                            <Text style={[styles.ActionTitle]}>
                                {'Accounts reached this month'}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.ChartContainer]}>
                        <LineChart
                            data={{
                                labels: [],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                        ],
                                    },
                                ],
                            }}
                            withHorizontalLabels={false}
                            withVerticalLabels={false}
                            withInnerLines={false}
                            withVerticalLines={false}
                            withHorizontalLines={false}
                            withOuterLines={false}
                            width={90} // from react-native
                            height={40}
                            // yAxisLabel="$"
                            // yAxisSuffix="k"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                width: -90,
                                height: 40,
                                backgroundColor: '#333B42',
                                backgroundGradientFrom: '#333B42',
                                backgroundGradientTo: '#333B42',
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) =>
                                    `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) =>
                                    `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    // borderRadius: 16,
                                },
                                propsForDots: {
                                    r: '2',
                                    strokeWidth: '2',
                                    stroke: '#FFFFFF',
                                },
                            }}
                            bezier={true}
                            style={
                                {
                                    // marginVertical: 8,
                                    // borderRadius: 16,
                                }
                            }
                        />
                    </View>
                </View>
            </View>
        </>
    );
};

export default ARTM;
