import { NavBar } from "./NavBar/NavBar"
import { Logos } from "./Logos/Logos"
import { Eslogan } from "./Eslogan/Eslogan"
import LogoPNG from "../../assets/img/logo/Logo.png"
import LupaPNG from "../../assets/img/logo/Lupa.png"
import CarroPNG from "../../assets/img/logo/Carro.png"
import InstagramPNG from "../../assets/img/logo/Instagram.png"
export const Header = () =>{
    return (
        <header>
            <Eslogan/>
            <Logos Logo={LogoPNG} Lupa={LupaPNG} Carro={CarroPNG} Insta={InstagramPNG}/>
            <NavBar/>
        </header>
    )
}