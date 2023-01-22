import { useState } from 'react';
import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Map from '../components/Map';
import { useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { reverseGeocode } from '../utils/reverseGeocode';
import RestaurantCard from '../components/ui/RestaurantCard';

const Home = () => {
    const [placeholder, setPlaceholder] = useState('');
    const [center, setCenter] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { longitude, latitude } = position.coords;
            const formattedAddress = await reverseGeocode(latitude, longitude);
            setPlaceholder(formattedAddress);
            setCenter({ lat: latitude, lng: longitude });
        });
    }, []);

    const handlePlaceSelected = (place) => {
        console.log('selected place: ', place.geometry.location);
        const { lat, lng } = place.geometry.location;

        setCenter(place.geometry.location);
    };

    return (
        <Container className="flex flex-col gap-y-8">
            <Header text="Where To?" />
            <Map center={center} />
            <Autocomplete
                apiKey={'AIzaSyBafwgKGnLCerwKxmHSlVRrQRbiSq4HM1s'}
                style={{ width: '90%', zIndex: 10 }}
                className="outline-0 py-3 px-2 w-full bg-[#E8E8E8] rounded-lg border-transparent border-2 hover:border-[#DF72E1] hover:ease-in-out duration-100"
                onPlaceSelected={handlePlaceSelected}
                options={{
                    types: ['(regions)'],
                    componentRestrictions: { country: 'ca' }
                }}
                defaultValue={placeholder}
            />
            <RestaurantCard />
        </Container>
    );
};

export default Home;
