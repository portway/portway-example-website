import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import marked from 'marked'

import './HeaderStyles.css'

const HeaderComponent = ({ project, documents }) => {

  return (
    <header className="header">
      <h1 className="header__title">
        <Link to={`/`}>{project.name}</Link>
      </h1>
      <nav>
        <ul className="header__navigation">
          {documents.map((document) => {
            const slugger = new marked.Slugger()
            const permalink = slugger.slug(document.name)
            return (
              <li className="header__navigation-item" key={document.id}>
                <Link to={`/${permalink}`}>
                  {document.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

HeaderComponent.propTypes = {
  documents: PropTypes.array.isRequired,
  project: PropTypes.object.isRequired,
}

HeaderComponent.defaultProps = {
  documents: [],
  project: {},
}

export default HeaderComponent
