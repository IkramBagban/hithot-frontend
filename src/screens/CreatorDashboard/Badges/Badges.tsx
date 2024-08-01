import {
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList,
    Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getStyles from './Badges.style';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Badges: React.FC<{}> = ({}) => {
    const navigation = useNavigation();

    const BadgesData = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
    ];

    const RenderItem = () => {
        return (
            <>
                <View style={[styles.BadgeContainer]}>
                    <View style={[styles.BadgeBGContainer]}>
                        <Image
                            source={require('../../../assets/BadgeBG.png')}
                            resizeMode={'contain'}
                            style={[styles.BadgeBG]}
                        />
                        <View style={[styles.BadgeBenefitContainer]}>
                            <Text style={[styles.BadgeBenefit]}>3000K</Text>
                        </View>
                        <View style={[styles.BadgeIconContainer]}>
                            <View style={[styles.BadgeIconRadiusContainer]}>
                                <Image
                                    source={require('../../../assets/BadgeBG.png')}
                                    resizeMode={'contain'}
                                    style={[styles.BadgeIcon]}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.BadgeTitleContainer]}>
                        <Text style={[styles.BadgeTitle]}>Plays</Text>
                    </View>
                </View>
            </>
        );
    };

    const styles = getStyles();

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.HeaderContainer]}>
                    <View style={[styles.HeaderSubContainer]}>
                        <Text style={[styles.HeaderText]}>Badges earned</Text>
                        <Text style={[styles.HeaderSubText]}>View all</Text>
                    </View>
                </View>
                <View style={[styles.FlatlistContainer]}>
                    <FlatList
                        data={BadgesData}
                        renderItem={RenderItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={[styles.ContentContainerStyle]}
                        ItemSeparatorComponent={() => {
                            return (
                                <>
                                    <View style={[styles.Saparator]} />
                                </>
                            );
                        }}
                    />
                </View>
            </View>
        </>
    );
};

export default Badges;
