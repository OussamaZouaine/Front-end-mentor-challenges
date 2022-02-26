import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesProvider';
import ArrowLeftIcon from '@heroicons/react/outline/ArrowLeftIcon';

function Country() {
    // const [country, setCountry] = useState([]);
    const { name } = useParams();
    const { countries, setCountries, fetchCountries } =
        useContext(CountriesContext);

    useEffect(() => {
        fetchCountries(name);
    }, []);

    return (
        <main className="bg-very-light-gray min-h-[89vh]">
            <div className="w-full max-w-7xl mx-auto flex flex-wrap flex-col p-4">
                <Link
                    to={'/'}
                    className="w-fit flex items-center mb-10 py-2 px-6 rounded-md shadow-md gap-2 text-dark-gray bg-white font-semibold"
                >
                    <ArrowLeftIcon className="w-5 h-5" /> Back
                </Link>
                {countries.length === 0 ? name : countries[0].name ?? 'hello'}
            </div>
            <img src={countries[0].flags.svg} alt="" />
        </main>
    );
}
export default Country;
