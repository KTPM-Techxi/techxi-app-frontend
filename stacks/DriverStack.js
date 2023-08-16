import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabs } from '../components/BottomNavigation';
import DriverMapScreen from '../screens/DriverScreens/DriverMapScreen';
const Stack = createNativeStackNavigator();

export default DriverStack = () => {
    return (
        
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Main"
                component={BottomTabs}
            />
            <Stack.Screen
                name="DriverMap"
                component={DriverMapScreen}
            />
        
        </Stack.Navigator>
    );
};
