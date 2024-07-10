import { FC } from 'react';
import card from '@assets/images/cardImage1.svg';
import './platinumCard.scss';
import { Button, Tooltip } from '@UI';
import { ICardFeature } from '../../../constant';

type TPlatinumCardProps = {
    scroll: () => void;
    cardFeatures: Array<ICardFeature>;
};

const PlatinumCard: FC<TPlatinumCardProps> = ({ scroll, cardFeatures }) => {
    return (
        <article className="creditCard">
            <section className="creditCard__description">
                <h2 className="creditCard__description-header">Platinum digital credit card</h2>
                <p className="creditCard__description-text">
                    Our best credit card. Suitable for everyday spending and shopping.
                </p>
                <p className="creditCard__description-text">
                    Cash withdrawals and transfers without commission and interest.
                </p>
                <div className="creditCard__description-features">
                    {
                        cardFeatures.map((feature) => {
                            return (
                                <div className="feature" key={feature.id}>
                                    <p className="feature__title">{feature.title}</p>
                                    <Tooltip text={feature.tooltipText}>
                                        <p className="feature__text">{feature.text}</p>
                                    </Tooltip>
                                </div>
                            )
                        })
                    }
                </div>
                <Button className={"mainBtn"} onClick={scroll}>Apply for card</Button>
            </section>
            
            <figure className="creditCard__figure">
                <img src={card} alt="card"/>
            </figure>
        </article>
    );
};

export { PlatinumCard };