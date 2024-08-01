import React, { useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import UserStoryTile from './UserStoryTile';
import getStory, { User } from '../../screens/Home/Story/getStory';
import { dummyStories } from '../../screens/Home/Story/DummyData';
import { scale, verticalScale } from 'react-native-size-matters';
import { ContentType } from '../../constants';
import { STACK } from '../../route';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../route/MainStack';
import useThemeStyles from '../../hooks/useThemeStyles';
import GradientText from '../GradientText';

interface Story {
    id: string;
    userName: string;
    stringUrl: string;
    seen: boolean;
}
// const dummyStories: User[] = [
//     {
//         fb_id: '',
//         userName: '',
//         firstName: '',
//         lastName: '',
//         profilePic:
//             'https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D',
//         storySeenStaus: '',
//     },
//     {
//         fb_id: '',
//         userName: '',
//         firstName: '',
//         lastName: '',
//         profilePic:
//             'https://images.unsplash.com/photo-1585071258252-369a36d89e30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D',
//         storySeenStaus: '',
//     },
//     {
//         fb_id: '',
//         userName: '',
//         firstName: '',
//         lastName: '',
//         profilePic:
//             'https://images.unsplash.com/photo-1623244727304-54995b233b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
//         storySeenStaus: '',
//     },
//     {
//         fb_id: '',
//         userName: '',
//         firstName: '',
//         lastName: '',
//         profilePic:
//             'https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D',
//         storySeenStaus: '',
//     },
//     {
//         fb_id: '',
//         userName: '',
//         firstName: '',
//         lastName: '',
//         profilePic:
//             'https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D',
//         storySeenStaus: '',
//     },
// ];

const StoriesSection: React.FC = () => {
    const [stories, setStories] = useState<User[]>([]);

    // useEffect(() => {
    //     const fetchStories = async () => {
    //         const fb_id = '99898806172469'; // Replace with the actual user Facebook ID
    //         const fetchedStories = await getStory(fb_id);
    //         setStories(fetchedStories);
    //         console.log('Stories from api', fetchedStories);
    //     };

    //     fetchStories();

    //     //setStories(dummyStories);
    // }, []);
    useEffect(() => {
        setStories(dummyStories);
    }, []);

    const navigation = useNavigation<StackNavigationType>();
    const styles = useThemeStyles(styleCreator);

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewContainer}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.addStoryContainer}
                    onPress={() => {
                        navigation.navigate(STACK.CreateContent, {
                            type: ContentType.STORY,
                        });
                    }}>
                    <Image
                        style={styles.addStoryIcon}
                        source={require('../../assets/instagram-post.png')}
                    />
                    <Text style={styles.addStoryText}>Add story</Text>
                </TouchableOpacity>
                {stories.map((story, index) => (
                    <UserStoryTile
                        key={index}
                        seen={story.storySeenStaus}
                        userName={story.userName}
                        mainUser={false} // done for dummy story
                        stringUrl={story.StoryData[0].post} //done for dummy story
                        //stringUrl={
                        // 'https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D'
                        //}
                        user={story}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const styleCreator = colors =>
    StyleSheet.create({
        scrollViewContainer: {
            backgroundColor: colors.bgColor,
        },
        container: {
            flexDirection: 'row',
            paddingHorizontal: 10,
        },
        addStoryContainer: {
            width: scale(80),
            height: verticalScale(86),
            borderRadius: scale(14),
            margin:10,
            backgroundColor: colors.storyContainerColor,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
        },
        addStoryIcon: {
            width: scale(22),
            height: verticalScale(22),
            tintColor: colors.textColor,
            marginBottom: verticalScale(8),
        },
        addStoryText: {
            color: colors.textColor,
            fontSize: 14,
        },
    });

export default StoriesSection;
