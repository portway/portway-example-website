import React from 'react'
import { graphql } from 'gatsby'
import marked from 'marked'

const Body = ({ data }) => {
  const { allPortwayProject, allPortwayDocument } = data

  const portwayProject = allPortwayProject.nodes[0]
  const portwayDocuments = allPortwayDocument.nodes
  
  return (
    <>
      <h1>{portwayProject.name}</h1>
      <div>
        {portwayDocuments.map(renderPost)}
      </div>
    </>
  )
}

const renderPost = (document) => {
  return (
    <>
      <h2>{document.name}</h2>
      {fieldsList(document.childrenPortwayField)}
    </>
  )
}

const fieldsList = (fields) => {
  return fields.map(field => {
    return (<p key={field.id}>{field.value}</p>)
  })
}

export const query = graphql`
  {
    allPortwayDocument {
      nodes {
        createdAt
        id
        name
        uid
        updatedAt
        childrenPortwayField {
          id
          createdAt
          documentId
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
        }
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
