/* eslint-disable no-unused-vars */
import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                {/* lOGO */}
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>
                {/* ENLACES DE LA PAGINA */}
                <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                    {/* Renderizado dinamico mapeando el arreglo navLikns en los claves label href */}
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-none text-lg text-slate-gray"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* MENU HAMBURGUESA */}
                <div className="hidden max-lg:block">
                    <img src={hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
