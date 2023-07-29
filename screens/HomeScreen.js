import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.bg}>
            <View style={{ padding: 5 }}>
                <Image
                    style={Style}
                    source={{
                        uri: 'https://links.papareact.com/gzs'
                    }}
                />
            <GooglePlacesAutocomplete
                styles={{
                    container: { flex: 0 },
                    textInput: { fontSize: 18 }
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
                }}
                query={{
                    key: 'API KEY HERE PLS',
                    language: 'vn',
                    components: 'country:vn'
                }}
            />
            <NavOptions />
            <NavFavourites/>
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
