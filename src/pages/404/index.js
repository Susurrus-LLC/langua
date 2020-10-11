import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const NotFound = () => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>404: Not Found</h1>
    <p>
      Uh oh, you seem to have become lost&hellip; Try heading back{' '}
      <Link to='/'>Home</Link>.
    </p>
  </Layout>
)

export default NotFound
