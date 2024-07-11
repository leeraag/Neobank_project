export interface IUsingCard {
    id: number;
    title: string;
    description: string;
};

export const usingCardItems: Array<IUsingCard> = [
    { 
        id: 1,
        title: 'What is an interest free credit card?',
        description: 'A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period.', 
    },
    { 
        id: 2,
        title: 'How to activate a credit card',
        description: 'You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad.', 
    },
    { 
        id: 3,
        title: 'What is a settlement date?',
        description: 'The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement.', 
    },
    { 
        id: 4,
        title: 'What do I need to know about interest rates?',
        description: 'For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.', 
    },
];