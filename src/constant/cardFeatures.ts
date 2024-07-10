export interface ICardFeature {
    id: number;
    title: string;
    text: string;
    tooltipText: string;
};

export const cardFeatures: Array<ICardFeature> = [
    {
        id: 1,
        title: 'Up to 160 days',
        text: 'No percent',
        tooltipText: 'When repaying the full debt up to 160 days.',
    },
    {
        id: 2,
        title: 'Up to 600 000 ₽',
        text: 'Credit limit',
        tooltipText: 'Over the limit willaccrue percent.',
    },
    {
        id: 3,
        title: '0 ₽',
        text: 'Card service is free',
        tooltipText: 'Promotion valid until December 31, 2022.',
    }
];