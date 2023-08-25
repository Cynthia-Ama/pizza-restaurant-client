import React from 'react'
import styled from "styled-components"


const ErrorContainer = styled.div`
    padding: 40px;
    width: 100%;

    @media only screen and (min-width:800px){
      padding: 30px 0;
    }

    @media only screen and (min-width:1000px){
      padding: 50px 0;
      max-width: 1200px;
      margin: 0 auto;
    }
`

export default function Error() {
  return (
    <ErrorContainer className='error'>
      <h1>Page doesn't exist.</h1>
    </ErrorContainer>
  )
}
