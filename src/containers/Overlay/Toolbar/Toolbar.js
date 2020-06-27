import React from 'react'
import { connect } from 'react-redux'
import SaveService from '../../../services/SaveService'
import styles from './Toolbar.module.scss';
import { Dropdown } from 'semantic-ui-react';

const Toolbar = () => {
  return (
    <div className={styles.container}>
        <Dropdown button text='File'>
          <Dropdown.Menu>
            <Dropdown.Item text='Save' onClick={() => SaveService.save()} />
          </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
