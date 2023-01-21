import { useState } from 'react';
import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Map from '../components/Map';
import { useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { reverseGeocode } from '../utils/reverseGeocode';

const Home = () => {
    const [placeholder, setPlaceholder] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { longitude, latitude } = position.coords;
            const formattedAddress = await reverseGeocode(latitude, longitude);
            setPlaceholder(formattedAddress);
        });
    }, []);

    const handlePlaceSelected = (place) => {
        console.log('selected place: ', place);
        // if the position is unchanged from the one that the user selected then we can use the original long and lat
        // if we do not have the same position then we can instead parse the address or use google

        // begin matchmaking based on the cuisine and the area // send a request to the server and
        // find midpoint latitude/longitude and search restaurants within 5 km radius using backend request
    };

    return (
        <Container className="flex flex-col gap-y-8">
            <Header text="Where To?" />
            <Map />
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
        </Container>
    );
};

export default Home;
