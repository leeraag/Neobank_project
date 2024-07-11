type THeaderLinks = {
    id: number;
    children: string;
    to?: string;
};

export const headerlinks: Array<THeaderLinks> = [
    {
        id: 1,
        children: 'Credit card',
        to: '/loan'
    },
    {
        id: 2,
        children: 'Product',
        // to: '/'
    },
    {
        id: 3,
        children: 'Account',
        // to: '/'
    },
    {
        id: 4,
        children: 'Resources',
        // to: '/'
    }
];