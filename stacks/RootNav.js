import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import CustomerStack from './CustomerStack';
import DriverStack from './DriverStack';
import { selectType } from '../slices/authSlice';
import { useSelector } from 'react-redux';

export default RootNav = () => {
    console.log('dafsdasd')
    let userType = useSelector(selectType);
    if(!userType) userType = null
    const loggedin = userType != null;
    console.log(userType + ' ' + loggedin)
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
