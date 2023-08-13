import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const data = [
    { id: '1', text: 'Drive 1' },
    { id: '2', text: 'Drive 2' },
    { id: '3', text: 'Drive 3' }
    // Add more data items as needed
];

const RecentDrivesHistory = () => {
    const renderItem = ({ item }) => (
        <View className="flex flex-row">
            <Text>ID: #{item.id}</Text>
            <Text>From: 123 ABC Street</Text>
            <Text>To: 456 XYZ Street</Text>
            <Text>Driver: {item.text}</Text>
            <Text>Passenger: John</Text>
            <Text>Price: $10</Text>
            <Text>Distance: 10km</Text>
            <Text>Duration: 10 minutes</Text>
            <Text>Rating: 5 stars</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                className="bg-red-200 min-h-[200px] rounded-3xl mt-2"
            />
        </View>
    );
};

export default RecentDrivesHistory;
