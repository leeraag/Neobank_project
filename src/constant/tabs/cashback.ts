export interface ICashback {
    id: number;
    category: string;
    cashback: string;
};

export const cashbackItems: Array<ICashback> = [
    { 
        id: 1, 
        category: 'For food delivery, cafes and restaurants',
        cashback: '5%',
    },
    { 
        id: 2, 
        category: 'In supermarkets with our subscription',
        cashback: '5%',
    },
    { 
        id: 3, 
        category: 'In clothing stores and children\'s goods',
        cashback: '2%',
    },
    { 
        id: 4, 
        category: 'Other purchases and payment of services and fines',
        cashback: '1%',
    },
    { 
        id: 5, 
        category: 'Shopping in online stores',
        cashback: 'Up to 3%',
    },
    { 
        id: 6, 
        category: 'Purchases from our partners',
        cashback: '30%',
    },
];