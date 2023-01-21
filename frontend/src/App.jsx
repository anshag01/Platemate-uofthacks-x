import { Routes, Route } from 'react-router-dom';
import { Wrapper } from '@googlemaps/react-wrapper';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
    return (
        <>
            <Wrapper apiKey={'AIzaSyBidOMsX0DzROn3v29TBS_z1t40gxC0rM4'}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Wrapper>
            {/* <Navbar /> */}
        </>
    );
};

export default App;
