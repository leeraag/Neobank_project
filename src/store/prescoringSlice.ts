import { type IPrescoringForm, type IOffersList } from "../types/interfaces";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IPrescoringState {
  formData: IPrescoringForm;
  offers: IOffersList;
  prescoringStep: number;
  status: string;
  buttonText: string;
}

const initialState: IPrescoringState = {
  formData: {
    amount: 150000,
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

// Other code such as selectors can use the imported `RootState` type
export const formDataState = (state: RootState) => state.prescoring.formData;
export const offersState = (state: RootState) => state.prescoring.offers;
export const prescoringStepState = (state: RootState) => state.prescoring.prescoringStep;
export const statusState = (state: RootState) => state.prescoring.status;
export const buttonTextState = (state: RootState) => state.prescoring.buttonText;

export default prescoringSlice.reducer;
