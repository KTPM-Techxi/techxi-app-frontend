import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const UserProgress = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff', flexGrow: 1 }}>
        <Text> IN PROGRSS</Text>
        <Text> DRIVER INFO</Text>
        <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('HomeScreen');
                        }}>
                        <Icon
                            name="car"
                            type="font-awesome"
                            color="white"
                            size={16}
                        />
                        <Text style={{ textAlign: 'center', color: 'white' }}>to hom</Text>
                    </TouchableOpacity>
        </SafeAreaView>
    );
};

export default UserProgress;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        borderRadius: 50,
        flexDirection: 'row',
        width: 150,
        justifyContent:'space-around',
        paddingVertical: 10,
        paddingHorizontal:20
    },
});
