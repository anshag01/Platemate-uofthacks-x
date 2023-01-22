import axios from 'axios';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    // Navigate
    const navigate = useNavigate();

    // User authentication info
    const [user, setUser] = useState();

    // Login
    const login = async (username, password) => {
        try {
            const context = {
                username,
                password
            };

            const res = await axios.post(
                'http://localhost:8000/login',
                context
            );
            if (res.status === 200) {
                const data = res.data;
                console.log(data);
                localStorage.setItem('user', JSON.stringify(data));

                // Going home
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Logout
    const logout = async () => {
        localStorage.removeItem('user');

        // Going home
        navigate('/login');
    };

    // Sign up
    const signup = async (username, password) => {
        try {
            const context = {
                username,
                password
            };
            const res = await axios.post(
                'http://localhost:8000/signup/',
                context
            );
            if (res.status === 200) {
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data));
                setUser(res.data);

                // Going home
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const value = {
        user,
        setUser,
        login,
        logout,
        signup
    };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
