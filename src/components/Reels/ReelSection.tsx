import { FlatList, View, useWindowDimensions, ViewToken } from 'react-native';
import ReelTile from './ReelTile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';

export interface ReelDataInterface {
    id: string;
    video: string;
    thum?: string;
}

const ReelData: ReelDataInterface[] = [
    {
        id: '2166979',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/thum/1714644062521_d73df1df-59b1-4c0f-84cd-1bb53eef6a5c.jpg',
    },
    {
        id: '2166959',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/thum/1714634131232_8d885e59-cace-4307-9f1a-9a7ad8501d8b.jpg',
    },
    {
        id: '2166970',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/video/1714644062521_d73df1df-59b1-4c0f-84cd-1bb53eef6a5c.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/thum/1714644062521_d73df1df-59b1-4c0f-84cd-1bb53eef6a5c.jpg',
    },
    {
        id: '21669791',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702463197501_5ca83a62-b37b-44e1-bebc-9df8e803b898.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/thum/1714644062521_d73df1df-59b1-4c0f-84cd-1bb53eef6a5c.jpg',
    },
    {
        id: '21669592',
        video: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/December2023/video/1702008992077_bc1cce13-c424-43db-bffb-1527f79d7a7d.mp4',
        thum: 'https://dyama87th0e31.cloudfront.net/API/UpLoad/UpLoad/May2024/thum/1714634131232_8d885e59-cace-4307-9f1a-9a7ad8501d8b.jpg',
    },
];

const ReelSection = () => {
    const [currentIndex, setCurrentIndex] = useState<string>(ReelData[0].id);
    const { height } = useWindowDimensions();
    const { top } = useSafeAreaInsets();

    const flatListRef = useRef<FlatList>(null);

    // const onViewableItemsChanged = (item: ViewToken[]) => {
    //     if (item.length > 0) {
    //         setCurrentIndex(item[0].index || 0);
    //     }
    // };

    const scrollToIndex = (index: number) => {
        flatListRef.current?.scrollToIndex({ index, animated: true });
    };
    const bottomTabHeight = useBottomTabBarHeight();

    const onViewRef = useRef(
        (viewableItems: {
            viewableItems: ViewToken[];
            changed: ViewToken[];
        }) => {
            if (viewableItems?.viewableItems?.length > 0)
                setCurrentIndex(
                    viewableItems.viewableItems[0]?.item.id || ReelData[0].id,
                );
        },
    );

    return (
        <View style={{ height: height + top }} className="w-full bg-black">
            <FlatList
                // removeClippedSubviews={true}
                ref={flatListRef}
                data={ReelData}
                renderItem={({ item, index }) => (
                    <ReelTile
                        index={index}
                        data={item}
                        scrollHandler={scrollToIndex}
                        // isVisible={currentIndex === index}
                        viewableItem={currentIndex}
                    />
                )}
                keyExtractor={item => item.id}
                pagingEnabled={true}
                onViewableItemsChanged={onViewRef.current}
                maxToRenderPerBatch={3}
                // onViewableItemsChanged={data =>
                //     onViewableItemsChanged(data.viewableItems)
                // }
                viewabilityConfig={{ itemVisiblePercentThreshold: 5 }}
            />
        </View>
    );
};

export default ReelSection;
