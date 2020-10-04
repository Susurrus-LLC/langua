import React from 'react'
import { ToastContainer, toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'

import styles from './main.module.sass'

const Main = ({ children }) => (
  <main className={styles.main}>
    <div>{children}</div>
    <ToastContainer
      draggablePercent={60}
      position={toast.POSITION.BOTTOM_CENTER}
      transition={Flip}
    />
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
