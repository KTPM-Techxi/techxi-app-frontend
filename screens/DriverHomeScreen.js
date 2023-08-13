import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { useNavigation } from '@react-navigation/native';
import UserProfile from '../components/UserProfile';
import { GOOGLE_MAP_APIKEY } from '@env';
import RecentDrivesHistory from '../components/Driver/RecentDrivesHistory';
import Chart from '../components/Driver/Chart';

const DriverHomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-white flex-1">
            <View className="p-2">
                <View className="flex flex-row gap-2 items-center">
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Grab_%28application%29_logo.svg/2560px-Grab_%28application%29_logo.svg.png'
                        }}
                    />
                    <Text className="text-sm">Welcome back Minh</Text>
                </View>
                <View className="flex-col p-1">
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Recent Drives</Text>
                    <View className="h-1 px-20 border-b border-gray-300"></View>
                    <RecentDrivesHistory />
                    <Chart />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DriverHomeScreen;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
});
