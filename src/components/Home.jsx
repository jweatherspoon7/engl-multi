import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Bounds } from "@react-three/drei";
import Going_merry from "../../public/Going_merry";
import NavBar from "./Navbar";

export default function Home() {
  const navigate = useNavigate();


  const goOrigins = () => {
    console.log("hi");
    navigate(`/origins`);
  };

  return (
          
    <div className="relative w-full h-screen overflow-hidden bg-blue-400 text-white font-serif flex">
      {/* ---------- LEFT TEXT PANEL ---------- */}
      <div className="relative z-20 w-1/2 flex flex-col justify-center px-10 md:px-16">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-xl">
          Anime Pirates
        </h1>

        <p className="max-w-md mt-6 text-lg md:text-xl drop-shadow-lg">
          Sail the high seas of anime — discover, explore, and stream legendary treasure beyond the horizon.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="px-6 py-3 bg-white/20 border border-white rounded-lg font-bold hover:bg-white/30 transition"
              onClick={goOrigins}>
            Learn More
          </button>

        </div>
      </div>

      {/* ---------- RIGHT 3D MODEL ---------- */}
      <div className="w-1/2 h-full relative z-10">
        <Canvas camera={{ position: [-6, 4.5, 4.5], fov: 45 }}>
          <ambientLight />

          <Suspense fallback={null}>
            <Bounds fit clip observe margin={1.2}>
              <Going_merry />
            </Bounds>
          </Suspense>

          <Environment preset="sunset" />
        </Canvas>
      </div>

    </div>
  );
}
