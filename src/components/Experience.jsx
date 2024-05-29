// Import Libraries
import { motion } from 'framer-motion-3d';

// Imports Store
import { useSideBarStore } from '../store/app-store';

// Import Components
import { SmallAndLargeIntestine } from './SmallAndLargeIntestine';

export default function Experience() {
  // Get State from Store
  const rotation = useSideBarStore((state) => state.rotation);
  console.log(rotation);
  // Render
  return (
    <>
      {/* Stomach */}
      <motion.group animate={{ rotateY: rotation[1] }}>
        <SmallAndLargeIntestine position={[-0.5, 0, 2]} />
        <SmallAndLargeIntestine
          position={[0.5, 0, -2]}
          rotation={[0, Math.PI, 0]}
        />
        <SmallAndLargeIntestine
          position={[2, 0, 0.5]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <SmallAndLargeIntestine
          position={[-2, 0, -0.5]}
          rotation={[0, (3 * Math.PI) / 2, 0]}
        />
      </motion.group>
    </>
  );
}
