import React from 'react'
import { graphql } from 'gatsby'
import marked from 'marked'

import "../styles/global.scss"
import "./index.scss"

const FIELD_TYPES = {
  STRING: 1,
  TEXT: 2,
  IMAGE: 4,
}

const AUTHOR_NAME_FIELD = 'author-name'
const AUTHOR_AVATAR_FIELD = 'author-avatar'

const Body = ({ data }) => {
  const { allPortwayProject, allPortwayDocument } = data

  const portwayProject = allPortwayProject.nodes[0]
  const portwayDocuments = allPortwayDocument.nodes
  
  return (
    <div className="blog">
      <h1>{portwayProject.name}</h1>
      <div className="blog__content">
        {portwayDocuments.map(renderPost)}
      </div>
    </div>
  )
}

const renderPost = (document) => {
  const fields = document.children
  const authorNameField = fields.find(field => field.type === FIELD_TYPES.STRING && field.name === AUTHOR_NAME_FIELD)
  const authorAvatarField = fields.find(field => field.type === FIELD_TYPES.IMAGE && field.name === AUTHOR_AVATAR_FIELD)
  return (
    <div key={document.id} >
      <h2>{document.name}</h2>
      {fieldsList(fields)}
      Author:
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
  )
}

const fieldsList = (fields) => {
  return fields.map(field => {
    switch (field.type) {
      case FIELD_TYPES.TEXT:
        if (field.value) {
          const renderedMarkdown = marked(field.value, {
            gfm: true,
          })
          return (
            <div
              key={field.id}
              dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
            />
          )
        }
        return null
      case FIELD_TYPES.IMAGE:
        if (field.name === AUTHOR_AVATAR_FIELD) return null
        return (
          <img
            key={field.id}
            className={`blog__image blog__image--${field.name}`}
            src={field.value}
            alt={field.name}
          />
        )
      default:
        return null
    }
  })
}

export const query = graphql`
  query portwayQuery {
    allPortwayDocument {
      nodes {
        children {
          id
          ... on PortwayField {
            id
            name
            order
            structuredValue {
              type
              tag
            }
            type
            uid
            updatedAt
            value
            versionId
            createdAt
            documentId
          }
        }
        lastPublishedAt
        projectId
        publishedVersionId
        uid
        updatedAt
        name
        id
        createdAt
      }
    }
    allPortwayProject {
      nodes {
        createdAt
        createdBy
        id
        description
        name
        uid
        updatedAt
      }
    }
  }
`

export default Body
