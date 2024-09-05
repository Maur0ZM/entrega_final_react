import { Link } from 'react-router-dom';

export const NavLinks = ({ a, b, c, d, e }) => {
    return (
        <ul className="flex gap-2 ml-10 mr-10 justify-between w-full">
            <li className="cursor-pointer"><Link to="categoria/Aros">{a}</Link></li>
            <li className="cursor-pointer"><Link to="categoria/Pulseras">{b}</Link></li>
            <li className="cursor-pointer"><Link to="categoria/Collares">{c}</Link></li>
            <li className="cursor-pointer"><Link to="Nosotros">{d}</Link></li>
            <li className="cursor-pointer"><Link to="Contacto">{e}</Link></li>
        </ul>
    );
}
