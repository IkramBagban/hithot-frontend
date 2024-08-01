import { View, FlatList, TouchableOpacity, Text, Image, Linking, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import getStyles from './NMH.style'; // Saparate Style //
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../../../../../../config';
import useThemeStyles from '../../../../../../../hooks/useThemeStyles';

// Need More Help Component //

const NMH: React.FC = () => {
    const navigation = useNavigation();

    const Data = [
        {
            id: 1,
            Title: 'Call us at',
            Icon: require('../../../../../../../assets/phoneIc.png'),
            SubTitle: '+91 9872073558',
        },
        {
            id: 2,
            Title: 'For support',
            Icon: require('../../../../../../../assets/emailIc.png'),
            SubTitle: 'Support@hithot.live',
        },
        {
            id: 3,
            Title: 'Whatsapp us at',
            Icon: require('../../../../../../../assets/whatsapp.png'),
            SubTitle: '+91 9872073558',
            
        },
    ];

     const handleCall = () => {
         const phoneNumber = '+919872073558';
         Linking.openURL(`tel:${phoneNumber}`);
     };

  const handleEmail = () => {
      const email = 'Support@hithot.live';
      Linking.openURL(`mailto:${email}`);
  };

  const handleWhatsApp = () => {
      const whatsappURL =
          'https://api.whatsapp.com/send?phone=919872073558&text=Hey%20I%20am%20Facing%20an%20issue%20in%20my%20app.%20Help%20!';
      Linking.openURL(whatsappURL);
  };

  const handlePress = (id: number) => {
      switch (id) {
          case 1:
              handleCall();
              break;
          case 2:
              handleEmail();
              break;
          case 3:
              handleWhatsApp();
              break;
          default:
              break;
      }
  };

    const RenderItem = ({ item }) => {

        return (
            <>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handlePress(item.id)}>
                    <View style={[styles.DataContainer]}>
                        <View style={[styles.TitleContainer]}>
                            <Text
                                style={[
                                    styles.Title,
                                    { color: Theme.TextColor.color },
                                ]}>
                                {item.Title}
                            </Text>
                        </View>
                        <View style={[styles.IconAndSubTitleContainer]}>
                            <View style={[styles.IconContainer]}>
                                <Image
                                    source={item.Icon}
                                    resizeMode={'contain'}
                                    style={[styles.Icon,{tintColor:item?.id == 3 ? null :Theme.IconColor.tintColor}]}
                                />
                            </View>
                            <View style={[styles.SubTitleContainer]}>
                                <Text
                                    style={[
                                        styles.SubTitle,
                                        { color: Theme.TextColor.color },
                                    ]}>
                                    {item.SubTitle}
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        );
    };

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
                <View style={[styles.HeaderContainer]}>
                    <Text style={[styles.HeaderText,{color:Theme.TextColor.color}]}>{'Need more help?'}</Text>
                </View>
                <FlatList
                    data={Data}
                    renderItem={RenderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[
                        styles.FlatListContentContainerStyle,
                    ]}
                    ItemSeparatorComponent={() => (
                        <View style={[styles.SeparatorContainer]} />
                    )}
                />
            </View>
        </>
    );
};

export default NMH;

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
