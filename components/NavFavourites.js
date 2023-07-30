import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

// Get data from redux
const data = [
    {
        id: '123',
        icon: 'home',
        name: 'Home',
        description: '466 street',
        coords: null,
    }
];
const NavFavourites = ({isOrigin = true}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => {
                <View style={{ backgroundColor: '#a9a9a9', height: 0.5 }} />;
            }}
            renderItem={({ item: { coords, description, icon, name } }) => (
                <TouchableOpacity style={styles.button} onPress={()=>{
                    if(isOrigin){
                        dispatch(
                                setOrigin({
                                    location: coords,
                                    description: description
                                })
                            );
                            dispatch(setDestination(null))
                            navigation.navigate('MapScreen');
                    }else{
                        dispatch(
                                setDestination({
                                    location: coords,
                                    description: description
                                })
                            );
                            navigation.navigate('RideOptionsCard');
                    }
                }}>
                    <Icon
                        style={styles.favorite}
                        name={icon}
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
                        <Text style={{ color: '#a9a9a9' }}>{description}</Text>
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
