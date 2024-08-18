export const Logos = ({Logo, Lupa, Carro, Insta}) =>{
    return (
        <div className="flex justify-between mr-10 ml-10 items-center mt-10 mb-10">
            <img className="size-8 cursor-pointer" src={Insta} alt="LogoInstagram" />
            <img className="size-20 cursor-pointer" src={Logo} alt="LogoJoyasPam" />
            <div className="flex gap-2">
                <img className="size-8 cursor-pointer" src={Lupa} alt="LogoLupa" />
                <img className="size-8 cursor-pointer" src={Carro} alt="LogoCarro" />
            </div>
        </div>
    )
}