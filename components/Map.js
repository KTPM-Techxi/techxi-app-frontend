import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { useRef } from 'react';
import { useEffect } from 'react';
import {GOOGLE_MAP_APIKEY} from '@env'

const Map = () => {
    const [load, setLoad] = useState(false)
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, bottom: 50, left: 50, right: 50 }
        });
    }, [load]);

    useEffect(() => {
        if (!origin || !destination) return;
        const getTravelTime = async () => {
            //Insert API KEY HERE
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin.description}&key=${GOOGLE_MAP_APIKEY}`;
            fetch(URL)
                .then((res) => res.json())
                .then((data) => {
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
                    setLoad(prev => !prev)
                });
        };
        getTravelTime();
    }, [origin, destination]);

    return (
        <MapView
            ref={mapRef}
            style={{ flex: 1 }}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                longitudeDelta: 0.005,
                latitudeDelta: 0.005
            }}>
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAP_APIKEY}
                    strokeColor="black"
                    strokeWidth={3}
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                    
                />
            )}
            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng
                    }}
                    title="Destination"
                    description={destination.description}
                    identifier="destination"
                />
            )}
        </MapView>
    );
};

export default Map;

const styles = StyleSheet.create({});
