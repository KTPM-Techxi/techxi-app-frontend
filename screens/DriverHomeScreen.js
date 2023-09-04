import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import { setDestination, setOrigin, setTravelTimeInformation } from '../slices/navSlice';
import { setType } from '../slices/authSlice';

// Maually send data:
//  - Go to testfcm.com
//  - Server key: AAAAj8UgZvw:APA91bEIhgBxNp93a1SZyl50mtaWrL6v06OlAL4k1DyujFyScczJjLHh9NaqOGMW62XwSdBPIrba1Qit6OPKspVtK5TzN956u3TWyFnBO-JVCVMHCtuXgZniTud9xYQ4RTrZO1Bb3AGq
//  - FCM Token: In the console log
//  - Input data into data field (format as {"key":"value"})

const DriverHomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleNavigate = () => {
        navigation.navigate('DriverMap');
    };
    useEffect(() => {
        const unsubscribe = messaging().onMessage(async (remoteMessage) => {
            console.log(remoteMessage);
            const data = remoteMessage.data;

            dispatch(
                setOrigin({
                    location: {
                        lat: 0, //data.pickup_location.latitude,
                        lng: 0, //data.pickup_location.longitude
                    },
                    description: 0, //data.pickup_location.description
                })
            );

            dispatch(
                setDestination({
                    location: {
                        lat: 0, //data.destination.latitude,
                        lng: 0, //data.destination.longitude
                    },
                    description: 0, //data.destination.description
                })
            );

            // dispatch(
            //     setTravelTimeInformation({
            //         price: { text: '0', value: data.total_price },
            //         distance: { text: '0', value: data.total_distance },
           //          
            //     })
            // );

            // navigation.navigate('DriverMap', {fcmToken: data.fcmToken, phoneNumber: data.phoneNumber});
            // navigation.navigate('DriverMap');

        });

        return unsubscribe;
    }, []);
    return (
        <SafeAreaView className="bg-white flex-1">
            <ScrollView>
                {/* Contains all boxes in below View */}
                <View className="p-4 flex gap-4">
                    {/* This is the blue background box */}
                    <View className="flex flex-row items-center justify-between relative">
                        <View className="absolute w-[1000px] h-[300px] bg-[#386CF0] -top-50% -left-40 rounded-3xl "></View>
                        <Text className="text-2xl font-bold text-white">Dashboard</Text>
                        <TouchableOpacity>
                            <Button
                                onPress={()=>{
                                    dispatch(setType(null))
                                }}
                                textColor="white"
                                icon="menu"
                                labelStyle={{ fontSize: 30 }}
                                className="bg-transparent translate-x-5">
                                {/* <Text style={{ fontSize: 10 }}></Text> */}
                            </Button>
                        </TouchableOpacity>
                    </View>
                    {/* This is the first box (Today) */}
                    <View className="w-[7/8] bg-white border-gray-500 rounded-3xl flex items-center p-4 shadow-lg shadow-cyan-600">
                        <Text className="text-xl text-[#DEE1E4]">Today</Text>
                        <Text className="text-[45px] font-extrabold ">$249.21</Text>
                        <View className="h-[1.5px] w-full bg-[#2291b3] rounded-full py-[1.5px] my-6"></View>
                        <View className="flex-row w-full justify-between">
                            <View className="flex-row items-center -ml-4">
                                <Button
                                    icon={'arrow-split-vertical'}
                                    textColor="#1172FF"
                                    className=" mr-auto text-green-200 z-10"></Button>
                                <Text className="text-gray-700 text-[19px] font-medium -ml-6">
                                    14 Rides
                                </Text>
                            </View>
                            <View className="flex-row items-center">
                                <Button
                                    icon={'clock'}
                                    textColor="#1172FF"
                                    className="text-green-200 z-10"></Button>
                                <Text className="text-gray-700 text-[19px] font-medium -ml-6">
                                    23h 48m
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* This is the second box (Wallet) */}
                    <View className="w-[7/8] bg-white border-gray-500 rounded-3xl flex items-center p-4 shadow-lg shadow-cyan-600 ">
                        <View className="flex-row w-full justify-between mt-2 mb-6">
                            <View className="gap-2">
                                <Text className=" text-[#8a8c8f]  text-[16px]">Wallet Balance</Text>
                                <Text className=" text-gray-700 font-bold text-[16px]">$1,291</Text>
                            </View>
                            <Pressable className="flex-row items-center text-[#1172FF] font-semibold uppercase bg-[#F4F8FF] py-[4px] pl-[12px] rounded-lg ">
                                <Text className=" text-[#1172FF] font-semibold uppercase">
                                    WithDraw
                                </Text>
                                <Button
                                    icon="arrow-right"
                                    className="-ml-6 translate-x-4"
                                    textColor="#1172FF"></Button>
                            </Pressable>
                        </View>
                        <View className="h-[1.5px] w-full bg-[#b3ccd3] rounded-full py-[.8px] mb-2"></View>
                        <View className="flex-row items-center justify-between w-full">
                            <Text className="text-[15px] font-medium">Payment History</Text>
                            <Text className="text-[25px]">{'>'}</Text>
                        </View>
                    </View>
                    {/* This is the third box (Ongoing Trip) */}
                    <View className="w-[7/8] bg-white border-gray-500 rounded-3xl flex items-center p-4 shadow-lg shadow-cyan-600  ">
                        <View className="flex-row w-full justify-between items-center">
                            <Text className=" text-[#8a8c8f] text-[16px]">Ongoing Trip</Text>
                            <Button
                                icon="dots-vertical"
                                className="translate-x-8"
                                labelStyle={{ fontSize: 30 }}></Button>
                        </View>
                        <View className="flex-row w-full justify-between">
                            <View className="flex-row gap-4 items-center">
                                <Image
                                    className="w-[40px] h-[40px] rounded-full"
                                    source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                                    }}></Image>
                                <View className="flex ">
                                    <Text className=" text-[#8a8c8f]  text-[16px]">
                                        Megan Weaver
                                    </Text>
                                    <Text className=" text-green-500 font-bold text-[16px]">
                                        ★ 4.9
                                    </Text>
                                </View>
                            </View>
                            <Pressable
                                onPress={handleNavigate}
                                className="flex-row items-center text-[#1172FF] font-semibold uppercase bg-[#F4F8FF] py-[4px] pl-[12px] rounded-lg">
                                <Text className=" text-[#1172FF] font-semibold uppercase">
                                    Navigation
                                </Text>
                                <Button
                                    icon="arrow-right"
                                    className="-ml-6 translate-x-4"
                                    labelStyle={{ fontSize: 25 }}
                                    textColor="#1172FF"></Button>
                            </Pressable>
                        </View>
                        <View className="h-[1.5px] w-full bg-[#b3ccd3] rounded-full py-[.8px] my-6"></View>
                        <View className="flex-row items-center justify-between w-full">
                            <Text className="text-[15px] font-medium">Payment History</Text>
                            <Text className="text-[25px]">{'>'}</Text>
                        </View>
                    </View>
                    {/* This is the fourth box (Previous Trip) */}
                    <View className="w-[7/8] bg-white border-gray-500 rounded-3xl flex items-center p-4 shadow-lg shadow-cyan-600 ">
                        <View className="flex-row w-full justify-between items-center">
                            <View className="">
                                <Text className=" text-[#8a8c8f] text-[16px]">Previous Trip</Text>
                            </View>
                            <Button
                                icon="dots-vertical"
                                className="translate-x-8"
                                labelStyle={{ fontSize: 30 }}></Button>
                        </View>
                        <View className="flex-row w-full justify-between h-[100px]">
                            <Text>This should contains the MAP</Text>
                        </View>
                        <View className="flex-row items-center justify-between w-full">
                            <View className="flex-row gap-4 items-center">
                                <Image
                                    className="w-[40px] h-[40px] rounded-full"
                                    source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                                    }}></Image>
                                <View className="flex ">
                                    <Text className=" text-[#8a8c8f]  text-[16px]">
                                        Megan Weaver
                                    </Text>
                                    <Text className=" text-green-500 font-bold text-[16px]">
                                        ★ 5.0
                                    </Text>
                                </View>
                            </View>
                            <View className="">
                                <Text className=" text-[#8a8c8f]  text-[16px]">Trip Total</Text>
                                <Text className=" text-green-500 font-bold text-[16px]">$15</Text>
                            </View>
                        </View>
                        <View className="h-[1.5px] w-full bg-[#b3ccd3] rounded-full py-[.8px] my-6"></View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DriverHomeScreen;
