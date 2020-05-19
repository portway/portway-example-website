# Portway Example Blog

This example application will pull down data from a portway project and display it on a blog site.

## Requirements
1. Create a Portway project and create an API key with reader-level access

## Setup
1. `npm install`
1. `cp example.env .env`
1. Add the appropriate .env file values

## Running the app
`gatsby develop`

The app will display portway documents as blog posts.

## Details

- Recently published documents are displayed first
- Author name can be added by creating a string field in a document and naming it `author-name`
- Author avatar can be added by creating an image field in a document and naming it `author-avatar`