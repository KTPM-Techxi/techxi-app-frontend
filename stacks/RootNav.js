import React from 'react';

import AuthStack from './AuthStack';
import CustomerStack from './CustomerStack';
import { selectType, setFCM } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import DriverStack from './DriverStack';
import messaging from '@react-native-firebase/messaging';

const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
};


export default RootNav = () => {
    const [initializing, setInitializing] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        if (requestUserPermission) {
            messaging()
                .getToken()
                .then((token) => {
                    dispatch(setFCM(token))
                    console.log("FCM Token", token);
                });
        }
    }, []);
    //check persistent login
    const checkLogin = async () => {
        //Check firebase || mongo

        // Update redux

        setInitializing(false);
    };

    useEffect(() => {
        checkLogin();
    }, []);

    if (initializing) return null;

    let userType = useSelector(selectType);
    if (!userType) userType = null;
    const loggedin = userType !== null;

    if (loggedin) {
        if (userType === 'customer') {
            return <CustomerStack />;
        } else {
            return <DriverStack />;
        }
    } else {
        return <AuthStack />;
    }
};
