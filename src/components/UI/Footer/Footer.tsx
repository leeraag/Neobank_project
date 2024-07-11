import { FC } from 'react';
import { Link } from 'react-router-dom';
import neoflex from '@assets/images/neoflex.svg'
import './footer.scss';

type TLinks = {
    footerlinks: Array<any>
}

const Footer: FC<TLinks> = ({ footerlinks } ) => {
    return (
        <footer className="footer">
            <div className="footer__title">
                <a href="https://www.neoflex.ru/" className="footer__title-link">
                    <figure>
                        <img src={neoflex} alt="neoflex"/>
                    </figure>
                </a>
                <div className="footer__title-contacts">
                    <p className="phone">+7 (495) 984 25 13</p>
                    <p className="email">info@neoflex.ru</p>
                </div>
            </div>
            <nav className="footer__navlinks">
                <ul className="footer__navlinks-list">
                    {
                        footerlinks.map((footerlink: any) => {
                            return (
                                <li className="footer__item" key={footerlink.id}>
                                    <Link
                                        to={footerlink.to ? footerlink.to : '/notfound'}
                                    >
                                        {footerlink.children}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className="divider"></div>
            <p>
            We use cookies to personalize our services and improve the user experience of our 
            website. Cookies are small files containing information about previous visits to 
            a website. If you do not want to use cookies, please change your browser settings
            </p>
        </footer>
    );
};

export { Footer };