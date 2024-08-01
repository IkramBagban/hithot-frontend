import { Dimensions, FlatList, StatusBar } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './LiveRoom.style'; // Saparate Style //
import Header from './Header/Header';
import VideoView from './VideoView/VideoView';
import Footer from './Footer/Footer';

const LiveRoom: React.FC = () => {
    const WIDTH = Dimensions.get('screen').width;
    const HEIGHT = Dimensions.get('screen').height;

    const Data = [
        {
            id: 1,
        },
        // {
        //     id: 2,
        // },
        // {
        //     id: 3,
        // },
        // {
        //     id: 4,
        // },
    ];

    const RenderItem = ({ item }) => {
        return (
            <>
                <LinearGradient
                    colors={['#21262B', '#21262B']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{ width: WIDTH, height: HEIGHT }}>
                    {/* Render Header Component */}
                    <Header />
                    {/* Render Videoview Component */}
                    <VideoView />
                    {/* Render Footer Component */}
                    <Footer />
                </LinearGradient>
            </>
        );
    };

    const styles = getStyles();

    return (
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <FlatList
                bounces={false}
                data={Data}
                renderItem={RenderItem}
                pagingEnabled={true}
                style={{ backgroundColor: 'red' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flex: 1 }}
            />
        </>
    );
};

export default LiveRoom;
