import { FC, useState } from 'react';
import './news.scss';
import { SliderCard } from '../../UI';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';
import { INews } from '../../../types/interfaces';

type TNewsProps = {
    news: Array<INews>
};

const News: FC<TNewsProps> = ({ news }) => {
    // кнопки
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

    return (
        <article className="news">
            <h3 className="news__header">Current news from the world of finance</h3>
            <p className="news__text">We update the news feed every 15 minutes. You can learn more by 
                clicking on the news you are interested in.
            </p>
            <section className="news__slider">
                <Swiper 
                    className="swiper-container"
                    modules={[Navigation]}
                    navigation={{ prevEl, nextEl }}
                    slidesOffsetAfter = {10}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        500: {
                          slidesPerView: 1.5,
                          spaceBetween: 40,
                        },
                        600: {
                          slidesPerView: 1.5,
                          spaceBetween: 20,
                        },
                        800: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        900: {
                          slidesPerView: 2.5,
                          spaceBetween: 80,
                        },
                        1300: {
                          slidesPerView: 3,
                          spaceBetween: 80,
                        },
                    }}>
                    {
                        news.map(({title, description, url, urlToImage}) => {return (
                            <SwiperSlide key={title} className='slide'>
                                <SliderCard title={title} description={description} url={url} urlToImage={urlToImage}/>
                            </SwiperSlide>
                        )}) 
                    }
                </Swiper>
                <div className='news__buttons'>
                    <button className='news__buttons-prev' ref={(node) => setPrevEl(node)}></button>
                    <button className='news__buttons-next' ref={(node) => setNextEl(node)}></button>
                </div>
            </section>
        </article>
    );
};

export { News };