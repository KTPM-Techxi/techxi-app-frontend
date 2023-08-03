import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';
import {GOOGLE_MAP_APIKEY} from '@env'
const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.bg}>
            <TouchableOpacity
                onPress={() => {
                    // Open modal
                    //Add location to redux
                }}
                style={styles.menu}>
                <Icon name="menu" />
            </TouchableOpacity>
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
                        }}
                        query={{
                            key: GOOGLE_MAP_APIKEY,
                            language: 'vn',
                            components: 'country:vn'
                        }}
                    />
                </View>
                <View style={{height: 200}}>
                <NavFavourites isOrigin={false}/>

                </View>
                <View style={{flexDirection:'row',justifyContent: 'center', paddingBottom: 30}}
                    >
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
        flex: 1
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 50,
        flexDirection: 'row',
        width: 150,
        justifyContent:'space-around',
        paddingVertical: 10,
        paddingHorizontal:20
    },
    menu: {
        position: 'absolute',
        top: 2,
        right: 8,
        backgroundColor: '#a9a9a9',
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
