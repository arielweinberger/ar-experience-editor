import React from 'react';
import { connect } from 'react-redux';
import { setControlledObject } from '../../actions/controls';
import { Vector3, Euler, Object3D } from 'three';

interface SceneObjectProps {
  setControlledObject: Function;
  data: any;
  render: Function;
}

class SceneObject extends React.Component<SceneObjectProps> {
  private objectRef;

  componentDidMount() {
    this.objectRef.exp_sceneObjectId = this.props.data.sceneObjectId;
    this.objectRef.exp_tracked = true; // TODO: ?
  }

  handleOnClick = (e) => {
    e.stopPropagation();
    this.props.setControlledObject(this.objectRef);
  };

  render() {
    const { data, render } = this.props;
    const { position, scale, rotation } = data.threeProperties;

    const transform = {
      position: new Vector3(position.x, position.y, position.z),
      scale: new Vector3(scale.x, scale.y, scale.z),
      rotation: new Euler(rotation.x, rotation.y, rotation.z),
    };

    const renderModel = () => (
      <group
        {...transform}
        name={data.name}
        ref={ref => this.objectRef = ref}
        onClick={this.handleOnClick}
      >
        {render()}
      </group>
    );

    return (
      <React.Fragment>{renderModel()}</React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setControlledObject,
};

export default connect(mapStateToProps, mapDispatchToProps)(SceneObject);
