import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Input from '../components/ui/Input';

const Home = () => {
    return (
        <Container className="flex flex-col gap-y-8">
            <Header text="Where To?" />
            <Input type="search" placeholder="Enter a location" />
        </Container>
    );
};

export default Home;
