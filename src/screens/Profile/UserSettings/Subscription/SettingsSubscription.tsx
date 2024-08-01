import { Dimensions, View, ScrollView,StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import LinearGradient from 'react-native-linear-gradient';
import styles from './SettingsSubscription.style';
import Footer from './Footer/Footer';
import useThemeStyles from '../../../../hooks/useThemeStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../config';

const SettingsSubscription: React.FC = () => {

    const WIDTH = Dimensions.get('screen').width;

    const subscribedata = [
        {
            id: 1,
            title: 'Your followers will be boosted',
            image: require('../../../../assets/boosted.png'),
        },
        {
            id: 2,
            title: 'Your video promoted to all handles',
            image: require('../../../../assets/handles.png'),
        },
        {
            id: 3,
            title: 'Your video will be in Trending ',
            image: require('../../../../assets/boosted.png'),
        },
    ];

     const [ActiveButton, InActiveButton] = useState(2);

     const PackageData = [
         {
             id: 1,
             OnPress: () => InActiveButton(1),
             Duration: 'Bronze',
             DurationDays: '19/10',
             Benefit: '1-2K followers',
             Active: ActiveButton === 1,
         },
         {
             id: 2,
             OnPress: () => InActiveButton(2),
             Duration: 'Gold',
             DurationDays: '19/10',
             Benefit: '1-2K followers',
             Active: ActiveButton === 2,
         },
         {
             id: 3,
             OnPress: () => InActiveButton(3),
             Duration: 'Silver',
             DurationDays: '19/10',
             Benefit: '1-2K followers',
             Active: ActiveButton === 3,
         },
     ];


      const PackageRenderItem = ({ item }) => {
          return (
              <View style={{ paddingHorizontal: 5 }}>
                  <TouchableOpacity activeOpacity={0.8} onPress={item.OnPress}>
                      <LinearGradient
                          colors={[
                              item.Active
                                  ? '#F7C900'
                                  : isDark
                                  ? '#45494D'
                                  : '#ffff',
                              item.Active
                                  ? '#EB853C'
                                  : isDark
                                  ? '#45494D'
                                  : '#ffff',
                          ]}
                          start={{ x: 1, y: 1 }}
                          end={{ x: 1, y: 0 }}
                          style={[
                              styles.PackageDetailsContainer,
                              {
                                  width: item.Active
                                      ? WIDTH / 3.46
                                      : WIDTH / 3.76,
                                  borderWidth: item.Active ? 2.28 : undefined,
                                  borderColor: item.Active
                                      ? '#FFFFFF'
                                      : undefined,
                                  paddingVertical: item.Active ? 28 : 14,
                              },
                          ]}>
                          <View style={[styles.DurationContainer]}>
                              <Text
                                  style={[
                                      styles.Duration,
                                      { color: Theme.TextColor.color },
                                  ]}>
                                  {item.Duration}
                              </Text>
                          </View>
                          <View style={[styles.DurationDaysContainer]}>
                              <Text
                                  style={[
                                      styles.DurationDays,
                                      { color: Theme.TextColor.color },
                                  ]}>
                                  {item.DurationDays}
                              </Text>
                          </View>
                          <View style={[styles.DurationTitleContainer]}>
                              <Text
                                  style={[
                                      styles.DurationTitle,
                                      { color: Theme.TextColor.color },
                                  ]}>
                                  {'days'}
                              </Text>
                          </View>
                          <View style={[styles.BenefitContainer]}>
                              <Text
                                  style={[
                                      styles.Benefit,
                                      { color: Theme.TextColor.color },
                                  ]}>
                                  {item.Benefit}
                              </Text>
                          </View>
                      </LinearGradient>
                  </TouchableOpacity>
              </View>
          );
      };

       const Theme = useThemeStyles(styleCreator);
       console.log('theme', Theme);
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
        <View
            style={[
                styles.container,
                { backgroundColor: Theme.ContainerColor.backgroundColor },
            ]}>
            <Header />
            <View
                style={[
                    styles.circle,
                    { backgroundColor: isDark ? '#303336' : Theme.ActionColor.backgroundColor },
                ]}
            />
            <View style={[styles.subcontainer]}>
                <View style={[styles.ImageContainer]}>
                    <Image
                        source={require('../../../../assets/vipcrown.png')}
                        resizeMode="contain"
                        style={[styles.image]}
                    />
                </View>
                <View>
                    <Text
                        style={[
                            styles.HeaderText,
                            { color: Theme.TextColor.color },
                        ]}>
                        Subscribe with HITHOT and get access to following
                        features
                    </Text>
                </View>
                <View style={[styles.AllDetails]}>
                    {subscribedata.map(item => {
                        console.log('item', item?.image);

                        return (
                            <View
                                style={[
                                    styles.detailssubcontainer,
                                    {
                                        backgroundColor: isDark
                                            ? '#4B545E'
                                            : Theme.ContainerColor
                                                  .backgroundColor,
                                    },
                                ]}>
                                <View style={[styles.DetailsImageContainer]}>
                                    <Image
                                        style={[styles.Detailsimage]}
                                        source={item?.image}
                                    />
                                </View>
                                <View style={[styles.DetailsTextContainer]}>
                                    <Text
                                        style={[
                                            styles.DetailsText,
                                            { color: Theme.TextColor.color },
                                        ]}>
                                        {item?.title}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
                <View style={[styles.PlansContainer]}>
                    <View style={[styles.PlansHeaderContainer]}>
                        <Text
                            style={[
                                styles.PlansHeader,
                                { color: Theme.TextColor.color },
                            ]}>
                            {'Select package'}
                        </Text>
                    </View>
                    <FlatList
                        data={PackageData}
                        renderItem={PackageRenderItem}
                        horizontal={true}
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={[
                            styles.PlansContentContainerStyle,
                        ]}
                    />
                </View>
            </View>
            <Footer />
        </View>
    );
};

export default SettingsSubscription;

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