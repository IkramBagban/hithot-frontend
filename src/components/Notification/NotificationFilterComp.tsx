import { Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const NotificationFilterComp = () => {
    return (
        <TouchableOpacity>
            <Image
                source={require('../../assets/filter.png')}
                resizeMode="contain"
                style={{
                    width: scale(16),
                    height: verticalScale(16),
                }}
            />
        </TouchableOpacity>
    );
};

export default NotificationFilterComp;
