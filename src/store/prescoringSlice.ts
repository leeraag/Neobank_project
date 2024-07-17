import { type IPrescoringForm, type IOffersList } from "../types/interfaces";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IPrescoringState {
  formData: IPrescoringForm;
  offers: IOffersList;
  prescoringStep: number;
  status: string;
  buttonText: string;
}

const initialState: IPrescoringState = {
  formData: {
    amount: "",
    term: 6,
    firstName: "",
    lastName: "",
    middleName: null,
    email: "",
    birthdate: "",
    passportSeries: "",
    passportNumber: ""
  },
  offers: [],
  prescoringStep: 1,
  status: "success",
  buttonText: "Apply for card",
};

const prescoringSlice = createSlice({
  name: "prescoring",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IPrescoringForm>) => {
      state.formData = action.payload;
    },
    setOffers: (state, action: PayloadAction<IOffersList>) => {
      state.offers = action.payload;
    },
    setPrescoringStep: (state, action: PayloadAction<number>) => {
      state.prescoringStep = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setButtonText: (state, action: PayloadAction<string>) => {
      state.buttonText = action.payload;
    },
  }
});

export const { setFormData, setOffers, setPrescoringStep, setStatus, setButtonText } = prescoringSlice.actions;
export const formDataState = (state: any) => state.formData;
export const offersState = (state: any)=> state.offers;
export const prescoringStepState = (state: any) => state.prescoringStep;
export const statusState = (state: any) => state.status;
export const buttonTextState = (state: any) => state.buttonText;

export default prescoringSlice.reducer;
