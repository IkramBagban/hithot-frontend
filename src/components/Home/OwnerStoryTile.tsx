import { Image, ImageSourcePropType, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CircleUrlProfile from '../Feed/CircleUrlProfile';
// import Plussign from "../../assets/Pl"
// import plussign from './pluststory.png'

interface Props {
    seen: boolean;
    userName: string;
    userprofile?: ImageSourcePropType;
    mainUser?: boolean;
    hideUserName?: boolean;
    stringUrl?: string;
}

const OwnerStoryTile = () => {
    return (
        <View className=" flex items-center w-20 h-20 bg-gray-400 place-content-center justify-center rounded-md mx-3">
            <Image
                source={require('../../assets/pluststory.png')}
                className="h-5 w-5 "
            />
            <Text className="text-white ">Add story</Text>
        </View>
    );
};

export default OwnerStoryTile;
