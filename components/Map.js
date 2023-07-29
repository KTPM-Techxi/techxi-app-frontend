import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { useRef } from 'react';
import { useEffect } from 'react';

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, bottom: 50, left: 50, right: 50 }
        });
    }, [origin, destination]);

    useEffect(() => {
        if (!origin || !destination) return;
        const getTravelTime = async () => {
            //Insert API KEY HERE
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin.description}&key=YOUR_API_KEY`;
            fetch(URL)
                .then((res) => res.json())
                .then((data) => {
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
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
                latitude: origin.location.latitude,
                longitude: origin.location.longitude,
                longitudeDelta: 0.005,
                latitudeDelta: 0.005
            }}>
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey="API KEY HERE PLS"
                    strokeColor="black"
                    strokeWidth={3}
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.latitude,
                        longitude: origin.location.longitude
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                    
                />
            )}
            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.latitude,
                        longitude: destination.location.longitude
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
