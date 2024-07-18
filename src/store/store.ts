import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import prescoringReducer from "./prescoringSlice";
import applicationReducer from "./applicationSlice";

export const rootReducer = combineReducers({
    application: applicationReducer,
    prescoring: prescoringReducer
});
  
const persistConfig = {
    key: "root",
    storage
};
  
const persistedReducer = persistReducer(persistConfig, rootReducer);
  
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }
    ),
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const persistor = persistStore(store);
export default store;
  