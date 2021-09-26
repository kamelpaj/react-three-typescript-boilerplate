import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./styles.css";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<span>loading...</span>}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
