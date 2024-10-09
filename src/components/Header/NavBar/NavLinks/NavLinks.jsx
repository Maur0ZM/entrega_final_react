import { Link, useLocation } from 'react-router-dom';

export const NavLinks = ({ a, b, c, d, e }) => {
    const location = useLocation();

    return (
        <ul className="flex gap-2 ml-10 mr-10 justify-between w-full">
            <li className={`cursor-pointer border-b-2 ${location.pathname === '/categoria/Aros' ? 'border-black' : 'border-transparent'} hover:border-black`}>
                <Link to="categoria/Aros">{a}</Link>
            </li>
            <li className={`cursor-pointer border-b-2 ${location.pathname === '/categoria/Pulseras' ? 'border-black' : 'border-transparent'} hover:border-black`}>
                <Link to="categoria/Pulseras">{b}</Link>
            </li>
            <li className={`cursor-pointer border-b-2 ${location.pathname === '/categoria/Collares' ? 'border-black' : 'border-transparent'} hover:border-black`}>
                <Link to="categoria/Collares">{c}</Link>
            </li>
            <li className={`cursor-pointer border-b-2 ${location.pathname === '/Nosotros' ? 'border-black' : 'border-transparent'} hover:border-black`}>
                <Link to="Nosotros">{d}</Link>
            </li>
            <li className={`cursor-pointer border-b-2 ${location.pathname === '/Contacto' ? 'border-black' : 'border-transparent'} hover:border-black`}>
                <Link to="Contacto">{e}</Link>
            </li>
        </ul>
    );
}
