import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import styles from './styles'

const Home = () => (
  <div className='home'>
    <p>Langua is a suite of language tools that can be used for testing, experimentation, learning, analysis, or creation. There are four main tools in the suite.</p>
    <div className='grid'>
      <Link to='/gen'>
        <h2>Gen</h2>
        <p>LanguaGen is a tool for automatically building a set of words based on arbitrary rules of phonotactics.</p>
      </Link>
      <Link to='/morph'>
        <h2>Morph</h2>
        <p>LanguaMorph is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word&rsquo;s proto-language roots.</p>
      </Link>
      <Link to='/deriv'>
        <h2>Deriv</h2>
        <p>LanguaDeriv is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.</p>
      </Link>
      <Link to='/frequen'>
        <h2>Frequen</h2>
        <p>LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.</p>
      </Link>
      <Link to='/tree'>
        <h2>Tree</h2>
        <p>LanguaTree is a tool for drawing and labeling syntax trees.</p>
      </Link>
    </div>
  </div>
)

export default injectSheet(styles)(Home)
