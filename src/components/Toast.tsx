import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import GradientText from './GradientText';
const width = Dimensions.get('window').width;
export const CustomToast = ({
    text1,
}: {
    text1?: string;
    //props?: { uuid: string };
}) => (
    <View
        style={{
            backgroundColor: 'rgba(49, 56, 64, 1)',
            flexDirection: 'row',
            paddingHorizontal: 5,
            paddingVertical: 10,

            borderRadius: 12,
            marginHorizontal: 4,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 0.99 * width,
        }}>
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={require('../../assets/icon/chat-bubble.png')}
                style={{ height: 24, width: 24, tintColor: 'white' }}
            />
            <Text style={{ color: 'white', fontSize: 14, marginLeft: 10 }}>
                {text1}
            </Text>
        </View>
        <TouchableOpacity style={{}} onPress={() => {}}>
            <GradientText
                text={'UNDO'}
                gradientColors={['#EB853C', '#F7C900']}
            />
        </TouchableOpacity>
    </View>
);
