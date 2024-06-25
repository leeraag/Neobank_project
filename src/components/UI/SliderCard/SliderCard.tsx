import { FC } from 'react';
import './sliderCard.scss';

type TNewsProps = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
};

const SliderCard: FC<TNewsProps> = ({ title, description, url, urlToImage }) => {
    return(
        <section className='sliderCard'>
            <a href={url} className='sliderCard__title-link' target='blank'>
                <figure className='sliderCard__figure'>
                    <img src={urlToImage} alt="" className='sliderCard__figure-img'/>
                </figure>
                <h4 className='sliderCard__title'>
                    {title}
                </h4>
                <p className='sliderCard__description'>
                    {description}
                </p>
            </a>
        </section>
    )
};

export { SliderCard };