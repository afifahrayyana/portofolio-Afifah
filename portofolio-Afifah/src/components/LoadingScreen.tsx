import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "./loadingAnimation.json";

type LoadingScreenProps = {
  onFinish: () => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "hsl(200 60% 42%)",
      }}
    >
      <Lottie
        animationData={animationData}
        loop
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default LoadingScreen;