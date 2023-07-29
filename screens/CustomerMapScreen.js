import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const CustomerMapScreen = () => {
    const mStack = createNativeStackNavigator();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={styles.menu}>
                <Icon name="menu" />
            </TouchableOpacity>
            <View style={{ flex: 0.5 }}>
                <Map />
            </View>
            <View style={{ flex: 0.5 }}>
                <mStack.Navigator screenOptions={{ headerShown: false }}>
                    <mStack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                    />
                    <mStack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                    />
                </mStack.Navigator>
            </View>
        </View>
    );
};

export default CustomerMapScreen;

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 16,
        left: 8,
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
