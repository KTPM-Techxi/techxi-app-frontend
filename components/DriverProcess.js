import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import { Icon } from 'react-native-elements';
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice';
import { useState } from 'react';

const DriverProcess = ({route, navigation}) => {
    const dispatch = useDispatch();
    const [inProgress, setInProgress] = useState(false);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const {phoneNumber, fcmToken} = route.params
    return (
        <SafeAreaView style={styles.bg}>
            <Text style={styles.greeting}>
                Price:{' '}
                {new Intl.NumberFormat('vi', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3
                }).format(travelTimeInformation.price)}
            </Text>
            <View style={styles.panel}>
                <View style={{ flexDirection: 'row', marginLeft: 30, paddingTop: 10 }}>
                    <View style={{ flexDirection: 'column', gap: 5 }}>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>o</Text>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>o</Text>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>o</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 5, gap: 5 }}>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>From</Text>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>To</Text>
                        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Customer</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 10, gap: 5 }}>
                        <Text>{origin.description}</Text>
                        <Text>{destination.description}</Text>
                        <Text>{phoneNumber}</Text>
                    </View>
                </View>
                {inProgress ? (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 30
                        }}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'green' }]}
                            onPress={() => {
                                navigation.navigate('DriverHome');

                                setInProgress(false);
                            }}>
                            <Icon
                                name="car"
                                type="font-awesome"
                                color="white"
                                size={16}
                            />
                            <Text style={{ textAlign: 'center', color: 'white' }}>Complete</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: 30
                        }}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'red' }]}
                            onPress={() => {
                                navigation.navigate('DriverHome');

                                // send http
                            }}>
                            <Icon
                                name="car"
                                type="font-awesome"
                                color="white"
                                size={16}
                            />
                            <Text style={{ textAlign: 'center', color: 'white' }}>Decline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'green' }]}
                            onPress={() => {
                                // Send http
                                setInProgress(true);
                            }}>
                            <Icon
                                name="car"
                                type="font-awesome"
                                color="white"
                                size={16}
                            />
                            <Text style={{ textAlign: 'center', color: 'white' }}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default DriverProcess;

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
        justifyContent: 'space-around',
        paddingVertical: 10,
        paddingHorizontal: 20
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
