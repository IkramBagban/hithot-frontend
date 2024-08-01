import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { swipeItemInterface } from './SwipeSection';
import useThemeStyles from '../../hooks/useThemeStyles';

const SwipeItem: React.FC<swipeItemInterface> = ({
  imgURL,
  title,
  description,
  widthFull,
  listDetails,
  smallImg
}) => {
  const {width , height} = useWindowDimensions();
  const styles = useThemeStyles(styleCreator)
  return (
    <View style={{width: width}} className=" flex-1 items-center justify-end pt-8 pb-6">

      {smallImg ? <Image
          source={{uri: imgURL}}
          resizeMode="contain"
          // style={{width: width *0.5 , height: height *0.5}}
          className={` w-[50%] h-[50%] mb-6`}
        /> : 
        <Image
        source={{uri: imgURL}}
          resizeMode="contain"
          className={`${widthFull ? "w-[80%] h-[80%]" : " w-[60%] h-[60%]"}`}
        /> }
        <View className="  justify-center w-full  px-6 mt-2 flex items-center">
        <Text style={styles.slideTitle}>
          {title}
        </Text>
        {listDetails?.length ? listDetails?.map((listText, idx) => {
          return <Text key={idx} style={styles.slidePoints}>
          {listText}
        </Text>
        }) : 
        <Text style={styles.slideDescription}>
          {description}
        </Text>}
      </View>

      
    </View>
  );
};
const styleCreator = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
        },
        slideTitle: {
            color: colors.textColor,
            fontFamily: 'Figtree-Bold',
            textAlign: 'center',
            fontSize: 32,
            width:"85%",
            marginBottom:10
        },
        slideDescription: {
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
            textAlign: 'center',
            fontSize: 16,
        },
        slidePoints: {
            color: colors.textColor,
            fontFamily: 'Figtree-Regular',
            textAlign: 'center',
            fontSize: 16,
            lineHeight: 19,
        },
    });
export default SwipeItem;