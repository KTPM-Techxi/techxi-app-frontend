import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import 'react-native-gesture-handler';
import CustomerMapScreen from '../screens/CustomerMapScreen';
import StatScreen from '../screens/StatScreen';

export default CustomerStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="MapScreen"
                component={CustomerMapScreen}
            />
            <Stack.Screen
                name="StatScreen"
                component={StatScreen}
            />
        </Stack.Navigator>
    );
};
