import {
    View,
    Pressable,
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';

const DriverEarningScreen = () => {
    return (
        <SafeAreaView className="bg-white flex-1 w-full">
            {/* Contains all boxes in below View */}
            <View className="p-4 flex gap-4">
                {/* This is the blue background box */}
                <View className="flex flex-row items-center justify-between relative">
                    <View className="absolute w-[1000px] h-[300px] bg-green-300 -top-50% -left-40 rounded-3xl "></View>
                    <Text className="text-3xl font-bold text-center">Earnings</Text>
                    <TouchableOpacity>
                        <Button
                            textColor="white"
                            icon="chat-question"
                            labelStyle={{ fontSize: 30, color: 'black' }}
                            className="bg-transparent translate-x-5">
                            {/* <Text style={{ fontSize: 10 }}></Text> */}
                        </Button>
                    </TouchableOpacity>
                </View>
                {/* This is the first box (My Earnings) */}
                <Text className="text-3xl font-bold text-[#140c0c] text-center">My Earnings</Text>
                <View className="w-[7/8] bg-white rounded-3xl flex items-center p-4 shadow-lg shadow-cyan-600">
                    <Text className="text-[25px] font-extrabold text-[#FBA441] ">This week</Text>
                    <Text className="text-[45px] font-light">$340.50</Text>
                    <View className="border border-[#cfe9c5] flex w-full rounded-2xl">
                        <View className="flex-row justify-between w-full mt-2 mb-6  ">
                            <Button
                                labelStyle={{ fontSize: 30 }}
                                icon={'chart-pie'}></Button>
                            <View className="flex gap-2">
                                <Text className="">Earnings Details</Text>
                                <Text className="">Aug 1 - Aug 7</Text>
                            </View>
                            <Button
                                labelStyle={{ fontSize: 30 }}
                                icon={'arrow-right-thin-circle-outline'}></Button>
                        </View>
                        <View className="flex-row justify-between w-full mt-2 mb-6 border-t-[1px] border-[#cfe9c5]">
                            <Button
                                labelStyle={{ fontSize: 30 }}
                                icon={'chart-pie'}></Button>
                            <View className="flex gap-2">
                                <Text className="">Earnings Details</Text>
                                <Text className="">Aug 1 - Aug 7</Text>
                            </View>
                            <Button
                                labelStyle={{ fontSize: 30 }}
                                icon={'arrow-right-thin-circle-outline'}></Button>
                        </View>
                        <View className="flex-row justify-between w-full mt-2 mb-6 border-t-[1px] border-[#cfe9c5]">
                            <Button
                                labelStyle={{ fontSize: 30 }}
                                icon={'chart-pie'}></Button>
                            <View className="flex gap-2">
                                <Text className="">Earnings Details</Text>
                                <Text className="">Aug 1 - Aug 7</Text>
                            </View>
                            <Button
                                labelStyle={{ fontSize: 30 }}
                                icon={'arrow-right-thin-circle-outline'}></Button>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DriverEarningScreen;
