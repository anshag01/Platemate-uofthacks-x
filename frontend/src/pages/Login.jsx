import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        login(username, password);
    };

    return (
        <Container>
            <form
                className="flex flex-col items-center gap-y-8"
                onSubmit={handleSubmit}
            >
                <Logo />

                {/* Form */}
                <Input
                    placeholder="Username"
                    name="username"
                    type="username"
                    required
                />
                <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    required
                />

                <Button text="Log In" type="submit" />
                <Link className="text-[#DF72E1] hover:text-[#a04ea2] hover:ease-in-out duration-100 text-center">
                    Forgot your password?
                </Link>
            </form>
        </Container>
    );
};

export default Login;
