import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DriverRegisterScreen from '../screens/DriverRegisterScreen';

const Stack = createNativeStackNavigator();

export default  AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
            <Stack.Screen name='DriverRegister' component={DriverRegisterScreen}/>

        </Stack.Navigator>
    );
}
