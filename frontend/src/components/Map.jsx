import { useState, useCallback } from 'react';
import {
    GoogleMap,
    useJsApiLoader,
    MarkerClusterer,
    Marker
} from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-10'
};

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };

function Map({ center }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBafwgKGnLCerwKxmHSlVRrQRbiSq4HM1s'
    });

    const [map, setMap] = useState(null);
    const [locations, setLocations] = useState([]);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        setLocations([
            {
                lat: center ? center.lat : -3.745,
                lng: center ? center.lng : -38.523
            }
        ]);

        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{ disableDefaultUI: true }}
        >
            <MarkerClusterer>
                {(clusterer) =>
                    locations.map((location) => (
                        <Marker
                            key={location.lat + location.long}
                            position={location}
                            clusterer={clusterer}
                        />
                    ))
                }
            </MarkerClusterer>
        </GoogleMap>
    ) : (
        <div className="">loading</div>
    );
}

export default Map;
