import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, Button} from 'react-native';
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
        <SafeAreaView className='bg-green-500'>
            <View className='w-5/6 pt-6 mx-auto flex-row'>
                    <Image 
                    className='rounded-full h-10 w-10 border-white'
                    source={{uri: 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'}}/>
            </View>
            <View className='w-5/6 mt-4 mx-auto flex-auto shadow-2xl'>
                <SearchLocationInput onLocationSelect={(res) => locationSelect(res)} />
            </View>
            <View className='h-4/5 bg-white rounded-3xl shadow'>
                <View className='grid grid-cols-2'>
                    <Card className='mx-4 border-green-500'>
                        <Text>sadsda</Text>
                    </Card>
                    <Card className='mx-4 border-green-500'>
                        <Text>sadasd</Text>
                    </Card>
                    <Card className='mx-4 border-green-500'>
                        <Text>sadasd</Text>
                    </Card>
                    <Card className='mx-4 border-green-500'>
                        <Text>sadasd</Text>
                    </Card>
                </View>
            </View>
        </SafeAreaView>
        
    );
};

export default HomeScreen;
