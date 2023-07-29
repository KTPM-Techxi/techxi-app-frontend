import React, { useState } from 'react';
import { View, Text, SafeAreaView, Keyboard, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { setType } from '../slices/authSlice';

const LoginScreen = ({ navigation }) => {
    const [inputs, setInputs] = React.useState({ email: '', password: '' });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const [type, setType_] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;
        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        }
        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        }
        if (isValid) {
            if (type == 'customer') {
                login();
            } else if (type == 'driver') {
                login();
            }
        }
    };

    const login = () => {
        setLoading(true);
        setTimeout(async () => {
            setLoading(false);

            //Login user
            //Get user type


            //set user type redux
            dispatch(setType(true))
        }, 3000);
    };

    const handleOnchange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    };

    const handleError = (error, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: error }));
    };
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <Loader visible={loading} />

            <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>Log In</Text>
                {show && (
                    <>
                        <TouchableOpacity
                            onPress={() => setShow(false)}
                            style={styles.menu}>
                            <Icon
                                name="menu-;eft"
                                type="material-community"
                            />
                        </TouchableOpacity>
                        <Text style={{ color: '#BABBC3', fontSize: 18, marginVertical: 10 }}>
                            Enter Your Details to Login
                        </Text>
                        <View style={{ marginVertical: 20 }}>
                            <InputField
                                onChangeText={(text) => handleOnchange(text, 'email')}
                                onFocus={() => handleError(null, 'email')}
                                iconName="email-outline"
                                label="Email"
                                placeholder="Enter your email address"
                                error={errors.email}
                            />
                            <InputField
                                onChangeText={(text) => handleOnchange(text, 'password')}
                                onFocus={() => handleError(null, 'password')}
                                iconName="lock-outline"
                                label="Password"
                                placeholder="Enter your password"
                                error={errors.password}
                                password
                            />
                            <CustomButton
                                title="Log In"
                                onPress={validate}
                            />
                        </View>
                    </>
                )}
                {!show && (
                    <>
                        <CustomButton
                            title="Customer"
                            onPress={() => {
                                setShow(true);
                                setType_('customer');
                            }}
                        />
                        <Text
                            onPress={() => navigation.navigate('Register')}
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontSize: 16
                            }}>
                            Don't have customer account? Register
                        </Text>
                        <CustomButton
                            title="Driver"
                            onPress={() => {
                                setShow(true);
                                setType_('driver');
                            }}
                        />
                        <Text
                            onPress={() => navigation.navigate('DriverRegister')}
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontSize: 16
                            }}>
                            Don't have driver account? Register
                        </Text>
                    </>
                )}
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 16,
        left: 8,
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

export default LoginScreen;
