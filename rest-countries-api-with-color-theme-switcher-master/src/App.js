import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './pages/CountriesList';
import Country from './pages/Country';
import { CountriesContext } from './context/CountriesProvider';

function App() {
    // const [countries, setCountries] = useContext(CountriesContext);

    // console.log(countries);

    return (
        <div className="font-nunito text-darker-blue flex flex-col gap-1">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<CountriesList />} />
                    <Route path="/:name" element={<Country />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
