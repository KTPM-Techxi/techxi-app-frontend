import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryComponent from '../../components/Driver/HistoryComponent';
import { ScrollView } from 'react-native-gesture-handler';

const HistoryScreen = () => {
    return (
        <ScrollView className=" flex-1 bg-blue-100">
            <HistoryComponent />
            <HistoryComponent />
            <HistoryComponent />
            <HistoryComponent />
        </ScrollView>
    );
};

export default HistoryScreen;
