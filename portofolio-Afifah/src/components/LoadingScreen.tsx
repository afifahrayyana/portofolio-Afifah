import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

type LoadingScreenProps = {
  onFinish: () => void; // fungsi callback ketika loading selesai
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // fetch animasi dari link lottie.host
    fetch(
      "https://lottie.host/41b743c2-91cf-42b2-8ea1-2405dd64c4d1/TdjJ2lRNvT.lottie"
    )
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(console.error);

    // simulasi loading 2 detik
    const timer = setTimeout(() => onFinish(), 2000);
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
        backgroundColor: "#ffffff",
      }}
    >
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: 300, height: 300 }}
        />
      ) : (
        <p>Loading animation...</p>
      )}
    </div>
  );
};

export default LoadingScreen;