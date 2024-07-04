import { FC } from 'react';
import card from '../../../assets/images/cardImage1.svg';
import './platinumCard.scss';
import { Button, Tooltip } from '../../UI';

type TPlatinumCardProps = {
    scroll: () => void
};

const PlatinumCard: FC<TPlatinumCardProps> = ({ scroll }) => {
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
                    <div className="feature">
                        <p className="feature__title">Up to 160 days</p>
                        <Tooltip text="When repaying the full debt up to 160 days.">
                            <p className="feature__text">No percent</p>
                        </Tooltip>
                    </div>
                    <div className="feature">
                        <p className="feature__title">Up to 600 000 ₽</p>
                        <Tooltip text="Over the limit willaccrue percent">
                            <p className="feature__text">Credit limit</p>
                        </Tooltip>
                    </div>
                    <div className="feature">
                        <p className="feature__title">0 ₽</p>
                        <Tooltip text="Promotion valid until December 31, 2022.">
                            <p className="feature__text">Card service is free</p>
                        </Tooltip>
                    </div>
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