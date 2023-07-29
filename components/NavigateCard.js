import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.bg}>
            <Text style={styles.greeting}>Hello, User</Text>
            <View style={styles.panel}>
                <View>
                    <GooglePlacesAutocomplete
                        styles={{
                            container: { flex: 0, backgroundColor: 'white', paddingTop: 20 },
                            textInput: {
                                fontSize: 18,
                                backgroundColor: '#dddddf',
                                borderRadius: 0
                            },
                            textInputContainer: {
                                paddingHorizontal: 20,
                                paddingBottom: 0
                            }
                        }}
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType={'search'}
                        enablePoweredByContainer={false}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        placeholder="Where to?"
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                })
                            );
                            navigation.navigate('RideOptionsCard');
                        }}
                        query={{
                            key: 'API KEY HERE',
                            language: 'vn',
                            components: 'country:vn'
                        }}
                    />
                </View>
                <NavFavourites />
                <View
                    style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        justifyContent: 'space-evenly',
                        paddingVertical: 2
                    }}
                    className="mt-auto border-t borger-gray-100">
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('RideOptionsCard');
                        }}>
                        <Icon
                            name="car"
                            type="font-awesome"
                            color="white"
                            size={16}
                        />
                        <Text style={{ textAlign: 'center', color: 'white' }}>Ride</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#ffffff',
        flexGrow: 1
    },
    greeting: {
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 30
    },
    panel: {
        borderTopWidth: 1,
        borderColor: '#a9a9a9',
        flexShrink: 1
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 50,
        flexDirection: 'row',
        width: 24,
        paddingHorizontal: 4,
        paddingVertical: 3,
        justifyContent: 'space-between'
    }
});
