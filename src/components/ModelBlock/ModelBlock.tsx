import { OrbitControls, useFBX } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import cnBind from 'classnames/bind';
import { Suspense, useRef, useState } from 'react';

import styles from './ModelBlock.module.scss';

import type { ModelBlockProps, SceneProps } from './ModelBlock.types';
import type { Mesh } from 'three';

const cx = cnBind.bind(styles);

const Scene = ({ modelPath, isAnimated, scale = 1 }: SceneProps) => {
  const fbx = useFBX(modelPath);

  const myMesh = useRef<Mesh>();

  useFrame(() => {
    if (isAnimated && myMesh.current?.rotation) {
      myMesh.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={myMesh}
      object={fbx}
      scale={scale}
    />
);
};

export const ModelBlock = ({ modelPath, className, scale }: ModelBlockProps) => {
  const [isAnim, setIsAnim] = useState(true);

  const cameraRef = useRef(null);

  return (
    <div className={cx('model-block', className)}>
      <Canvas
        camera={{ position: [10, 80, 70] }}
        onPointerDown={() => setIsAnim(false)}
        onPointerUp={() => setIsAnim(true)}
      >
        <ambientLight />
        <directionalLight />
        <color attach="background" args={['#DEE4EB']} />
        <Suspense>
          <Scene modelPath={modelPath} isAnimated={isAnim} scale={scale} />
          <OrbitControls
            ref={cameraRef}
            enableZoom={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
