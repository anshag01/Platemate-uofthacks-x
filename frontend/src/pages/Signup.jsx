import Container from '../components/ui/Container';
import Header from '../components/ui/Header';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Logo from '../components/ui/Logo';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // const email = e.target.email.value
        const username = e.target.username.value;
        const password = e.target.password.value;

        navigate('/userinfo', { state: { username, password } });
    };

    return (
        <Container>
            <form
                className="flex flex-col items-center gap-y-8"
                onSubmit={handleSubmit}
            >
                <Logo />

                {/* Form */}
                {/* <Input placeholder="Email" name="email" type="email" required /> */}
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

                <div className="flex items-center gap-x-4">
                    <Button text="Sign Up" type="submit" />
                    <Button
                        text="Log In"
                        type="text"
                        onClick={() => navigate('/login')}
                    />
                </div>
                <Link className="text-[#DF72E1] hover:text-[#a04ea2] hover:ease-in-out duration-100 text-center">
                    Forgot your password?
                </Link>
            </form>
        </Container>
    );
};

export default Signup;
