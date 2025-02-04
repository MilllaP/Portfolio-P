import { useState } from "react";
import Home from "./pages/Homepage";
import "/src/assets/styles/App.css";
import SplineScene from "./components/SplineScene";

const App = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const handleSplineLoadComplete = () => {
    setIsSplineLoaded(true);
  };

  return (
    <>
      <SplineScene onLoadComplete={handleSplineLoadComplete} />
      {isSplineLoaded && <Home isSplineLoaded={isSplineLoaded} />}
    </>
  );
};

export default App;
