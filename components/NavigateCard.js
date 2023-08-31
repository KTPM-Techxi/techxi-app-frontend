import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';
import { GOOGLE_MAP_APIKEY } from '@env';
import SearchLocationInput from './SearchLocationInput';
const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const selectLocation =(item)=>{
        dispatch(
            setDestination({
                location: item.geometry.location,
                description: item.name
            })
        );
    }

    return (
        <SafeAreaView className='bg-green-500' style={styles.bg}>
            <TouchableOpacity
                className='bg-green-300'
                onPress={() => {
                    // Open modal
                    //Add location to redux
                }}
                style={styles.menu}>
                <Icon name="menu" />
            </TouchableOpacity>
            <Text className='text-white font-bold p-2' style={styles.greeting}>Your Destination</Text>
            <View className='bg-white' style={styles.panel}>
                <View className='w-4/5 mx-auto my-2'>
                    <SearchLocationInput onLocationSelect={res => selectLocation(res)} />
                    
                </View>
                <View style={{ height: 200 }}>
                    <NavFavourites isOrigin={false} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                    className ='bg-green-600'
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('RideOptionsCard');
                        }}>
                        <Icon
                            className='ml-8 mr-2'
                            name="car"
                            type="font-awesome"
                            color="white"
                            size={16}
                        />
                        <Text className='font-bold'style={{ textAlign: 'center', color: 'white' }}>Ride</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const styles = StyleSheet.create({
    bg: {
        flexGrow: 1
    },
    greeting: {
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 22
    },
    panel: {
        borderTopWidth: 1,
        borderColor: '#a9a9a9',
        flex: 1
    },
    button: {
        borderRadius: 50,
        flexDirection: 'row',
        width: 150,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    menu: {
        position: 'absolute',
        top: 6,
        right: 8,
        zIndex: 50,
        padding: 3,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6 
    }
});
