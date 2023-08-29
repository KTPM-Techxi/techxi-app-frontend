import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const SearchLocationInput = ({ textInputText = '', onLocationSelect }) => {
    const [resultList, setresultList] = useState([]);
    const [inputText, setinputText] = useState(textInputText);
    const YOUR_API_KEY = 'NdHC0NcH8Om0kgYqIwrmdALpmlANLlST3CLWW45M';

    const searchItems = async (text) => {
        try {
            setinputText(text);
            if (text.length > 3) {
                let response = await fetch(
                    `https://rsapi.goong.io/Place/AutoComplete?` +
                        new URLSearchParams({
                            api_key: YOUR_API_KEY,
                            input: inputText
                        })
                );
                let result = await response.json();
                setresultList(result?.predictions.length > 0 ? result?.predictions : []);
            } else {
                setresultList([]);
            }
        } catch ({ message }) {
            setinputText('');
            setresultList([]);
            console.log('searchItemsSiteERROR', message);
        }
    };

    const onPressListItem = async (item) => {
        try {
            let response = await fetch(
                'https://rsapi.goong.io/Place/Detail?' +
                    new URLSearchParams({
                        api_key: YOUR_API_KEY,
                        place_id: item.place_id
                    })
            );
            let result = await response.json();
            selectedItemRes(result ? result : null);
            setinputText(result?.name);
            setresultList([]);
            if (!result) return;
            onLocationSelect(result)
        } catch ({ message }) {
            console.log('onPressListItemERROR', message);
        }
    };

    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#CED0CE'
                }}
            />
        );
    };

    return (
        <View
            style={{
                flex: 1,
                width: '98%',
                position: 'absolute',
                top: 30,
                zIndex: 1,
                backgroundColor: 'white'
            }}>
            <TextInput
                style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
                placeholder="Location..."
                onChangeText={searchItems}
                value={inputText}
            />
            {inputText && (
                <FlatList
                    data={resultList}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => onPressListItem(item)}>
                            <Text style={{ padding: 10 }}>{item?.description} </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index + ''}
                    ItemSeparatorComponent={renderSeparator}
                />
            )}
        </View>
    );
};

export default SearchLocationInput;

const styles = StyleSheet.create({});
