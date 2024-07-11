import { FC } from 'react';
import map from '@assets/images/map.svg';
import './map.scss';

const Map: FC = () => {
    return (
        <article className="map">
            <h3 className="map__header">You can use our services anywhere in the world</h3>
            <figure className="map__figure">
                <figcaption>Withdraw and transfer money online through our application</figcaption>
                <img src={map} alt="map"/>
            </figure>
        </article>
    );
};

export { Map };