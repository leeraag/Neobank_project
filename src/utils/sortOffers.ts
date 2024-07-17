import { IOffersList } from '../types/interfaces'

export const sortOffers = ( offers: IOffersList ) => {
    if (offers) {
        const sortedOffers = [...offers].sort((a, b) => a.rate - b.rate);
        return sortedOffers;
    } else {
        return offers;
    }
}