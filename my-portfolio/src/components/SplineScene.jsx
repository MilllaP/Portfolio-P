import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spline from "@splinetool/react-spline";
import "/src/assets/styles/SplineScene.css";

export default function SplineScene({ onLoadComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [sceneUrl, setSceneUrl] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const newSceneUrl =
        window.innerWidth <= 600
          ? "https://prod.spline.design/JrNHRiU8sRmY4U0G/scene.splinecode"
          : "https://prod.spline.design/eGWJO55XTIpIcnn7/scene.splinecode";

      if (newSceneUrl !== sceneUrl) {
        setIsLoading(true);
        setSceneUrl(newSceneUrl);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sceneUrl]);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoadComplete) {
      onLoadComplete();
    }
  };

  return (
    <div className="spline-scene">
      {isLoading && (
        <div className="loading-logo">
          <div className="loader" aria-label="Loading..."></div>
        </div>
      )}
      {sceneUrl && (
        <Spline key={sceneUrl} scene={sceneUrl} onLoad={handleLoad} />
      )}
    </div>
  );
}

SplineScene.propTypes = {
  onLoadComplete: PropTypes.func,
};
