import { Link } from 'react-router-dom';
import { CartWidget } from "./CartWidget/CartWidget";

export const Logos = ({ Logo, Lupa, Carro, Insta }) => {
    return (
        <div className="flex justify-between mr-10 ml-10 items-center mt-10 mb-10">
            <img className="size-8 cursor-pointer" src={Insta} alt="LogoInstagram" />
            <Link to="/">
                <img className="size-20 cursor-pointer" src={Logo} alt="LogoJoyasPam" />
            </Link>
            <div className="flex gap-5">
                <img className="size-8 cursor-pointer" src={Lupa} alt="LogoLupa" />
                <Link to="/cart">
                    <img className="size-8 cursor-pointer" src={Carro} alt="LogoCarro" />
                </Link>
                <CartWidget />
            </div>
        </div>
    )
}
