// Import Libraries
import * as THREE from 'three';

// Import Styling
import '../styles/sideBar.css';

import { useSideBarStore } from '../store/app-store';

export default function SideBar() {
  // Event Handler
  // const rotateGutCollection = () => {};

  // Get the Setter Function for the rotation
  const setRotation = useSideBarStore((state) => state.setRotation);

  // ----------- Render ----------------
  return (
    <>
      <div className="side-bar">
        <h2>Buttons</h2>
        <button
          className="gut-report-btn"
          onClick={() => setRotation([0, 0, 0])}
        >
          Gut Report 1
        </button>
        <button
          className="gut-report-btn"
          onClick={() => setRotation([0, Math.PI / 4, 0])}
        >
          Gut Report 2
        </button>
        <button className="gut-report-btn">Gut Report 3</button>
        <button className="gut-report-btn">Gut Report 4</button>
      </div>
    </>
  );
}
