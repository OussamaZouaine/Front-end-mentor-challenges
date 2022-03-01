import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

function Navbar() {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    return (
        <nav className="flex items-center bg-white dark:bg-dark-blue h-[10vh] w-full shadow-md">
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
                <Link to={'/'}>
                    <h1 className="text-base sm:text-xl md:text-2xl font-bold">
                        Where in the world?
                    </h1>
                </Link>
                {darkTheme ? (
                    <div
                        className="flex text-sm md:text-base items-center gap-x-2 font-semibold cursor-pointer"
                        onClick={() =>
                            setDarkTheme((currentTheme) => !currentTheme)
                        }
                    >
                        <SunIcon className="w-4 h-4" />
                        <span>Light Mode</span>
                    </div>
                ) : (
                    <div
                        className="flex text-sm md:text-base items-center gap-1 font-semibold cursor-pointer"
                        onClick={() =>
                            setDarkTheme((currentTheme) => !currentTheme)
                        }
                    >
                        <MoonIcon className="w-4 h-4" />
                        <span>Dark Mode</span>
                    </div>
                )}
            </div>
        </nav>
    );
}
export default Navbar;
