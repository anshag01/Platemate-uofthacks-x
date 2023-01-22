import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import person1 from '../assets/pics/person1.png';
import { useEffect } from 'react';
import axios from 'axios';

const Match = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const userId = searchParams.get('userId');
    const matchId = searchParams.get('matchId');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await axios.post(
            'http://localhost:4000/explainMatch',
            {
                userId,
                matchId
            }
        );
        console.log(response.data);
    });

    return (
        <Container className="flex flex-col gap-y-8">
            <Header text={'About your match'} />
            <Card
                pic={person1}
                title={userId}
                address="person1 interests or job"
            />
            <Card
                pic={person1}
                title={matchId}
                address="person2 interestes or job"
            />
        </Container>
    );
};

export default Match;
