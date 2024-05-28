// Import Libraries
import { OrbitControls, Grid } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';

// Import Components
import SideBar from './components/SideBar';

// Styling
import './styles/global.css';

function App() {
  return (
    <>
      <Canvas>
        {/* Debug Tools */}
        <axesHelper />
        <Grid
          sectionSize={3}
          sectionColor={'purple'}
          sectionThickness={1}
          cellSize={1}
          cellColor={'#6f6f6f'}
          cellThickness={0.6}
          infiniteGrid
          fadeDistance={50}
          fadeStrength={5}
        />

        {/* Camera Controls & Lighting */}
        <OrbitControls />
        <ambientLight intensity={3} />

        {/* Experience */}
        <Experience />
      </Canvas>

      <SideBar />
    </>
  );
}

export default App;
