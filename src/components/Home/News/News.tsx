import { FC } from 'react';
import './news.scss';

const News: FC = () => {
    return (
        <article className="news">
            <h3 className="news__header">Current news from the world of finance</h3>
            <p className="news__text">We update the news feed every 15 minutes. You can learn more by 
                clicking on the news you are interested in.
            </p> 
        </article>
    );
};

export { News };