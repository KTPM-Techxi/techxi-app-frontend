import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const SURGE_RATE = 1.5;

const ReduxData = [
    {
        id: 'Uber-X-123',
        title: 'Grab X',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn'
    },
    {
        id: 'Uber-XL-123',
        title: 'Grab XL',
        multiplier: 1.25,
        image: 'https://links.papareact.com/5W8'
    },
    {
        id: 'Grab-Bike',
        title: 'Bike',
        multiplier: 1.25,
        image: 'https://freepngimg.com/save/23276-motorbike-transparent/1024x768'
    }
];

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    let _price = (travelTimeInformation?.duration?.value * SURGE_RATE) / 25;
    let data = ReduxData.map((item) => {
        return {
            id: item.id,
            title: item.title,
            image: item.image,
            price: (_price * item.multiplier).toFixed(0)
        };
    });
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff', flexGrow: 1 }}>
            <TouchableOpacity
                className='bg-green-300'
                onPress={() => {
                    // Open modal
                    //Add destination to redux
                }}
                style={styles.menu}>
                <Icon name="menu" />
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#a9a9a9', borderBottomWidth: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('NavigateCard');
                    }}
                    style={{
                        position: 'absolute',
                        top: 8,
                        left: 5,
                        padding: 3,
                        borderRadius: 50,
                        zIndex: 20
                    }}>
                    <Icon
                        name="chevron-left"
                        type="fontawesome"
                        color={"white"}
                    />
                </TouchableOpacity>
                <Text className='font-bold bg-green-500 p-2 text-white' style={{ textAlign: 'center', paddingVertical: 5, fontSize: 22 }}>
                    Select a ride {travelTimeInformation?.distance?.text}
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, price, image }, item }) => (
                    <TouchableOpacity
                        className='justify-between border-2 border-green-400 mx-4 mt-2 rounded-xl bg-white'
                        style={[id === selected?.id && { backgroundColor: '#99ff99' }, styles.tab]}
                        onPress={() => setSelected(item)}>
                        <Image
                            className='align-middle h-14 w-20 border-white my-auto'
                            source={{ uri: image }}
                        />
                        <View className='text-left'>
                            <Text className='text-left font-bold my-auto pt-4 mr-20' style={{ fontSize: 20}}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text}</Text>
                        </View>
                        <Text className='' style={{ fontSize: 20 }}>
                            {new Intl.NumberFormat('vi', {
                                style: 'currency',
                                currency: 'VND',
                                minimumFractionDigits: 3,
                                maximumFractionDigits: 3
                            }).format(price)}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View className="mt-auto border-t border-gray-200">
                <TouchableOpacity
                    disabled={!selected}
                    onPress={() => {
                        navigation.navigate('HomeScreen');
                    }}
                    className = 'w-3/5 mx-auto rounded-lg mb-4 mt-4'
                    style={[
                        { backgroundColor: '#00b300', paddingVertical: 3, margin: 3 },
                        !selected && { backgroundColor: '' }
                    ]}>
                    <Text className='' style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    menu: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 50,
        padding: 3,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6
    }
});
