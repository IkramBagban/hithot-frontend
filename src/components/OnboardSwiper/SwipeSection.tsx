import {FlatList, View, Animated, Image, ImageSourcePropType, useWindowDimensions, StyleSheet} from 'react-native';
import SwipeItem from './SwipeItem';
import {useContext, useRef} from 'react';
import SwipeIndicator from './SwipeIndicator';
import useThemeStyles from '../../hooks/useThemeStyles';
import { ThemeContext } from '../../theme/ThemeContext';
import { Colors } from '../../theme/Colors';



export interface swipeItemInterface {
    id: string;
    // imgURL: ImageSourcePropType;
    imgURL: string;
    title: string;
    description?: string;
    widthFull?: boolean;
    listDetails?: string[];
    smallImg?:boolean;
  }
  
  export const swiperData: swipeItemInterface[] = [
    {
      id: '45',
      // imgURL: require('../../assets/onboardModel1.png'),
      imgURL: "https://res.cloudinary.com/krishanucloud/image/upload/v1714143782/onboardModel1_skqsqg.png",
      title: 'Be you. Without limits.',
      description: 'Next gen social media app',
      widthFull: true
    },
    {
      id: '18',
      // imgURL: require('../../assets/earnmoney.png'),
      imgURL: "https://res.cloudinary.com/krishanucloud/image/upload/v1714143795/earnmoney_oqx9gp.png",
      title: 'Get paid for your content you post',
      description: 'Create exclusive content yourself, gain subscribers, and make money.',    },
    {
      id: '07',
      // imgURL: require('../../assets/twoMobile.png'),
      imgURL: "https://res.cloudinary.com/krishanucloud/image/upload/v1714143793/twoMobile_dpfvbl.png",
      title: 'How to get monetized?',
      listDetails: [
        'There three ways to get monetized',
        '1. Subcribe',
        '2. Love posts',
        '3. Unlock posts'
      ],
      smallImg: true
    },
  ];
  

const SwipeSection = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions()
  const styles = useThemeStyles(styleCreator)
  const {isDark}=useContext(ThemeContext)
  return (
    <View style={styles.container}>
      <FlatList
        data={swiperData}
        renderItem={({item}) => (
          <SwipeItem
            title={item.title}
            imgURL={item.id === '45' && !isDark ?'https://i.postimg.cc/PJB7WMKJ/pngegg-1.png' :item.imgURL}
            description={item.description}
            id={item.id}
            widthFull={item.widthFull}
            listDetails={item.listDetails}
            smallImg={item.smallImg}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={item => item.id}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />
      <View style={styles.swipeIndicator}>
        <SwipeIndicator data={swiperData} scrollX={scrollX} />
      </View>
      <View style={styles.appTitleView}>
        <Image
          source={{uri: "https://res.cloudinary.com/krishanucloud/image/upload/v1714185654/hithotwhitelogo_qxww23.png"}}
          style={[{width: width*0.5, height: 56 },!isDark && {tintColor:Colors.primaryBlack}]}
          resizeMode="contain"
          // className="w-[50%] h-14"
        />
      </View>
    </View>
  );
};

const styleCreator = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
        },
        appTitleView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 50,
            left: 0,
            right: 0,
        },
        swipeIndicator: {
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
        },
    });
export default SwipeSection;