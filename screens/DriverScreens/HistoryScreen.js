import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryComponent from '../../components/Driver/HistoryComponent';

const HistoryScreen = () => {
    return (
        <SafeAreaView className=" flex-1 bg-blue-100">
            <HistoryComponent />
        </SafeAreaView>
    );
};

export default HistoryScreen;
