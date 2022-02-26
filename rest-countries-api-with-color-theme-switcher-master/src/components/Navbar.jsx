import MoonIcon from '@heroicons/react/outline/MoonIcon';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex items-center h-[10vh] w-full shadow-md">
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
                <Link to={'/'}>
                    <h1 className="text-2xl font-bold">Where in the world?</h1>
                </Link>
                <div className="flex items-center gap-1 font-semibold cursor-pointer">
                    <MoonIcon className="w-4 h-4" />
                    <span>Dark Mode</span>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
