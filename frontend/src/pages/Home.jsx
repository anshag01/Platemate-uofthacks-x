import { useContext, useState } from 'react';
import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Map from '../components/Map';
import { useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { reverseGeocode } from '../utils/reverseGeocode';
import RestaurantCard from '../components/ui/RestaurantCard';
import axios from 'axios';
import { waitForMatch } from '../utils/waitForMatch';
import { AuthContext } from '../context/AuthContext';

const getRestaurantList = async ({ lat, lng }) => {
    console.log(lat, lng);
    const response = await axios.post(
        'http://localhost:4000/findNearbyRestaurants',
        { lat: lat(), lng: lng() }
    );

    return response.data;
};

const Home = () => {
    const [placeholder, setPlaceholder] = useState('');
    const [center, setCenter] = useState(null);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { longitude, latitude } = position.coords;
            const formattedAddress = await reverseGeocode(latitude, longitude);
            setPlaceholder(formattedAddress);
            setCenter({ lat: latitude, lng: longitude });
        });

        console.log('user', user);
    }, []);

    const [match, setMatch] = useState(null);

    const handlePlaceSelected = async (place) => {
        console.log('selected place: ', place.geometry.location);
        const { lat, lng } = place.geometry.location;
        // start the matchmaking process
        waitForMatch();

        const restaurantList = await getRestaurantList({ lat, lng });
        // display the resataurant list gievn the components

        setCenter(place.geometry.location);
    };

    return (
        <Container className="flex flex-col items-center gap-y-8">
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
            <RestaurantCard
                address="1234 Main St"
                description="lorem ipsum lurem ipsum."
                price={3.8}
                distance={2.34}
                rating={3}
                title="Restaurant Name"
                image="https://lh5.googleusercontent.com/p/AF1QipPPNDBnnm4apN_JBNDGq-C4RB8WPzj84PNXK4ca=w228-h228-n-k-no"
            />
        </Container>
    );
};

export default Home;
