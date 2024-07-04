import Money from '../../assets/icons/money.svg';
import Calendar from '../../assets/icons/calendar.svg';
import Clock from '../../assets/icons/clock.svg';
import Bag from '../../assets/icons/bag.svg';
import Credit_card from '../../assets/icons/credit_card.svg';

export interface IAbout {
    id: number;
    img: string;
    alt: string;
    title: string;
    description: string;
};

export const aboutItems: Array<IAbout> = [
    { 
        id: 1, 
        img: Money,
        alt: 'money',
        title: 'Up to 50 000 ₽',
        description: 'Cash and transfers without commission and percent', 
    },
    { 
        id: 2, 
        img: Calendar,
        alt: 'calendar',
        title: 'Up to 160 days',
        description: 'Without percent on the loan', 
    },
    { 
        id: 3, 
        img: Clock,
        alt: 'clock',
        title: 'Free delivery',
        description: 'We will deliver your card by courier at a convenient place and time for you', 
    },
    { 
        id: 4, 
        img: Bag,
        alt: 'bag',
        title: 'Up to 12 months',
        description: 'No percent. For equipment, clothes and other purchases in installments', 
    },
    { 
        id: 5, 
        img: Credit_card,
        alt: 'credit card',
        title: 'Convenient deposit and withdrawal',
        description: 'At any ATM. Top up your credit card for free with cash or transfer from other cards', 
    },
];