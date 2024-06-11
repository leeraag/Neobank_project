import { FC } from 'react';
import { Button } from '../../UI';
import airplane from '../../../assets/icons/airplane.svg'
import email from '../../../assets/icons/email.svg'
import './subscribe.scss'

const Subscribe: FC = () => {
    return (
        <article className="subscribe">
            <h3 className="subscribe__header">Support</h3>
            <p>Subscribe Newsletter & get</p>
            <p>Bank News</p>
            <form className="subscribe__form">
                <label className="subscribe__form-label">
                    <img src={email} alt="email" />
                </label>
                <input type='email' placeholder="Your email" className="subscribe__form-input"></input>
                <Button className={"subscribeBtn"}>
                    <img src={airplane} alt='subscribe'/>
                    Subscribe
                </Button>
            </form>
        </article>
    );
};

export { Subscribe };