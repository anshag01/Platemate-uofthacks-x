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
    const response = await axios.post(
        'http://localhost:4000/findNearbyRestaurants',
        { lat, lng }
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
    }, []);

    const [match, setMatch] = useState(null);
    const [restaurantList, setRestaurantList] = useState();

    const handlePlaceSelected = async (place) => {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        // start the matchmaking process
        waitForMatch();

        const res = await getRestaurantList({ lat, lng });
        setRestaurantList(res);
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
            {/* {restaurantList &&
                restaurantList.map(
                    (restaurant, index) =>
                        console.log(restaurant) && (
                            <RestaurantCard
                                key={index}
                                address={restaurant.address}
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                price={(Math.random() * 10).toFixed(2)}
                                distance={(Math.random() * 10).toFixed(2)}
                                rating={restaurant.rating}
                                title={restaurant.name}
                                image="https://images.unsplash.com/photo-1616488000003-5e1b5e2b5b0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            />
                        )
                )} */}
        </Container>
    );
};

export default Home;
