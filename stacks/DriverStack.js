import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriverHomeScreen from '../screens/DriverHomeScreen';

const Stack = createNativeStackNavigator();

export  default DriverStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={DriverHomeScreen}/>

        </Stack.Navigator>
    );
}
