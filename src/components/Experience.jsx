// Import Libraries
import { motion } from 'framer-motion-3d';

// Imports Store
import { useSideBarStore } from '../store/app-store';

// Import Components
import { SmallAndLargeIntestine } from './SmallAndLargeIntestine';

export default function Experience() {
  // Get Current Rotation State from the Store
  const rotation = useSideBarStore((state) => state.rotation);
  console.log(rotation);

  // Render
  return (
    <>
      {/* Stomach */}
      <motion.group animate={{ rotateY: rotation[1] }}>
        <SmallAndLargeIntestine
          position={[-0.5, 0, 2]}
          color={{ r: 1, g: 0, b: 0, isColor: true }}
        />
        <SmallAndLargeIntestine
          position={[0.5, 0, -2]}
          rotation={[0, Math.PI, 0]}
          color={{ r: 0, g: 1, b: 0, isColor: true }}
        />
        <SmallAndLargeIntestine
          position={[2, 0, 0.5]}
          rotation={[0, Math.PI / 2, 0]}
          color={{ r: 0, g: 0, b: 1, isColor: true }}
        />
        <SmallAndLargeIntestine
          position={[-2, 0, -0.5]}
          rotation={[0, (3 * Math.PI) / 2, 0]}
          color={{ r: 0, g: 1, b: 1, isColor: true }}
        />
      </motion.group>
    </>
  );
}
