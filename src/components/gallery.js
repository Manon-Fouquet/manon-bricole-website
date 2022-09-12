import * as React from 'react'
import styled from "styled-components"

const GalleryContent = styled.div
    `
    display: flex;
    flex-direction: row;
    align-items: center;
    width:1vw;
`

const Gallery = (color) => {
  return (
    <GalleryContent></GalleryContent>
  )
}
export default Gallery