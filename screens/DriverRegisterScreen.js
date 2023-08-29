import React from 'react';
import { View, Text, SafeAreaView, Keyboard, ScrollView, Alert } from 'react-native';

import Loader from '../components/Loader';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { setType } from '../slices/authSlice';

const DriverRegisterScreen = ({ navigation }) => {
    const [inputs, setInputs] = React.useState({
        email: '',
        fullname: '',
        phone: '',
        password: '',
        confirmPassword: ''
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

        if (!inputs.confirmPassword) {
            handleError('Please input confirm password', 'confirmPassword');
            isValid = false;
        } else if (inputs.confirmPassword != inputs.password) {
            handleError('Confirm password must match password', 'confirmPassword');
            isValid = false;
        }

        if (isValid) {
            register();
        }
    };

    const register = async () => {
        setLoading(true);
        const data = {
            name: inputs.fullname,
            email: inputs.email,
            password: inputs.password,
            confirmPassword: inputs.confirmPassword,
            phoneNumber: inputs.phone,
            address: '',
            dob: '15-05-2002',
            role: 'driver'
        };
        setLoading(false);
        dispatch(setType('driver'));

      // try {
        //     const response = await axios.post('/users/register', data);
        //     console.log(response);
        //     if (response.status === 200) {
        //         console.log(response.data);

        //         //sent fcm
        //         try {
        //             const res = await axios.post('/users/fcm', {
        //                 user_id: response.data.user_id,
        //                 fcmToken: fcm
        //             });
        //             if (response.status === 200) {
        //                 setLoading(false)
        //                 dispatch(setUsername(inputs.email))
        //                 dispatch(setType('driver'));
        //                 dispatch(setID(response.data.user_id))
        //             }
        //         } catch (err) {}
        //     }
        // } catch (error) {
        //     if (error.response && error.response.data && error.response.data.message) {
        //         console.log(error.response.data.message);
        //     } else {
        //         console.log('Register failed');
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
            <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>Register</Text>
                <Text style={{ color: '#BABBC3', fontSize: 18, marginVertical: 10 }}>
                    Enter Your Details to Register for driver
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
                        password={true}
                    />
                    <InputField
                        onChangeText={(text) => handleOnchange(text, 'confirmPassword')}
                        onFocus={() => handleError(null, 'confirmPassword')}
                        iconName="lock-outline"
                        label="Confirm Password"
                        placeholder="Enter your password"
                        error={errors.confirmPassword}
                        password={true}
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

export default DriverRegisterScreen;
