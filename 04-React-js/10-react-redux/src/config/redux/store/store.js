import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlice";

export const store = configureStore({
    reducer: todoReducer
});

//useDispatch  || redux ka undar data bhejna ka liya use hota ha
//use selector || redux ki state mangwana ka liya