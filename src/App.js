import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled.js';
import { GlobalStyle } from "./Global";

export default function App() {

  const [input, setInput]= useState('')
  const [endereco, setEndereco]= useState({
    rua:'',
    cidade:'',
    bairro:'',
  })

  let Api = `https://viacep.com.br/ws/${input}/json/`
  
  function getCep(){
    axios.get(Api).then((response)=>{
     console.log(response) 
     setEndereco({
      rua:response.data.logradouro,
      cidade:response.data.localidade,
      bairro:response.data.bairro,
     })
      
    })
  }
  return (
    <S.Container>
      <GlobalStyle />
      <S.Title>Consulte seu endereço</S.Title>
      {/* <form onSubmit={(e)=>{e.preventDefault()}}> */}
      
      <S.Div>
      <S.Form>
        <S.H3>Digite seu CEP no card abaixo</S.H3>
       <input value={input} onChange={e => {setInput(e.target.value)}} />       
       <button onClick={()=>{getCep()}}>PROCURAR</button>
      </S.Form>
    
    <S.Ul>
      <li>Sua rua é: </li>{endereco.rua}
      <li>Sua cidade é: </li> {endereco.cidade}
      <li>Seu bairro é: </li>{endereco.bairro}
    </S.Ul>
    </S.Div>
    </S.Container>
  );
}
