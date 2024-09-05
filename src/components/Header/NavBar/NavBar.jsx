import { NavLinks } from "./NavLinks/NavLinks"

export const NavBar = () =>{
    return (
        <nav className="flex justify-between items-center w-full">
            <NavLinks a="Aros" b="Pulseras" c="Collares" d="Nosotros" e="Contacto"/>
        </nav>
    )
}   