import Container from './Container';

const ImageCard = () => {
    return (
        <img
            className="rounded-md mx-0"
            src="https://lh5.googleusercontent.com/p/AF1QipPPNDBnnm4apN_JBNDGq-C4RB8WPzj84PNXK4ca=w228-h228-n-k-no"
            alt=""
        />
    );
};

const Description = ({ title, address, description, price }) => {
    return (
        <Container>
            <h3>Testing123</h3>
        </Container>
    );
};

const RestaurantCard = () => {
    return (
        <div className="py-3 w-full bg-white rounded-lg">
            <ImageCard />
            <Description />
        </div>
    );
};

export default RestaurantCard;
