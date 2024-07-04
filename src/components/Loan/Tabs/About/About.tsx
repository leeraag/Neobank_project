import { FC } from 'react';
import { IAbout } from '../../../../constant';
import './about.scss';

type TAboutProps = {
    about: Array<IAbout>;
};

const About: FC<TAboutProps> = ({ about }) => {
    return (
        <article className="about">
            {
                about.map((aboutItem) => {
                    return (
                        <section key={aboutItem.id} className="about__item">
                            <img src={aboutItem.img} alt={aboutItem.alt} />
                            <h3 className="about__item-title">{aboutItem.title}</h3>
                            <p className="about__item-description">{aboutItem.description}</p>
                        </section>
                    )
                })
            }
        </article>
    );
};

export { About };