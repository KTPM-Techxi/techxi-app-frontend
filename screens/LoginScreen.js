import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Keyboard,
    Alert,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Loader from '../components/Loader';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { setType, setUsername } from '../slices/authSlice';

const LoginScreen = ({ navigation }) => {
    const [inputs, setInputs] = React.useState({ email: '', password: '' });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const [type, setType_] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);

        // persistant login

        setLoading(false);
    }, []);

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
                setType_('customer');
                login();
            } else if (type == 'driver') {
                setType_('driver');
                login();
            }
        }
    };

    const login = async () => {
        setLoading(true);
        const data = {
            email: inputs.email,
            password: inputs.password
        };
        setLoading(false)
        dispatch(setType(type));
        // try {
        //     const response = await axios.post('/users/login', data);
        //     console.log(response);
        //     if (response.status === 200) {
        //         console.log(response.data);


        //         //sent fcm

        //         setLoading(false)
        //         dispatch(setUsername(inputs.email))
        //         dispatch(setFCM('FCM Token'));
        //         dispatch(setType(type));
        //         dispatch(setID(response.id))

        //         return response.data;
        //     }

        //     console.log(response);
        // } catch (error) {
        //     if (error.response && error.response.data && error.response.data.message) {
        //         console.log(error.response.data.message);
        //     } else {
        //         console.log('Login failed');
        //     }
        // }



    };

    const handleOnchange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    };

    const handleError = (error, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: error }));
    };
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Loader visible={loading} />

            <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 40,
                        fontWeight: 'bold',
                        width: '100%',
                        textAlign: 'center'
                    }}>
                    Log In
                </Text>
                <Text>{type}</Text>
                {show && (
                    <>
                        <TouchableOpacity
                            onPress={() => setShow(false)}
                            style={styles.menu}>
                            <Icon
                                name="chevron-left"
                                type="fontawesome"
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
                                password={true}
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
        top: 65,
        left: 20,
        zIndex: 50,
        padding: 3,
        borderRadius: 50,
        borderWidth: 0.5
    }
});

export default LoginScreen;
