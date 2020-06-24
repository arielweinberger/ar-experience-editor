import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';

// const GLTFModel = React.forwardRef((props, ref) => {
//   const { useRef } = props;
//   const { nodes, materials, scene } = useLoader(GLTFLoader, './models/person.gltf');

//   return (
//     <primitive object={scene} castShadow receiveShadow />
//   );
// });

class GLTFModel extends React.Component {
  state = {
    model: null,
  };

  async componentDidMount() {
    const loader = new GLTFLoader();

    loader.load('./models/person.gltf', (gltf) => {
      this.setState({ model: gltf });
    });
  }

  render() {
    const { model } = this.state;

    return (
      <React.Fragment>
        {model && (
          <primitive {...this.props} object={model.scene} />
        )}
      </React.Fragment>
    );
  }
}

export default GLTFModel;
