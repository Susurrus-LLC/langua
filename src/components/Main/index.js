import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectSheet from 'react-jss'
import { ToastContainer, toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'

import Home from '../../routes/Home'
import Deriv from '../../routes/Deriv'
import DerivHelp from '../../routes/Deriv/Help'
import Frequen from '../../routes/Frequen'
import FrequenHelp from '../../routes/Frequen/Help'
import Gen from '../../routes/Gen'
import GenHelp from '../../routes/Gen/Help'
import Morph from '../../routes/Morph'
import MorphHelp from '../../routes/Morph/Help'
import Tree from '../../routes/Tree'
import TreeHelp from '../../routes/Tree/Help'

import styles from './styles'

const Main = props => (
  <main>
    <div className={props.classes.main}>
      <Switch>
        <Route path='/deriv/help' component={DerivHelp} />
        <Route path='/deriv/' component={Deriv} />
        <Route path='/frequen/help' component={FrequenHelp} />
        <Route path='/frequen' component={Frequen} />
        <Route path='/gen/help' component={GenHelp} />
        <Route path='/gen' component={Gen} />
        <Route path='/morph/help' component={MorphHelp} />
        <Route path='/morph' component={Morph} />
        <Route path='/tree/help' component={TreeHelp} />
        <Route path='/tree' component={Tree} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
    <ToastContainer
      draggablePercent={60}
      position={toast.POSITION.BOTTOM_CENTER}
      transition={Flip}
    />
  </main>
)

Main.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Main)
