import { createSlice } from "@reduxjs/toolkit";
import { LIGHT_GREEN, LIGHT_RED, LIGHT_YELLOW } from "../constants/common";

const initialState = LIGHT_RED;

const xLightSlice = createSlice({
    name: "xLight",
    initialState,
    reducers: {
        run: (state) => {
            if (state.counter === 0) {
                switch (state.light) {
                    case LIGHT_RED.light:
                        state.counter = LIGHT_GREEN.counter;
                        state.light = LIGHT_GREEN.light;
                        break;
                    case LIGHT_GREEN.light:
                        state.counter = LIGHT_YELLOW.counter;
                        state.light = LIGHT_YELLOW.light;
                        break;
                    case LIGHT_YELLOW.light:
                        state.counter = LIGHT_RED.counter;
                        state.light = LIGHT_RED.light;
                        break;
                    default:
                        throw new Error();
                }
            } else {
                state.counter--;
            }
        }
    }
})

export const xLightActions = xLightSlice.actions;

export default xLightSlice;