import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectSheet from 'react-jss'
import { ToastContainer, toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './styles'

import Home from '../Home/Home'
import Deriv from '../Deriv/Deriv'
import DerivHelp from '../Deriv/Help/DerivHelp'
import Frequen from '../Frequen/Frequen'
import FrequenHelp from '../Frequen/Help/FrequenHelp'
import Gen from '../Gen/Gen'
import GenHelp from '../Gen/Help/GenHelp'
import Morph from '../Morph/Morph'
import MorphHelp from '../Morph/Help/MorphHelp'
import Tree from '../Tree/Tree'
import TreeHelp from '../Tree/Help/TreeHelp'

const Main = ({classes}) => (
  <main>
    <div className={classes.main}>
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

export default injectSheet(styles)(Main)
