import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSpinner } from "../../stores/quanLySpinner/quanLySpinnerReducer";

const SpinnerControl = () => {
  const location = useLocation();
  const dispatch = useDispatch();

    // useEffect(() => {
    //   if (location.pathname !== "/home") {
    //     dispatch(setSpinner(true));
    //   }

    // }, [location, dispatch]);

  return null;
};

export default SpinnerControl;