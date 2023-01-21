import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WhereTo from './pages/WhereTo';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/whereTo" element={<WhereTo />} />
            </Routes>
        </>
    );
};

export default App;
