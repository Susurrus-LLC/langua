import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectSheet from 'react-jss'
import { ToastContainer, toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'

import Home from '../Home/Home'
import Deriv from '../Deriv/Deriv'
import DerivHelp from '../Deriv/DerivHelp'
import Frequen from '../Frequen/Frequen'
import FrequenHelp from '../Frequen/FrequenHelp'
import Gen from '../Gen/Gen'
import GenHelp from '../Gen/GenHelp'
import Morph from '../Morph/Morph'
import MorphHelp from '../Morph/MorphHelp'
import Tree from '../Tree/Tree'
import TreeHelp from '../Tree/TreeHelp'

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
