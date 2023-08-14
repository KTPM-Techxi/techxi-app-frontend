import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import DriverHomeScreen from '../screens/DriverHomeScreen';
import DriverEarningScreen from '../screens/DriverScreens/DriverEarningScreen';
const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting={true}
            keyboardHidesNavigationBar={true}
            sceneAnimationType="shifting"
            backBehavior="order"
            sceneAnimationEnabled={false}
            activeColor="green"
            inactiveColor="black"
            barStyle={{ backgroundColor: 'transparent' }}
            screenOptions={{
                tabBarColor: '#fff',
                activeTintColor: 'white'
            }}>
            <Tab.Screen
                name="Home"
                component={DriverHomeScreen}
                options={{
                    tabBarIcon: 'home',
                    tabBarBadge: 2
                }}
            />
            <Tab.Screen
                name="Earnings"
                component={DriverEarningScreen}
                options={{
                    tabBarIcon: 'chart-bar'
                }}
            />
            <Tab.Screen
                name="History"
                component={DriverEarningScreen}
                options={{
                    tabBarIcon: 'history'
                }}
            />
            <Tab.Screen
                name="My Profile"
                component={DriverEarningScreen}
                options={{
                    tabBarIcon: 'account-circle'
                }}
            />
        </Tab.Navigator>
    );
};
