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

    const [restaurants, setRestaurants] = useState([
        {
            id: 0,
            name: 'Fairmont Royal York',
            distance: 0.97,
            price: 15.99,
            address: '100 Front Street West, Toronto',
            image: 'https://media.blogto.com/articles/20211011-Siennas-12.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'
        },
        {
            id: 1,
            name: 'Oliver & Bonacini Café Grill, Yonge & Front',
            distance: 8.69,
            price: '$$',
            address: '33 Yonge Street, Toronto',
            image: 'https://c.ndtvimg.com/2021-04/1h7poqq_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886'
        },
        {
            id: 2,
            name: 'Terroni',
            distance: 7.96,
            price: '$$$',
            address: '57 Adelaide Street East, Toronto',
            image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/fast-food-assortment-soda.jpg?quality=82&strip=1'
        },
        {
            id: 3,
            name: 'The Keg Steakhouse + Bar - York Street',
            distance: 0.97,
            price: 15.99,
            address: '100 Front Street West, Toronto',
            image: 'https://vegnews.com/media/W1siZiIsIjI5NDQ2L1ZlZ05ld3MuVmVnYW5GYXN0Rm9vZC5Nb250eXNHb29kQnVyZ2VyLmpwZyJdLFsicCIsInRodW1iIiwiMTYwMHg5NDYjIix7ImZvcm1hdCI6ImpwZyJ9XSxbInAiLCJvcHRpbWl6ZSJdXQ/VegNews.VeganFastFood.MontysGoodBurger.jpg?sha=892e9c726614c0f8'
        },
        {
            id: 4,
            name: 'Jump Restaurant',
            distance: 0.78,
            price: '$',
            address: '18 Wellington Street West, Toronto',
            image: 'https://www.eatwell101.com/wp-content/uploads/2022/01/Vegetable-Soup-recipe-2.jpg'
        }
    ]);

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

    const [match, setMatch] = useState();

    const handlePlaceSelected = async (place) => {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const locationId = place.place_id;

        const res = await getRestaurantList({ lat, lng });
        setRestaurantList(res);
        // display the resataurant list gievn the components

        setCenter(place.geometry.location);

        await waitForMatch(
            (matchingUser) => {
                setMatch(
                    <Card
                        pic={person1}
                        title="Amy Roberts"
                        address="kazi Deiry, Taiger Pass Chittagong"
                    />
                );
                console.log('matched with user: ', matchingUser);
            },
            user,
            locationId
        );
    };

    return (
        <Container className="overflow-y-auto flex flex-col items-center gap-y-8">
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
            {restaurants.map((restaurant, index) => (
                <RestaurantCard
                    key={index}
                    setRestaurants={setRestaurants}
                    address={restaurant.address}
                    price={(Math.random() * 10).toFixed(2)}
                    distance={(Math.random() * 10).toFixed(2)}
                    rating={restaurant.rating}
                    title={restaurant.name}
                    image={restaurant.image}
                />
            ))}
            {match}
        </Container>
    );
};

export default Home;
