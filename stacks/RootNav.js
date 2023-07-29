import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import CustomerStack from './CustomerStack';
import DriverStack from './DriverStack';
import { selectType } from '../slices/authSlice';

export default RootNav = () => {
    const userType = selectType();
    const loggedin = userType != null;
    if (loggedin) {
        if (userType) {
            return <CustomerStack />;
        } else {
            return <DriverStack />;
        }
    } else {
        return <AuthStack />;
    }
};
