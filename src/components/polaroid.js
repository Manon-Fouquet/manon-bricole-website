import * as React from 'react'
import styled from "styled-components"
const PolaroidFrame = styled.div
`
  display: grid;
  grid-template-areas:
  "pic"
  "date"
  "descr" ;
  grid-template-columns: minmax(250px ,10%);
  grid-template-rows:60% 10% 30%;
  height:400px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  background-color: rgb(255, 226, 203); 
  border-radius: 5px;
  justify-content:center;
  margin:10px;
`
/* 
  background-size:contain;
  background-repeat: no-repeat;
  */

const PolaroidPic = styled.div
`
  grid-area: pic;
  margin:12px;
  background-size:contain;
  background-repeat: no-repeat;
  background-color:rgba(255, 255, 255, 0.3);
  box-sizing:content-box;
  background-position: center;
  
`
//border: 1px solid rgba(0, 0, 0, 0.5);

const PolaroidDate = styled.div
`
  grid-area: date;
  height: 20%;
  text-align:center;
`

const PolaroidDescr= styled.div
`
  grid-area: descr;
  height: 40%;
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
