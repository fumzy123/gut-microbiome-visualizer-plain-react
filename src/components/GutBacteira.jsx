// Import Data from JSON (Automatically changed to a JavaScript Object)
import {
  beneficialBacteria,
  pathogenicBacteria,
} from '../data/bacteria.data';

export default function GutBacteria() {
  // --------------- Data Mapping --------------
  const beneficialBacteriaNameArray = Object.keys(beneficialBacteria);
  const pathogenicBacteriaNameArray = Object.keys(pathogenicBacteria);

  // ---------- Render ---------------------
  return (
    <>
      {/* Render out Beneficial Bacteria */}
      {beneficialBacteriaNameArray.map((bacteria, index) => {
        console.log(bacteria);
        return (
          <mesh key={index} position={[index, 0, 0]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshBasicMaterial
              color={beneficialBacteria[bacteria].color}
            />
          </mesh>
        );
      })}

      {/* Render out Pathogenic Bacteria */}
      {pathogenicBacteriaNameArray.map((bacteria, index) => {
        return (
          <mesh key={index} position={[index, 1, 0]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshBasicMaterial
              color={pathogenicBacteria[bacteria].color}
            />
          </mesh>
        );
      })}
    </>
  );
}
