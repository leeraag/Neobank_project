import { FC, useState } from 'react';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';
import hamburger from '../../../assets/icons/hamburger-menu.svg'
import './header.scss';

type TLinks = {
    headerlinks: Array<any>
}

const Header: FC<TLinks> = ({ headerlinks } ) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="header">
            <NavLink to="/" className="header__logo">
                NeoBank
            </NavLink>
            <nav className="header__navbar">
                <div className="header__navbar-icon" onClick={handleShowMenu}>
                    <img src={hamburger} alt="menu" />
                </div>
                <div className={`header__navbar-items  ${showMenu && "active"}`}>
                    <ul>
                        {
                            headerlinks.map((headerlink: any) => {
                                return (
                                    <li className="nav__item" key={headerlink.id}>
                                        <NavLink
                                            className="nav__link"
                                            to={headerlink.to ? headerlink.to : '/notfound'}
                                        >
                                            {headerlink.children}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                        <Button className={"mainBtn"}>Online Bank</Button>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export { Header };