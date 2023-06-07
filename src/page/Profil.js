import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { FunctionContext } from '../context/FunctionContext'


export default function Profil() {


  return (
    <Container>
      <div>
        <div className='header'>
              <h1>
                  Welcome to Jajanin.
              </h1>
              <p>
                  Tempat kamu bisa belanja apapun secara mudah dan dapatkan juga gratis ongkir
              </p>
              <div></div>
          </div>
      </div>
    </Container>
  )
}


const Container = styled.div`


font-family: 'Inter', sans-serif;

.header{
    text-align:center;

    div{
        height: 2px;
        background: black;
    }
}

`



