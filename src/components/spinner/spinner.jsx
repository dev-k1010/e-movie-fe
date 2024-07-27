import React from "react";
import Lottie from "lottie-react";
import { useSelector } from "react-redux";
import spinner_amination from "./spinner_amination.json";

export default function Spinner() {
  const isLoading = useSelector((state) => state.quanLySpinnerReducer.spinner);

  return isLoading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 500000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={spinner_amination}
        loop={true}
        className="w-60"
      />
    </div>
  ) : null;
}
