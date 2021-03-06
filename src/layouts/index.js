import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
