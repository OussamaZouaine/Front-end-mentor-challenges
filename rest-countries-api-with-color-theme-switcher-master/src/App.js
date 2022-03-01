import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeProvider';
import CountriesList from './pages/CountriesList';
import Country from './pages/Country';

function App() {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <main
            className={
                darkTheme
                    ? 'dark bg-very-dark-blue font-nunito text-white flex flex-col '
                    : 'bg-very-light-gray font-nunito text-darker-blue flex flex-col '
            }
        >
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<CountriesList />} />
                    <Route path="/:name" element={<Country />} />
                </Routes>
            </Router>
        </main>
    );
}

export default App;
