import { View, FlatList, Image, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import getStyles from './Footer.style'; // Saparate Style //
import ActionButtons from './ActionButtons/ActionButtons';
import { ThemeContext } from '../../../theme/ThemeContext';

const Footer: React.FC = () => {
    // All State's //

    const [messages, setMessages] = useState<string[]>([]);

    const handleSendMessage = (message: string) => {
        setMessages(prevMessages => [...prevMessages, message]);
    };

    const RenderItem = ({ item }) => {
        return (
            <>
                <View style={[styles.DetailsContainer]}>
                    <View style={[styles.ImageContainer]}>
                        <View style={[styles.ImageRadiusContainer]}>
                            <Image
                                source={require('../../../assets/demoProfile.png')}
                                style={[styles.Image]}
                            />
                        </View>
                    </View>
                    <View style={[styles.TitleAndCommentContainer]}>
                        <View style={[styles.TitleContainer]}>
                            <Text style={[styles.TitleText]}>MoZuki</Text>
                        </View>
                        <View style={[styles.CommentContainer]}>
                            <Text style={[styles.CommentText]}>{item}</Text>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    const styles = getStyles();

    const { isDark } = useContext(ThemeContext);

    return (
        <>
            <View style={[styles.Container]}>
                <View style={[styles.FlatListContainer]}>
                    <FlatList
                        bounces={false}
                        data={messages}
                        renderItem={RenderItem}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={[styles.ContentContainerStyle]}
                    />
                    <View
                        style={{
                            width: '100%',
                            position: 'absolute',
                            bottom: 0,
                            zIndex: -1,
                        }}>
                        <Image
                            source={isDark? require('../../../assets/livedownshadow.png') : require('../../../assets/livedownshadowWhite.png')}
                        />
                    </View>
                </View>
                {/* Render ActionButtons Component */}
                <ActionButtons onSendMessage={handleSendMessage} />
            </View>
        </>
    );
};

export default Footer;
