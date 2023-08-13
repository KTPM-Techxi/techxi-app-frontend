import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import { StyleSheet, View, FlatList } from 'react-native';

const data = [
    { id: '1', text: 'Drive 1' },
    { id: '2', text: 'Drive 2' },
    { id: '3', text: 'Drive 3' }
    // Add more data items as needed
];
const Item = () => {
    return (
        // <View className="flex p-[2px] gap-1 rounded-3xl border">
        //     <View className="flex flex-row justify-between">
        //         <Text>18</Text>
        //         <Text>{'>'}</Text>
        //     </View>
        //     <Text>Drives today</Text>
        //     <Text>12 more to get reward</Text>
        //     <View className="w-full h-1 bg-blue-500 rounded-sm"></View>
        // </View>
        <Card>
            <Card.Title
                title="Card Title"
                subtitle="Card Subtitle"
            />
            <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    );
};
const Chart = () => {
    return (
        <>
            <FlatList
                keyExtractor={(item) => item.id}
                renderItem={Item}
                data={data}
            />
            <FlatList
                keyExtractor={(item) => item.id}
                renderItem={Item}
                data={data}
            />
        </>
    );
};

export default Chart;
