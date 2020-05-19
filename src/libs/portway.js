import React from 'react'
import marked from 'marked'

import { AUTHOR_AVATAR_FIELD, AUTHOR_NAME_FIELD, FIELD_TYPES } from '../constants'

/**
 * Takes the array of fields for your document, and renders markup for each of them
 * If you'd like to add specific markup, add a special case in the switch statement
 *
 * @param   {Array}  fields  Array of document field objects {id, name, type, value}
 * @return  {Array}          Array of React DOM nodes for rendering
 */
export const renderFieldsAsDocument = (fields) => {
  return fields.map(field => {
    switch (field.type) {
      case FIELD_TYPES.TEXT:
        if (field.value) {
          const renderedMarkdown = marked(field.value, { gfm: true })
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
            src={field.value}
            alt={field.name}
          />
        )
      default:
        if (field.name === AUTHOR_NAME_FIELD) return null
        if (field.value) {
          return (
            <div className={`field-type-${field.type}`}>
              {field.value}
            </div>
          )
        }
        return null
    }
  })
}
