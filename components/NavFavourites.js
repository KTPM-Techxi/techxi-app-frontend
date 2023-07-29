import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'London Eye, London, UK'
    }
];
const NavFavourites = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => {
                <View style={{ backgroundColor: '#a9a9a9', height: 0.5 }} />;
            }}
            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity style={styles.button}>
                    <Icon
                        style={styles.favorite}
                        name={icon}
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{location}</Text>
                        <Text style={{ color: '#a9a9a9' }}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavFavourites;

const styles = StyleSheet.create({
    favorite: {
        marginRight: 4,
        borderRadius: 50,
        backgroundColor: '#a9a9a9',
        padding: 3
    },
    button: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }
});
