import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Recommended from './pages/Recommended';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import UserInfo from './pages/UserInfo';
import AuthContextProvider from './context/AuthContext';
import Match from './pages/Match';

const App = () => {
    return (
        <>
            <Navbar />
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/recommended" element={<Recommended />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/userinfo" element={<UserInfo />} />
                    <Route path="/match" element={<Match />} />
                </Routes>
            </AuthContextProvider>
        </>
    );
};

export default App;
