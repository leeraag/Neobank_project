export interface ICurrency {
    from: string;
    to: string;
};

export const baseCurrencies: Array<ICurrency> = [
    { from: 'USD', to: 'RUB' },
    { from: 'EUR', to: 'RUB' },
    { from: 'CAD', to: 'RUB' },
    { from: 'CNY', to: 'RUB' },
    { from: 'CHF', to: 'RUB' },
    { from: 'SGD', to: 'RUB' },
];

// export interface ICurrencyResult {
//     rub: string;
// };

export const mockCurrencies: string[] = [ '88', '95,34', '64,55', '11,95', '97,93', '65,18']
    // {rub: '88'},
    // {rub: '95,34'},
    // {rub: '64,55'},
    // {rub: '11,95'},
    // {rub: '97,93'},
    // {rub: '65,18'},
