import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll, setType } from '../slices/authSlice';
import { Icon } from 'react-native-elements';

const UserProfile = () => {
    const user = useSelector(selectAll);
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const logout = () => {
        // Log out from firebase || mongo

        // null redux
        dispatch(setType(null));
    };
    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                visible={modalVisible}>
                <View></View>
                <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    activeOpacity={1}
                    onPress={() => {
                        setModalVisible(false);
                    }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderWidth: 0.5,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            width: 200,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 3
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,

                            elevation: 6
                        }}>
                        <TouchableOpacity
                            onPress={logout}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 5
                            }}>
                            <Text style={{ color: 'red', fontSize: 15 }}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>name here</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>phone here</Text>
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true);
                }}
                style={styles.menu}>
                <Icon name="menu" />
            </TouchableOpacity>

            {!user?.type && (
                <>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>vehicle</Text>
                </>
            )}
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    menu: {
        position: 'absolute',
        top: 5,
        right: 20,
        zIndex: 50,
        padding: 3,
        borderRadius: 50,
      
    }
});
