import React, { useRef, useState } from 'react';

function Box(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  const onClickHandler = (e) => {
    console.log(e);
  };

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(e) => {}}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
}

export default Box;
