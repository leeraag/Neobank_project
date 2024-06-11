import { FC } from 'react';
import check from '../../../assets/icons/check.svg';
import person from '../../../assets/images/person.svg';
import './bankFeatures.scss';

type TFeature = {
    id: number,
    icon: string,
    text: string,
}

const features : Array<TFeature> = [
    { 
        id: 1, 
        icon: check,
        text: 'Powerfull online protection.',
    },
    { 
        id: 2, 
        icon: check,
        text: 'Cashback without borders.',
    },
    { 
        id: 3, 
        icon: check,
        text: 'Personal design',
    },
    { 
        id: 4, 
        icon: check,
        text: 'Work anywhere in the world',
    },
]

const BankFeatures: FC = () => {
    return (
        <article className='features'>
            <section className='features__image'>
                <figure>
                    <img src={person} alt='person' />
                </figure>
            </section>
            <section className='features__list'>
                <h3 className='features__list-header'>We Provide Many Features You Can Use</h3>
                <p className='features__list-text'>You can explore the features that we provide with fun and have their own 
                functions each feature</p>
                <ul>
                    {
                        features.map((feature) => {
                            return (
                                <li key={feature.id}>
                                    <img src={feature.icon} alt='check'/>
                                    {feature.text}
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        </article>
    );
};

export { BankFeatures };