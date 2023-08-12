import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { useNavigation } from '@react-navigation/native';
import UserProfile from '../components/UserProfile';
import { GOOGLE_MAP_APIKEY } from '@env';

const DriverHomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-white flex-1">
            <View className="p-2">
                <View className="flex flex-row gap-2 items-center">
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Grab_%28application%29_logo.svg/2560px-Grab_%28application%29_logo.svg.png'
                        }}
                    />
                    <Text className="text-sm">Welcome back Minh</Text>
                </View>
                <GooglePlacesAutocomplete
                    styles={{
                        container: { flex: 0 },
                        textInput: {
                            fontSize: 18,
                            backgroundColor: '#dddddf',
                            borderRadius: 0
                        }
                    }}
                    minLength={2}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    placeholder="Where from?"
                    fetchDetails={true}
                    returnKeyType={'search'}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            })
                        );
                        dispatch(setDestination(null));
                        console.log(details.geometry.location);

                        console.log(data.description);
                        navigation.navigate('MapScreen');
                    }}
                    query={{
                        key: GOOGLE_MAP_APIKEY,
                        language: 'vn',
                        components: 'country:vn'
                    }}
                />
                <View className="flex-col p-1">
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Favprite places </Text>
                    <View
                        style={{
                            height: 5,
                            marginHorizontal: 20,
                            borderBottomWidth: 1,
                            borderColor: '#dddddf'
                        }}></View>
                    <NavFavourites />
                </View>
            </View>
            <View style={{ flex: 0.2 }}>
                <UserProfile />
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
