import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setControlledObject } from '../actions/controls';

class SceneObject extends React.Component {
  objectRef = null;

  shouldComponentUpdate(e) {
    if (this.objectRef.exp_skipNextUpdate) {
      this.objectRef.exp_skipNextUpdate = false;
      return false
    }

    return true;
  }

  componentDidMount() {
    this.objectRef.exp_sceneObjectId = this.props.data.sceneObjectId;
    this.objectRef.exp_tracked = true;
  }

  handleOnClick = (e) => {
    e.stopPropagation();
    this.props.setControlledObject(this.objectRef);
  };

  render() {
    const { data, render } = this.props;

    const renderModel = () => (
      <group
        {...data.transform}
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
