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
        title: 'Uder X',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn'
    },
    {
        id: 'Uber-XL-123',
        title: 'Uder XL',
        multiplier: 1.25,
        image: 'https://links.papareact.com/5W8'
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
                        top: 3,
                        left: 5,
                        padding: 3,
                        borderRadius: 50,
                        zIndex: 20
                    }}>
                    <Icon
                        name="chevron-left"
                        type="fontawesome"
                    />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', paddingVertical: 5, fontSize: 20 }}>
                    Select a ride - {travelTimeInformation?.distance?.text}
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, price, image }, item }) => (
                    <TouchableOpacity
                        style={[id === selected?.id && { backgroundColor: '#a9a9a9' }, styles.tab]}
                        onPress={() => setSelected(item)}>
                        <Image
                            style={{ width: 100, height: 100, resizeMode: 'contain' }}
                            source={{ uri: image }}
                        />
                        <View style={{ marginLeft: -6 }}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text}</Text>
                        </View>
                        <Text style={{ fontSize: 20 }}>
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
                    onPress={()=>{
                        navigation.navigate('InProgress')
                    }}
                    style={[
                        { backgroundColor: 'black', paddingVertical: 3, margin: 3 },
                        !selected && { backgroundColor: '#a9a9a9' }
                    ]}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 30 }}>
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
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    menu: {
        position: 'absolute',
        top: 2,
        right: 8,
        backgroundColor: '#a9a9a9',
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
