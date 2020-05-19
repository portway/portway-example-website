import React from 'react'
import PropTypes from 'prop-types'

import { AUTHOR_AVATAR_FIELD, AUTHOR_NAME_FIELD, FIELD_TYPES } from '../constants'
import { renderFieldsAsDocument } from '../libs/portway'

import Main from '../layouts/Main'

import '../css/page.css'

const Page = ({ pageContext }) => {
  const { document } = pageContext
  const fields = document.children
  const authorNameField = fields.find(field => field.type === FIELD_TYPES.STRING && field.name === AUTHOR_NAME_FIELD)
  const authorAvatarField = fields.find(field => field.type === FIELD_TYPES.IMAGE && field.name === AUTHOR_AVATAR_FIELD)
  const publishedDate = new Date(document.lastPublishedAt).toString()

  return (
    <Main>
      <div className="page">
        <header className="page__header">
          <h2>{document.name}</h2>
          <p className="page__meta">Published: {publishedDate}</p>
        </header>
        <div className="page__container">
          <div className="page__body">
            {renderFieldsAsDocument(fields)}
          </div>
          <aside className="page__sidebar">
            {authorNameField && authorAvatarField &&
            <div className="author">
              <h3 className="author__label">Author:</h3>
              {authorNameField && (<p key={authorNameField.id}>{authorNameField.value}</p>)}
              {authorAvatarField && (
                <img
                  key={authorAvatarField.id}
                  className={`blog__image blog__image--author-avatar`}
                  src={authorAvatarField.value}
                  alt={authorAvatarField.name}
                />
              )}
            </div>
            }
          </aside>
        </div>
      </div>
    </Main>
  )
}

Page.propTypes = {
  pageContext: PropTypes.shape({
    children: PropTypes.array,
    createdAt: PropTypes.string,
    id: PropTypes.string,
    lastPublishedAt: PropTypes.string,
    name: PropTypes.string,
    projectId: PropTypes.number,
    publishedVersionId: PropTypes.number,
    uid: PropTypes.number,
    updatedAt: PropTypes.string,
  })
}

export default Page
