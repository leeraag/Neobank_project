export interface IReceivingCard {
    id: number;
    title: string;
    description: string;
};

export const receivingCardItems: Array<IReceivingCard> = [
    { 
        id: 1,
        title: 'How to get a card?',
        description: 'We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days.', 
    },
    { 
        id: 2,
        title: 'What documents are needed and how old should one be to get a card?',
        description: 'Need a passport. You must be between 20 and 70 years old.', 
    },
    { 
        id: 3,
        title: 'In what currency can I issue a card?',
        description: 'In rubles, dollars or euro', 
    },
    { 
        id: 4,
        title: 'How much income do I need to get a credit card?',
        description: 'To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.', 
    },
    { 
        id: 5,
        title: 'How do I find out about the bank\'s decision on my application?',
        description: 'After registration, you will receive an e-mail with a decision on your application.', 
    },
];