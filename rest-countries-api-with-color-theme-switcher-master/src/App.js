import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './pages/CountriesList';
import Country from './pages/Country';

function App() {
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
