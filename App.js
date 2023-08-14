import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNav from './stacks/RootNav';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { Drawer, PaperProvider } from 'react-native-paper';
import { BottomTabs } from './components/BottomNavigation';
import DriverEarningScreen from './screens/DriverScreens/DriverEarningScreen';
export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <KeyboardAvoidingView
                            style={{ flex: 1 }}
                            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
                            <StatusBar style="auto" />
                            {/* <RootNav /> */}
                            <BottomTabs />
                        </KeyboardAvoidingView>
                    </NavigationContainer>
                </SafeAreaProvider>
            </PaperProvider>
        </Provider>
    );
}
