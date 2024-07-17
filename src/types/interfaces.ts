export interface INews {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

export interface IPrescoringForm {
    amount: number | string;
    term: number;
    firstName: string;
    lastName: string;
    middleName: string | null;
    email: string;
    birthdate: string;
    passportSeries: string;
    passportNumber: string;
}

export interface IOffer {
    applicationId: number,
    requestedAmount: number,
    totalAmount: number,
    term: number,
    monthlyPayment: number,
    rate: number,
    isInsuranceEnabled: boolean,
    isSalaryClient: boolean
}

export type IOffersList = IOffer[];