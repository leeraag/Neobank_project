export interface IGetCardStep {
    id: number;
    step: number;
    description: string;
};

export const getCardSteps: Array<IGetCardStep> = [
    {
        id: 1,
        step: 1,
        description: 'Fill out an online application - you do not need to visit the bank',
    },
    {
        id: 2,
        step: 2,
        description: 'Find out the bank\'s decision immediately after filling out the application',
    },
    {
        id: 3,
        step: 3,
        description: 'The bank will deliver the card free of charge, wherever convenient, to your city',
    }
];