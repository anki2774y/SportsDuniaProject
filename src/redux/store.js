import { configureStore } from "@reduxjs/toolkit";
import { collegeReducer } from './reducer/collegeReducer';

export const store = configureStore({
    reducer: {
        collegeReducer
    }
});
