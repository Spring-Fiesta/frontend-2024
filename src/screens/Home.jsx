import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader1 from "../components/Loader1";

// Spline 3D disabled due to WASM runtime crash
// To re-enable, uncomment the Spline import and SplineWrapper usage below
// import Spline from '@splinetool/react-spline';

const ENABLE_SPLINE = false; // Set to true to re-enable 3D scene

const Home = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState(false);
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    const clientWidth = document.documentElement.clientWidth;
    console.log(clientWidth);
    if (clientWidth < 1000) {
      setClient(true);
      setTimeout(() => {
        navigate("/events");
      }, 2000);
    } else {
      setScreenLoading(true);
      setTimeout(() => {
        setScreenLoading(false);
        // Redirect to events after loading since Spline is disabled
        if (!ENABLE_SPLINE) {
          navigate("/events");
        }
      }, 2000);
    }

    // eslint-disable-next-line
  }, []);

  // Fallback UI when Spline is disabled
  const FallbackHome = () => (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      <Loader1 />
      <h2
        style={{ color: "whitesmoke", marginTop: "20px", textAlign: "center" }}
      >
        Welcome!
      </h2>
      <h4 style={{ color: "#aaa", marginTop: "10px" }}>
        Redirecting to events...
      </h4>
    </div>
  );

  return (
    <div>
      {screenLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "22% 0% 0% 0%",
            color: "whitesmoke",
          }}
        >
          Please wait... awesome things take time.
        </div>
      )}
      {!client ? (
        <FallbackHome />
      ) : (
        <div
          style={{
            backgroundColor: "grey",
            width: "100vw",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Loader1 />
          <h3 style={{ marginTop: "10px", textAlign: "center" }}>
            Use your PC for better experience
          </h3>
          <h3>Redirecting...</h3>
        </div>
      )}
    </div>
  );
};
export default Home;
