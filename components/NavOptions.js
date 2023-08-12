import { FlatList, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: '123',
        title: '2-Wheel',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    }
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.tab}
                    disabled={!origin}
                    onPress={() => navigation.navigate(item.screen)}>
                    <View style={origin ? null : styles.noOrigin}>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                        <Icon
                            style={styles.button}
                            type="antdesign"
                            name="arrowright"
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;

const styles = StyleSheet.create({
    tab: {
        padding: 2,
        paddingLeft: 6,
        paddingBottom: 8,
        paddingTop: 4,
        // backgroundColor: '#fff8dc',
        margin: 2,
        width: 40
    },
    title: {
        marginTop: 2,
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        padding: 2,
        backgroundColor: '#000',
        width: 10,
        borderRadius: 50,
        marginTop: 4
    },
    noOrigin: {
        opacity: 0.2
    }
});
