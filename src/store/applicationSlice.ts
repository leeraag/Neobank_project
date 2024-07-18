import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IApplication {
    applicationStep: number;
    applicationId: number | null;
}

const initialState: IApplication = {
    applicationStep: 1,
    applicationId: null,
};

const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
        setApplicationStep: (state, action: PayloadAction<number>) => {
            state.applicationStep = action.payload;
        },
        setApplicationId: (state, action: PayloadAction<number>) => {
            state.applicationId = action.payload;
        },
        clear: () => {}
    }
});

export const { setApplicationStep, setApplicationId } = applicationSlice.actions;
export const applicationStepState = (state: RootState) => state.application.applicationStep;
export const applicationIdState = (state: RootState)=> state.application.applicationId;
export default applicationSlice.reducer;