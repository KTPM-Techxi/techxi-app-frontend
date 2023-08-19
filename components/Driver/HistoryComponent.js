import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { Button, IconButton, MD3Colors } from 'react-native-paper';

const TextInfo = ({ primaryText, secondaryText, icon = {} }) => {
    return (
        <View className="flex">
            <View className="flex-row items-center ">{primaryText}</View>
            <View className="flex-row items-center ">{secondaryText}</View>
        </View>
    );
};

const HistoryItem = ({ imgSrc, primaryText, secondaryText, style, icon, secondaryIcon }) => {
    return (
        <SafeAreaView className="flex-row bg-white py-4 px-2">
            <Image
                source={imgSrc}
                className={`min-w-[60px] h-[60px] rounded-full object-cover ${style}`}
            />
            <TextInfo
                primaryText={
                    <>
                        {icon}
                        <Text className="font-bold capitalize text-[16px]">{primaryText}</Text>
                    </>
                }
                secondaryText={
                    <>
                        {secondaryIcon}
                        {secondaryText}
                    </>
                }
            />
        </SafeAreaView>
    );
};

const HistoryComponent = () => {
    return (
        <View className="flex bg-green-300 border-b border-emerald-300">
            <View className="rounded overflow-hidden">
                <HistoryItem
                    imgSrc={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}
                    primaryText="Mrs. Diana Milkzusk"
                    secondaryText={
                        <Text className="text-gray-400 text-[14px] max-w-[260px]">
                            Pickup - 2023 Ford Ecosport
                        </Text>
                    }
                    style="mr-4 items-center"
                />
                <HistoryItem
                    imgSrc={{
                        uri: 'https://images2.thanhnien.vn/Uploaded/trungnq/2022_10_29/1-2829.jpg'
                    }}
                    style="rounded-2xl w-[100px] h-[100px] rounded mr-2"
                    primaryText="8.30 AM, Mar 23 2020"
                    secondaryText={
                        <Text className="text-gray-400 text-[14px] max-w-[180px] whitespace-nowrap text-ellipsis">
                            1621 Ruelle De Grace, Baton Rouge
                        </Text>
                    }
                    icon={
                        <IconButton
                            icon="clock-time-five"
                            // color={MD3Colors.error0}
                        />
                    }
                    secondaryIcon={
                        <IconButton
                            icon="map-marker"
                            // color={MD3Colors.error0}
                        />
                    }
                />
            </View>
        </View>
    );
};

export default HistoryComponent;
