import React from 'react';
import { View, Text, SafeAreaView, Keyboard, ScrollView, Alert } from 'react-native';

import Loader from '../components/Loader';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { setType } from '../slices/authSlice';

const RegisterScreen = ({ navigation }) => {
    const [inputs, setInputs] = React.useState({
        email: '',
        fullname: '',
        phone: '',
        password: ''
    });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Please input a valid email', 'email');
            isValid = false;
        }

        if (!inputs.fullname) {
            handleError('Please input fullname', 'fullname');
            isValid = false;
        }

        if (!inputs.phone) {
            handleError('Please input phone number', 'phone');
            isValid = false;
        }

        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (inputs.password.length < 5) {
            handleError('Min password length of 5', 'password');
            isValid = false;
        }

        if (isValid) {
            register();
        }
    };

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            try {
                setLoading(false);

                //Register

                //update redux
                dispatch(setType(true));
            } catch (error) {
                Alert.alert('Error', 'Something went wrong');
            }
        }, 500);
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
            <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 40,
                        fontWeight: 'bold',
                        width: '100%',
                        textAlign: 'justify'
                    }}>
                    Register
                </Text>

                <Text style={{ color: '#BABBC3', fontSize: 18, marginVertical: 10 }}>
                    Enter Your Details to Register
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
                        onChangeText={(text) => handleOnchange(text, 'fullname')}
                        onFocus={() => handleError(null, 'fullname')}
                        iconName="account-outline"
                        label="Full Name"
                        placeholder="Enter your full name"
                        error={errors.fullname}
                    />

                    <InputField
                        keyboardType="numeric"
                        onChangeText={(text) => handleOnchange(text, 'phone')}
                        onFocus={() => handleError(null, 'phone')}
                        iconName="phone-outline"
                        label="Phone Number"
                        placeholder="Enter your phone no"
                        error={errors.phone}
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
                        title="Register"
                        onPress={validate}
                    />
                    <Text
                        onPress={() => navigation.navigate('Login')}
                        style={{
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 16
                        }}>
                        Already have account ?Login
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RegisterScreen;
