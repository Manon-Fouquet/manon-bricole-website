import * as React from 'react'
import styled from "styled-components"
const PolaroidFrame = styled.div

`
  display: grid;
  grid-template-areas:
  "pic"
  "date"
  "descr" ;
  grid-template-rows:minmax(300px,1vh) minmax(50px,1vh) 1fr;
  grid-template-columns:100%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  background-color: white; 
  border-radius: 5px;
  justify-content:center;
  padding:10px;
  margin:20px;
  width:100%;
`

const PolaroidPic = styled.div
`
  grid-area: pic;
  background-size:contain;
  background-repeat: no-repeat;
  background-color:rgba(255, 255, 255, 0.3);
  box-sizing:content-box;
  background-position: bottom;
  width:100%;  
  border: 1px solid lightgray;
`
//border: 1px solid rgba(0, 0, 0, 0.5);

const PolaroidDate = styled.div
`
  grid-area: date;
  text-align:center;
`


/*
border:green;
border-style:dashed;
*/

const PolaroidDescr= styled.div
`
  grid-area: descr;
`
const Polaroid =({data})=>{
  return (
  <PolaroidFrame>
      <PolaroidPic style={{backgroundImage:`url(${data.img})`}}></PolaroidPic>
      <PolaroidDate>{data.date}</PolaroidDate>    
      <PolaroidDescr>{data.text}</PolaroidDescr>     
  </PolaroidFrame>
  )
}
export default Polaroid
