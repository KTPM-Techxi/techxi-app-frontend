import { View, Text, Image } from 'react-native';
import React from 'react';

const TextInfo = ({ primaryText, secondaryText }) => {
    return (
        <View className="flex flex-col ">
            <Text className="font-bold capitalize text-xl">{primaryText}</Text>
            <Text className="capitalize mb-1">{secondaryText}</Text>
        </View>
    );
};

const HistoryItem = ({ imgSrc, primaryText, secondaryText, style }) => {
    return (
        <View className="flex-row items-center bg-yellow-500 rounded-lg p-4 my-1">
            <Image
                source={imgSrc}
                className={`w-12 h-full rounded-full object-cover ${style} mr-4`}
            />
            <TextInfo
                primaryText={primaryText}
                secondaryText={secondaryText}
            />
        </View>
    );
};

const HistoryComponent = () => {
    return (
        <View className="flex bg-blue-300 p-4 rounded-3xl">
            <HistoryItem
                imgSrc={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}
                primaryText="Mrs. Diana Milkzusk"
                secondaryText="Pickup - 2023 Ford Ecosport"
            />
            <HistoryItem
                imgSrc={{
                    uri: 'https://images2.thanhnien.vn/Uploaded/trungnq/2022_10_29/1-2829.jpg'
                }}
                style="rounded-2xl w-[100px] h-[100px]"
                primaryText="8.30 AM, Mar 23 2020"
                secondaryText="1621 Ruelle De Grace, Baton Rouge"
            />
        </View>
    );
};

export default HistoryComponent;
