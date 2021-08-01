import { configureStore } from "@reduxjs/toolkit";
import xLightSlice from "./xLightSlice";

export const store = configureStore({
    reducer: {
        xLight: xLightSlice.reducer,
    },
})