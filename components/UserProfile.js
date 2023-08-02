import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll, selectType } from '../slices/authSlice';

const UserProfile = () => {
    const user = useSelector(selectAll);
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const logout = () =>{
        // Log out from firebase || mongo

        // null redux
        dispatch(selectType(null))
    }
    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                visible={modalVisible}>
                <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center' }}
                    activeOpacity={1}
                    onPress={() => {
                        setModalVisible(false);
                    }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderWidth: 0.5,
                            paddingHorizontal: 20,
                            paddingVertical: 10
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

            {!(user?.type) &(
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
    }
});
