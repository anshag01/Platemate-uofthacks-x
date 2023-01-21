import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Input from '../components/ui/Input';
import Map from '../components/Map';

const Home = () => {
    return (
        <Container className="flex flex-col gap-y-8">
            <Header text="Where To?" />
            <Input type="search" placeholder="Enter a location" />
            <Map center={{ lat: -34.397, lng: 150.644 }} zoom={4} />
        </Container>
    );
};

export default Home;
