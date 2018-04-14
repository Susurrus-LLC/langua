import * as React from 'react'

const getCopyright = () => {
  const initYear = 2017
  const d = new Date()
  const y = d.getFullYear()
  return y > initYear ? `${initYear}–${y}` : initYear.toString()
}

const Footer = () => (
  <footer>
    <p>
      Built by
      {' '}
      <a
        href='https://github.com/nai888/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Ian A.&nbsp;Cook
      </a>
      , copyright &copy; {getCopyright()}.
      {' '}
      <a
        href='https://github.com/nai888/langua'
        target='_blank'
        rel='noopener noreferrer'
      >
        View this project on GitHub.
        {' '}
        <i
          className='fab fa-github'
        />
      </a>
    </p>
  </footer>
)

export default Footer
