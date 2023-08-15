import React from 'react';

import AuthStack from './AuthStack';
import CustomerStack from './CustomerStack';
import { selectType } from '../slices/authSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import {BottomTabs} from '../components/BottomNavigation'

export default RootNav = () => {
    const [initializing, setInitializing] = useState(true);
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
            return <BottomTabs />;
        }
    } else {
        return <AuthStack />;
    }
};
