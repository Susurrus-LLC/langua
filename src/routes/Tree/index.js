import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Notice from '../../components/Notice'
import ButtonLink from '../../components/Button/Link'

import TreeForm from './TreeForm'
import TreeResults from './TreeResults'
import styles from './styles'

import { canonical, siteTitle } from '../../App'

export const treeInfo = {
  title: 'Tree',
  link: 'tree',
  description: 'is a tool for drawing and labeling syntax trees.'
}

const Tree = props => (
  <div className={props.classes.tree}>
    <Helmet>
      <title>
        {siteTitle}
        {treeInfo.title}
      </title>
      <meta
        name='description'
        content={`${siteTitle}${treeInfo.title} ${treeInfo.description}`}
      />
      <link rel='canonical' href={`${canonical}${treeInfo.link}/`} />
    </Helmet>
    <ButtonLink route={`/${treeInfo.link}/help`}>Help</ButtonLink>
    <h2 className='toolTitle'>
      {siteTitle}
      {treeInfo.title}
    </h2>
    <Notice>This tool is still in planning.</Notice>
    <TreeForm styles={props.classes} />
    <TreeResults styles={props.classes} />
  </div>
)

Tree.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Tree)
