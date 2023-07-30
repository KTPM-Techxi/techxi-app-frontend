import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNav from "./stacks/RootNav";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <StatusBar style="auto" />
            <RootNav />
          </KeyboardAvoidingView>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
