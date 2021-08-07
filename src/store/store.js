import { configureStore } from "@reduxjs/toolkit";
import { lightSliceX, lightSliceY } from "./lightSlice";

export const store = configureStore({
    reducer: {
        lightX: lightSliceX.reducer,
        lightY: lightSliceY.reducer,
    },
})