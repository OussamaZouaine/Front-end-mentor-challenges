import { Link } from 'react-router-dom';

function CountryCard({ country }) {
    return (
        <div className="card flex flex-col bg-white dark:bg-dark-blue shadow-md rounded-md overflow-hidden">
            <Link to={`/${country.name}`} className="h-full">
                <img
                    src={country.flags.svg}
                    alt="country flag"
                    className="w-full h-[47%] object-cover"
                />
                <div className="px-6 pt-6 pb-2 h-[53%]">
                    <h1 className="font-bold mb-4">{country.name}</h1>
                    <p>
                        <span className="font-semibold">Population:</span>{' '}
                        {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="font-semibold">Region:</span>{' '}
                        {country.region}
                    </p>
                    <p>
                        <span className="font-semibold">Capital:</span>{' '}
                        {country.capital}
                    </p>
                </div>
            </Link>
        </div>
    );
}
export default CountryCard;
