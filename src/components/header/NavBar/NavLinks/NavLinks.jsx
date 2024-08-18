export const NavLinks = ({a, b, c, d, e}) =>{
    return (
        <ul className="flex gap-2 ml-10 mr-10 justify-between w-full">
            <li className="cursor-pointer">{a}</li>
            <li className="cursor-pointer">{b}</li>
            <li className="cursor-pointer">{c}</li>
            <li className="cursor-pointer">{d}</li>
            <li className="cursor-pointer">{e}</li>
        </ul>
    )
}