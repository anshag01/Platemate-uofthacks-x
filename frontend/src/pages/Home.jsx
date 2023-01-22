import { useContext, useState } from 'react';
import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Map from '../components/Map';
import { useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { reverseGeocode } from '../utils/reverseGeocode';
import RestaurantCard from '../components/ui/RestaurantCard';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import person1 from '../assets/pics/person1.png';
import Card from '../components/ui/Card';

const delay = 3000;

const getRestaurantList = async ({ lat, lng }) => {
    const response = await axios.post(
        'http://localhost:4000/findNearbyRestaurants',
        { lat, lng }
    );

    return response.data;
};

const sendRequest = async (status, userId, locationId) => {
    const response = await axios.post('http://localhost:4000/match', {
        status: status,
        userId: userId,
        locationId: locationId
    });

    return response.data;
};

const waitForMatch = async (callback, userId, locationId) => {
    const startData = await sendRequest('start', userId, locationId);

    if (startData.status === 'match') {
        callback(startData.matchingUserId);
        return;
    }

    return new Promise(async (resolve) => {
        setInterval(async () => {
            const pollData = await sendRequest('poll', userId, locationId);
            // eslint-disable-next-line default-case
            switch (pollData.status) {
                case 'match':
                    callback(pollData.matchingUserId);
                    resolve();
                    break;
                case 'active':
                    console.log('match not yet found');
                    break;
            }
        }, delay);
    });
};

const Home = () => {
    const [placeholder, setPlaceholder] = useState('');
    const [center, setCenter] = useState(null);
    const [restaurantList, setRestaurantList] = useState(null);

    const { user } = useContext(AuthContext);
    // useEffect(() => {
    //     return async () => {
    //         await axios.post('http://localhost:4000/match', {
    //             status: 'stop',
    //             userId: user
    //         });
    //     };
    // });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { longitude, latitude } = position.coords;
            const formattedAddress = await reverseGeocode(latitude, longitude);
            setPlaceholder(formattedAddress);
            setCenter({ lat: latitude, lng: longitude });
        });
    }, []);

    const [match, setMatch] = useState(
        <Card
            pic={person1}
            title={user}
            address="kazi Deiry, Taiger Pass Chittagong"
        />
    );

    const handlePlaceSelected = async (place) => {
        console.log('selected place: ', place);
        const { lat, lng } = place.geometry.location;
        const locationId = place.place_id;
        await waitForMatch(
            (matchingUser) => {
                setMatch(
                    <Card
                        pic={person1}
                        title={matchingUser}
                        address="kazi Deiry, Taiger Pass Chittagong"
                    />
                );
                console.log('matched with user: ', matchingUser);
            },
            user,
            locationId
        );

        const res = await getRestaurantList({ lat, lng });
        setRestaurantList(res);
        // display the resataurant list gievn the components

        setCenter(place.geometry.location);
    };

    return (
        <Container className="flex flex-col items-center gap-y-8">
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
            {/* <RestaurantCard
                address="1234 Main St"
                description="lorem ipsum lurem ipsum."
                price={3.8}
                distance={2.34}
                rating={3}
                title="Restaurant Name"
                image="https://lh5.googleusercontent.com/p/AF1QipPPNDBnnm4apN_JBNDGq-C4RB8WPzj84PNXK4ca=w228-h228-n-k-no"
            /> */}
            {restaurantList &&
                restaurantList.map(async (restaurant, index) => {
                    const img = await axios.post(
                        'http://localhost:4000/getPlacePhoto',
                        { photoReference: restaurant.photos[0].photo_reference }
                    );
                    return (
                        <RestaurantCard
                            key={index}
                            address={restaurant.address}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            price={(Math.random() * 10).toFixed(2)}
                            distance={(Math.random() * 10).toFixed(2)}
                            rating={restaurant.rating}
                            title={restaurant.name}
                            image={img}
                        />
                    );
                })}
            {match}
        </Container>
    );
};

export default Home;
