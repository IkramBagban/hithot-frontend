import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-share';
import useLocalizationStore from '../../localazation/localizationStore';
import SwitchToggle from 'react-native-switch-toggle';

const Languages = () => {
    const { toggleLanguage, language } = useLocalizationStore();
  return (
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Text>{language === 'en' ? 'English' : 'हिन्दी'}</Text>
          <SwitchToggle
              switchOn={language === 'hi'}
              onPress={toggleLanguage}
              circleColorOff="#f4f4f4"
              circleColorOn="#f4f4f4"
              backgroundColorOn="#a3d6e0"
              backgroundColorOff="#e5e1e0"
              containerStyle={{
                  marginLeft: 10,
                  width: 50,
                  height: 25,
                  borderRadius: 25,
                  padding: 5,
              }}
              circleStyle={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
              }}
          />
      </View>
  );
}

export default Languages

const styles = StyleSheet.create({})