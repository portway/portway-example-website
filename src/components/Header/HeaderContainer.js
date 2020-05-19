import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import HeaderComponent from './HeaderComponent'

const HeaderContainer = () => {
  // Get the project name and document name for the header
  const data = useStaticQuery(graphql`
  {
    allPortwayProject {
      nodes {
        name
      }
    }
    allPortwayDocument {
      nodes {
        name
        id
      }
    }
  }
  `)

  const documents = data.allPortwayDocument.nodes
  const project = data.allPortwayProject.nodes[0]

  return <HeaderComponent documents={documents} project={project} />
}

export default HeaderContainer
