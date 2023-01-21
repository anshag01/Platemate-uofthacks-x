import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Input from '../components/ui/Input';

const Home = () => {
    return (
        <Container>
            <Header text="Home" />
            <button className="btn">Hello</button>
            <Input type="email" placeholder="Please enter an email."></Input>
        </Container>
    );
};

export default Home;
