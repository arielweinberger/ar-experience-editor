import React from 'react';
import { useDispatch } from 'react-redux';
import { HotKeys } from 'react-hotkeys';
import ExperienceCanvas from './Experience/containers/ExperienceCanvas';
import ObjectDetailsPanel from './Overlay/ObjectDetailsPanel/ObjectDetailsPanel';
import { ActionCreators as HistoryActionCreators } from 'redux-undo';
import ObjectCatalog from './Overlay/ObjectCatalog/ObjectCatalog';
import AnimationManager from './Overlay/AnimationManager/AnimationManager';
import * as Layout from './Overlay/layout';
import ContextMenu from './Overlay/ContextMenu/ContextMenu';

function App() {
  const keyMap = {
    UNDO: ['command+z'],
    REDO: ['command+shift+z'],
  };
  
  const dispatch = useDispatch();

  const keyHandlers = {
    UNDO: () => dispatch(HistoryActionCreators.undo()),
    REDO: () => dispatch(HistoryActionCreators.redo()),
  };
  
  return (
    <Layout.AppWrapper>
      <ContextMenu />
      <Layout.TopBar>
        Top Bar
      </Layout.TopBar>

      <Layout.CenterContent>
        <Layout.LeftPanel>
          <ObjectCatalog />
        </Layout.LeftPanel>

        <Layout.CenterPanel>
        <HotKeys
            keyMap={keyMap}
            handlers={keyHandlers}
            style={{ width: '100%', height: '100%' }}
          >
            <ExperienceCanvas />
          </HotKeys>
        </Layout.CenterPanel>

        <Layout.RightPanel>
          <ObjectDetailsPanel />
        </Layout.RightPanel>
      </Layout.CenterContent>

      <Layout.BottomContent>
        <AnimationManager />
      </Layout.BottomContent>
    </Layout.AppWrapper>
  );
}

export default App;
