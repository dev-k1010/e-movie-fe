import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSpinner } from "../../stores/quanLySpinner/quanLySpinnerReducer";

const SpinnerControl = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setSpinner(true));
  }, [location, dispatch]);

  return null;
};

export default SpinnerControl;