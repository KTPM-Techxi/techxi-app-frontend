import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { useNavigation } from '@react-navigation/native';
import UserProfile from '../components/UserProfile';
import { GOOGLE_MAP_APIKEY } from '@env';
import SearchLocationInput from '../components/SearchLocationInput';
import { Icon } from 'react-native-elements';
import { Card } from '@rneui/themed';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const locationSelect = (item) => {
        console.log(item.geometry)
        dispatch(
            setOrigin({
                location: item.geometry.location,
                description: item.name
            })
        );
        dispatch(setDestination(null));
        navigation.navigate('MapScreen');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
        <SafeAreaView className='flex-1 bg-green-500'>
            <View className='w-5/6 pt-6 mx-auto flex-row align-middle justify-between'>
                    <View className='align-middle'><FontAwesomeIcon name="bars" size={30} color="white" /></View>
                    <View className='flex-row '>
                        <Text className='text-white font-extrabold mx-2 my-auto'>Hello Khang</Text>
                        <Image 
                        className='align-middle rounded-full h-8 w-8 border-white'
                        source={{uri: 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'}}/>
                    </View>
            </View>
            <View className='w-1/5 mt-4 mx-auto'>
            <Image 
                        className='align-middle h-8 w-20 border-white'
                        source={{uri: 'https://assets.grab.com/wp-content/uploads/media/ir/logo/Grab_Final_Master_Logo_2021_RGB_(white).png'}}/>
            </View>
            <View className='flex-row mt-4 mx-6'>
                <View className='w-3/5 ml-4 flex-auto shadow-2xl'>
                    <SearchLocationInput onLocationSelect={(res) => locationSelect(res)} />
                </View>
                <View className='w-1/5 shadow-2xl flex justify-end'>
                    <View className ='flex-row my-auto mb-5 mx-auto rounded-md bg-green-600 border-2 border-green-400 p-2'>
                        <FontAwesomeIcon name="star" size={20} color="yellow" /></View>
                </View>
            </View>
            <View className='mt-6 h-3/4 bg-white rounded-3xl'>
                <View className='mx-6 mt-3 flex-row justify-between'>
                    <Text className='font-extrabold text-lg my-auto'>Transportation</Text>
                    <Text className='font-thin my-auto'>See all</Text>
                </View>
                <View className='mx-4 flex-row flex-wrap justify-around'>
                    <View className='rounded-lg my-2 border-2 bg-green-400 border-green-500 mt-2 w-2/5 h-2/5'>
                        <Image 
                        className='h-1/2 w-3/4 mx-auto mt-2 mb-1'
                        source={{uri: 'https://powersteam.vn/wp-content/uploads/2023/07/toyota-vios-2023-dan-dau-thang-6-powersteam.jpg'}}/>
                        <Text className='mx-auto font-semibold'>4 - Seated Car</Text>
                        <View className='w-3/5 justify-around rounded-3xl p-1 my-2 mx-auto flex-row border-green-300 bg-green-600 border-2'>
                            <Text className='text-white font-bold'>Book</Text>
                            <FontAwesomeIcon name="car" size={20} color="white"/>
                        </View>
                    </View>
                    <View className='rounded-lg my-2 border-2 bg-green-400 border-green-500 mt-2 w-2/5 h-2/5 '>
                        <Image  
                        className='h-1/2 w-3/4 mx-auto mt-2 mb-1'
                        source={{uri: 'https://files01.danhgiaxe.com/6u8CIs-FAk2nBodSx1X7xaMxzyE=/fit-in/1280x0/20220726/avanaza_8_-110928.jpg'}}/>
                        <Text className='mx-auto font-semibold'>7 - Seated Car</Text>
                        <View className='w-3/5 justify-around rounded-3xl p-1 my-2 mx-auto flex-row border-green-300 bg-green-600 border-2'>
                            <Text className='text-white font-bold'>Book</Text>
                            <FontAwesomeIcon name="car" size={20} color="white"/>
                        </View>
                    </View>
                    <View className='rounded-lg my-2 border-2 bg-green-400 border-green-500 mt-2 w-2/5 h-2/5 '>
                        <Image 
                        className='h-1/2 w-3/4 mx-auto mt-2 mb-1'
                        source={{uri: 'https://congcutot.vn/uploads/news/huongdan/xe-may/luu-y-su-dung-xe-may.jpg'}}/>
                        <Text className='mx-auto font-semibold'>MotorBike</Text>
                        <View className='w-3/5 justify-around rounded-3xl p-1 my-2 mx-auto flex-row border-green-300 bg-green-600 border-2'>
                            <Text className='text-white font-bold'>Book</Text>
                            <FontAwesomeIcon name="car" size={20} color="white"/>
                        </View>
                    </View>
                    <View className='rounded-lg my-2 border-2 bg-green-400 border-green-500 mt-2 w-2/5 h-2/5 '>
                        <Image 
                        className='h-1/2 w-3/4 mx-auto mt-2 mb-1'
                        source={{uri: 'https://giaohangtietkiem.vn/wp-content/uploads/2018/06/Xe-t%E1%BA%A3i.png'}}/>
                        <Text className='mx-auto font-semibold'>Delivery</Text>
                        <View className='w-3/5 justify-around rounded-3xl p-1 my-2 mx-auto flex-row border-green-300 bg-green-600 border-2'>
                            <Text className='text-white font-bold'>Book</Text>
                            <FontAwesomeIcon name="car" size={20} color="white"/>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default HomeScreen;
