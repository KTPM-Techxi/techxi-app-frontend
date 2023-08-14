import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import 'react-native-gesture-handler';
import CustomerMapScreen from '../screens/CustomerMapScreen';

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
        </Stack.Navigator>
    );
};
