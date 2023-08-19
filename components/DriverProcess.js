import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import { Icon } from 'react-native-elements';

const DriverProcess = ({ navigation, param }) => {
    const dispatch = useDispatch();
    // const navigation = useNavigation();
    const [inProgress, setInProgress] = useState(false);

    return (
        <SafeAreaView style={styles.bg}>
            <Text style={styles.greeting}>Price: {param?.price}</Text>
            <View style={styles.panel}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>o</Text>
                        <Text>o</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>From</Text>
                        <Text>To</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>Origin</Text>
                        <Text>Destination</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Customer No</Text> <Text>Phone number</Text>
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
