import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import jokeReducer from "../features/joke/jokeSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        joke: jokeReducer,
    },
});
