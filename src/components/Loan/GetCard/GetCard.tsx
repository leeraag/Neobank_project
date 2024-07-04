import { FC } from 'react';
import './getCard.scss';

const GetCard: FC = () => {
    return (
        <article className="getCard">
           <h3 className="getCard__header">How to get a card</h3>
           <section className="getCard__steps">
                <div className="getCard__steps-item">
                    <div className='item__header'>
                        <div className='item__header-number'>1</div>
                        <div className='item__header-line'></div>
                    </div>
                    <p className='item__description'>Fill out an online application - you do not need to visit the bank</p>
                </div>
                <div className="getCard__steps-item">
                    <div className='item__header'>
                        <div className='item__header-number'>2</div>
                        <div className='item__header-line'></div>
                    </div>
                    <p className='item__description'>Find out the bank's decision immediately after filling out the application</p>
                </div>
                <div className="getCard__steps-item">
                    <div className='item__header'>
                        <div className='item__header-number'>3</div>
                        <div className='item__header-line'></div>
                    </div>
                    <p className='item__description'>The bank will deliver the card free of charge, wherever convenient, to your city</p>
                </div>
           </section>
        </article>
    );
};

export { GetCard };