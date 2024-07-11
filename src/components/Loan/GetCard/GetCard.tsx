import { FC } from 'react';
import './GetCard.scss';
import { IGetCardStep } from '../../../constant';

type TGetCardProps = {
    getCardSteps: Array<IGetCardStep>;
};

const GetCard: FC<TGetCardProps> = ({ getCardSteps }) => {
    return (
        <article className="getCard">
           <h3 className="getCard__header">How to get a card</h3>
           <section className="getCard__steps">
           {
                getCardSteps.map((step) => {
                    return (
                        <div className="getCard__steps-item" key={step.id}>
                            <div className='item__header'>
                                <div className='item__header-number'>{step.step}</div>
                                <div className='item__header-line'></div>
                            </div>
                            <p className='item__description'>{step.description}</p>
                        </div>
                    )
                })
            }
           </section>
        </article>
    );
};

export { GetCard };