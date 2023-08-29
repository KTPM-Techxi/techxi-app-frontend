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
import SearchLocationInput from '../components/SearchLocationInput';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const locationSelect = (item) => {
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
        <SafeAreaView style={styles.bg}>
            <View style={{ padding: 5, flex: 0.8 }}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://links.papareact.com/gzs'
                    }}
                />
                <SearchLocationInput onLocationSelect={(res) => locationSelect(res)} />

                <View style={{ flexDirection: 'column', paddingTop: 20 }}>
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

export default HomeScreen;

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
