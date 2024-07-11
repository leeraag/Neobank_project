import { FC, ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { Button } from '@UI';
import airplane from '@assets/icons/airplane.svg'
import email from '@assets/icons/email.svg'
import './subscribe.scss'
import { postEmail } from '@api';

const Subscribe: FC = () => {
    const [emailValue, setEmailValue] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('isSubscribed') === 'true') {
            setIsSubscribed(true);
        }
    }, []);

    const subscribeEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubscribed === false && emailValue.length > 0) {
            await postEmail(emailValue).then(() => {
                localStorage.setItem('isSubscribed', 'true');
                setIsSubscribed(true);
            })
        }
    }

    const inputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    }

    if (isSubscribed === false) {
        return (
            <article className="subscribe">
                <h3 className="subscribe__header">Support</h3>
                <p>Subscribe Newsletter & get</p>
                <p>Bank News</p>
                <form className="subscribe__form" onSubmit={(e) => subscribeEmail(e)}>
                    <label className="subscribe__form-label">
                        <img src={email} alt="email" />
                    </label>
                    <input 
                        type='email' 
                        placeholder="Your email" 
                        className="subscribe__form-input"
                        onChange={inputEmail}
                    >
                    </input>
                    <Button className={"subscribeBtn"} type='submit'>
                        <img src={airplane} alt='subscribe'/>
                        Subscribe
                    </Button>
                </form>
            </article>
        );
    } else {
        return (
            <article className="subscribe">
                <p>You are already subscribed to the bank's newsletter</p>
            </article>
            
        )
    }
};

export { Subscribe };