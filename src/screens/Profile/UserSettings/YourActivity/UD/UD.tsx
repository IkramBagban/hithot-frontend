import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import getStyles from './UD.style'; // Saparate Style //
import { BarChart, PieChart } from 'react-native-chart-kit';
import useThemeStyles from '../../../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../../config';

// Like And View

const UD: React.FC = () => {
    const ScreenWidth = Dimensions.get('screen').width;

    const pieData = [
        {
            name: 'Chatting',
            population: 57,
            color: '#3DD598',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
        },

        {
            name: 'Story view',
            population: 28,
            color: '#FF974A',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
        },
        {
            name: 'Reels',
            population: 117,
            color: '#0062FF',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
        },
        {
            name: 'Calling',
            population: 22,
            color: '#FFC542',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
        },
    ];

    const styles = getStyles();

      const Theme = useThemeStyles(styleCreator);
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
                        <Text
                            style={[
                                styles.HeaderTitle,
                                { color: Theme.TextColor.color },
                            ]}>
                            {'Usage distribution'}
                        </Text>
                    </View>
                    <View style={[styles.ChartContainer]}>
                        <View style={[styles.ChartSubContainer]}>
                            <PieChart
                                data={pieData}
                                width={ScreenWidth * 1.62}
                                height={220}
                                chartConfig={{
                                    backgroundColor: '#1c1c1c',
                                    backgroundGradientFrom: '#1c1c1c',
                                    backgroundGradientTo: '#1c1c1c',
                                    color: (opacity = 1) =>
                                        `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) =>
                                        `rgba(255, 255, 255, ${opacity})`,
                                }}
                                accessor="population"
                                backgroundColor="transparent"
                                hasLegend={false}
                            />
                            <View style={[styles.ActionContainer]}>
                                <View
                                    style={[
                                        styles.ActionDetailsContainer,
                                        {
                                            backgroundColor: isDark
                                                ? '#333B42'
                                                : '#ffff',
                                        },
                                    ]}>
                                    <View style={[styles.ActionTitleContainer]}>
                                        <Text
                                            style={[
                                                styles.ActionTitle,
                                                {
                                                    color: Theme.TextColor
                                                        .color,
                                                },
                                            ]}>
                                            {'3hrs 20 min'}
                                        </Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.ActionSubTitleContainer,
                                        ]}>
                                        <Text
                                            style={[
                                                styles.ActionSubTitle,
                                                {
                                                    color: Theme.TextColor
                                                        .color,
                                                },
                                            ]}>
                                            {'Visitors this year'}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.DataContainer]}>
                            {pieData.map((entry, index) => (
                                <View
                                    key={index}
                                    style={[styles.DataSubContainer]}>
                                    <View style={[styles.RoundContainer]}>
                                        <View
                                            style={[
                                                styles.Round,
                                                {
                                                    backgroundColor:
                                                        entry.color,
                                                },
                                            ]}
                                        />
                                    </View>
                                    <View style={[styles.DetailsContainer]}>
                                        <View style={[styles.TitleContainer]}>
                                            <Text
                                                style={[
                                                    styles.Title,
                                                    {
                                                        color: Theme.TextColor
                                                            .color,
                                                    },
                                                ]}>
                                                {entry.name}
                                            </Text>
                                        </View>
                                        <View
                                            style={[styles.SubTitleContainer]}>
                                            <Text
                                                style={[
                                                    styles.SubTitle,
                                                    {
                                                        color: Theme.TextColor
                                                            .color,
                                                    },
                                                ]}>
                                                {entry.population} min
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default UD;

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
