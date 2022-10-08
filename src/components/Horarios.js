import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { pegarHorarios } from "./Apis";
import Footer from './Footer';
import Data from './Data';

export default function Horarios (){    
    const [horario,setHoraio]=useState({});
    const {filmeId}= useParams();
    useEffect(()=>{pegarHorarios(filmeId).them((res)=>{console.log(res.data);setHoraio(res.data)});},[]);
    return (
        <>
            <Titulo>Selecione o horário</Titulo>
            <Lista>
                {horario.dias?horario.dias.map((value)=>(<Data key={value.id} dia={value.dia} diadasemana={value.diadasemana} horarios={value.horarios}/>)): 'Aguarde...'}
            </Lista>
            <Footer horario={horario}></Footer>
        </>
    );
}

const Titulo = styled.div`
    color: #247A6B;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
`

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 23px;
    margin-bottom: 117px;
`