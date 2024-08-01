import {Image, Text, TouchableOpacity, View} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  checker: number | 'ALL' | 'NONE';
  id: number;
  title: string;
  description: string;
  faqClickHandler: (titleId: number) => void;
}

const FaqTile: React.FC<Props> = ({
  checker,
  id,
  title,
  description,
  faqClickHandler,
}) => {
  return (
    <View className=" w-full border-b border-b-white/10 py-3">
      <TouchableOpacity onPress={() => faqClickHandler(id)} className=" flex flex-row items-center justify-between">
        <Text style={{fontSize: RFValue(14)}}  className=" text-white font-medium">{title}</Text>
        {/* <TouchableOpacity onPress={() => faqClickHandler(id)}> */}
          {(checker === 'ALL' || checker === id) ? (
            <Image
              source={require('../../assets/minus.png')}
              resizeMode="contain"
              className=" w-4 h-1"
            />
          ) : (
            <Image
            source={require('../../assets/plus.png')}
              resizeMode="contain"
              className=" w-4 h-4"
            />
          )}
        {/* </TouchableOpacity> */}
      </TouchableOpacity>
      {(checker === id || checker === 'ALL') && (
        <Text style={{fontSize: RFValue(12)}}  className=" text-white/60  mt-4">{description}</Text>
      )}
    </View>
  );
};

export default FaqTile;