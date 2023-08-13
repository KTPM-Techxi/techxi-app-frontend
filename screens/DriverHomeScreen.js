import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, Pressable } from 'react-native';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { useNavigation } from '@react-navigation/native';
import UserProfile from '../components/UserProfile';
import { GOOGLE_MAP_APIKEY } from '@env';
import RecentDrivesHistory from '../components/Driver/RecentDrivesHistory';
import Chart from '../components/Driver/Chart';
import { Button } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const DriverHomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-white flex-1">
            <View className="p-4 flex gap-4">
                <View className="flex flex-row items-center justify-between relative">
                    <View className="absolute w-[1000px] h-[300px] bg-[#386CF0] -top-50% -left-40 rounded-3xl"></View>
                    <Text className="text-2xl font-bold text-white">Dashboard</Text>
                    <TouchableOpacity>
                        <Button
                            textColor="white"
                            icon="menu"
                            labelStyle={{ fontSize: 30 }}
                            className="bg-transparent translate-x-5">
                            {/* <Text style={{ fontSize: 10 }}></Text> */}
                        </Button>
                    </TouchableOpacity>
                </View>
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
                <View className="w-[7/8] bg-white border-gray-500 rounded-3xl flex items-center p-4 shadow-lg shadow-cyan-600 ">
                    <View className="flex-row w-full justify-between">
                        <View className="">
                            <Text className=" text-[#8a8c8f]">Wallet Balance</Text>
                            <Text className=" text-gray-700 font-bold text-[16px]">$1,291</Text>
                        </View>
                        <Pressable className="flex-row items-center text-[#1172FF] font-semibold uppercase bg-[#F4F8FF] py-[4px] px-[12px] rounded-lg ">
                            <Text className=" text-[#1172FF] font-semibold uppercase">
                                WithDraw
                            </Text>
                            <Button
                                icon="arrow-right"
                                className=""
                                textColor="#1172FF"></Button>
                        </Pressable>
                    </View>
                    <View className="h-[1.5px] w-full bg-[#b3ccd3] rounded-full py-[.8px] my-6"></View>
                    <View className="flex-row items-center justify-between w-full">
                        <Text className="text-[15px] font-medium">Payment History</Text>
                        <Text className="text-[25px]">{'>'}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DriverHomeScreen;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
});
