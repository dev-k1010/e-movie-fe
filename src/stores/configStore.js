import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { quanLyDatVeReducer } from "./quanLyDatVeReducer/quanLyDatVeReducer";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDungReducer/quanLyNguoiDungReducer";
import { quanLyPhimReducer } from "./quanLyPhimReducer/quanLyPhimReducer";
import { quanLyRapReducer } from "./quanLyRapReducer/quanLyRapReducer";
import quanLySpinnerReducer from "./quanLySpinner/quanLySpinnerReducer";
import spinnerMiddleware from "../middleware/spinnerMiddleware/spinnerMiddleware";


const rootReducer = combineReducers({
   quanLyPhimReducer,
   quanLyRapReducer,
   quanLyNguoiDungReducer,
   quanLyDatVeReducer,
   quanLySpinnerReducer
})

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk, spinnerMiddleware),
   devTools: true,
});