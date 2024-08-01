import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import getStyles from './DUT.style'; // Saparate Style //
import { BarChart } from 'react-native-chart-kit';
import { YAxis } from 'react-native-svg-charts';
import { G, Line } from 'react-native-svg';
import useThemeStyles from '../../../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../../config';

// Like And View

const DUT: React.FC = () => {
    const ScreenWidth = Dimensions.get('screen').width;

    const Data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: [3, 4.5, 3, 3, 3.5, 4, 2.5],
            },
        ],
    };

     const Theme = useThemeStyles(styleCreator);

    const ChartConfig = {
        backgroundGradientFrom: '#333B42',
        backgroundGradientTo: '#333B42',
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(214, 216, 217, ${opacity})`,
        labelColor: (opacity = 1) => Theme.TextColor.color,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.4,
        // barRadius: 5,
        fillShadowGradient: '#FFA500',
        fillShadowGradientOpacity: 1,
        useShadowColorFromDataset: false, // optional
        propsForBackgroundLines: {
            strokeDasharray: '', // solid background lines with no dash
            stroke: 'rgba(214, 216, 217, 0.2)', // light background lines
        },
        // propsForHorizontalLabels: {
        //     fontSize: 12,
        //     fontFamily: 'Figtree-Regular',
        // },
    };

    const styles = getStyles();

    
     const [isDark, setIsDark] = useState('');

     useEffect(() => {
         const savedTheme = async () => {
             const theme = await AsyncStorage.getItem(StorageKey.$THEME);
             console.log('theme', theme);

             if (theme) {
                 setIsDark(theme === 'dark');
             }
         };
         savedTheme();
     }, []);

    return (
        <>
            <View style={[styles.Container]}>
                <View
                    style={[
                        styles.SubContainer,
                        {
                            backgroundColor:
                                Theme.subcontainerColor.backgroundColor,
                            borderWidth: !isDark ? 0.5 : null,
                        },
                    ]}>
                    <View style={[styles.HeaderContainer]}>
                        <View style={[styles.TitleContainer]}>
                            <Text style={[styles.Title,{color:Theme.TextColor.color}]}>
                                {'Daily use time'}
                            </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={[styles.ActionButtonContainer]}>
                                <View
                                    style={[styles.ActionButtonTextContainer]}>
                                    <Text style={[styles.ActionButtonText,{color:Theme.TextColor.color}]}>
                                        {'Everyday'}
                                    </Text>
                                </View>
                                <View
                                    style={[styles.ActionButtonIconContainer]}>
                                    <Image
                                        source={require('../../../../../assets/dropdown.png')}
                                        resizeMode={'contain'}
                                        style={[styles.ActionButtonIcon,{tintColor:Theme.IconColor.tintColor}]}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.ChartContainer]}>
                        <View style={[styles.ChartSubContainer,]}>
                            <YAxis
                                data={Data.datasets[0].data}
                                style={{
                                    width: '14%',
                                    height: 220,
                                    position: 'absolute',
                                    backgroundColor: isDark ? '#333B42' : null,
                                    // borderWidth: 1,
                                    // borderColor: 'red',
                                }}
                                contentInset={{
                                    top: 18,
                                    bottom: 40,
                                }}
                                svg={{
                                    fill: Theme.TextColor.color,
                                    fontSize: 12,
                                }}
                                numberOfTicks={6}
                                formatLabel={value => `${value}hrs`}
                            />
                            <BarChart
                                data={Data}
                                width={ScreenWidth / 1.16}
                                height={220}
                                chartConfig={ChartConfig}
                                style={{
                                    width: '100%',
                                }}
                                fromZero={true}
                                withHorizontalLabels={false}
                                decorator={() => {
                                    return (
                                        <G>
                                            {Data.datasets[0].data.map(
                                                (value, index) => (
                                                    <Line
                                                        key={index}
                                                        x1={50 * (index + 1)}
                                                        x2={50 * (index + 1)}
                                                        y1="0%"
                                                        y2="100%"
                                                        stroke="rgba(214, 216, 217, 0.2)"
                                                        strokeDasharray="3, 3"
                                                        fill={Theme.TextColor.color}
                                                    />
                                                ),
                                            )}
                                        </G>
                                    );
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default DUT;

const styleCreator = colors =>
    StyleSheet.create({
        TextColor: {
            color: colors.textColor,
        },
        ActionColor: {
            backgroundColor: colors.bgLightColor,
        },
        TextLightColor: {
            color: colors.textLightColor,
        },
        IconColor: {
            tintColor: colors.iconColor,
        },
        ContainerColor: {
            backgroundColor: colors.bgColor,
        },
        BorderColor: {
            borderColor: colors.activeBorderColor,
        },
        subcontainerColor: {
            backgroundColor: colors.subContainerColor,
        },
    });
