import { FC } from 'react';
import { Button } from '@UI';
import cardImage1 from '@assets/images/cardImage1.svg';
import cardImage2 from '@assets/images/cardImage2.svg';
import cardImage3 from '@assets/images/cardImage3.svg';
import cardImage4 from '@assets/images/cardImage4.svg';
import './chooseCard.scss';

type TCard = {
    id: number,
    img: string,
    alt: string,
}

const cards : Array<TCard> = [
    { 
        id: 1, 
        img: cardImage1,
        alt: 'cardImage1',
    },
    { 
        id: 2, 
        img: cardImage2,
        alt: 'cardImage2',
    },
    { 
        id: 3, 
        img: cardImage3,
        alt: 'cardImage3',
    },
    { 
        id: 4, 
        img: cardImage4,
        alt: 'cardImage4',
    }
]

const ChooseCard: FC = () => {
    return (
        <article className='card'>
            <section className='card__text'>
                <h1>Choose the design you like <br/> 
                    and apply for card right <br/>
                    now
                </h1>
                <Button className={"mainBtn"}>
                    Choose the card
                </Button>
            </section>
            <section className='card__images'>
                {
                    cards.map((card) => {
                        return (
                            <figure key={card.id}>
                                <img src={card.img} alt={card.alt} />
                            </figure>
                        );
                    })
                }
            </section>
        </article>
    );
};

export { ChooseCard };