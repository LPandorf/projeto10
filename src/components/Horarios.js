import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { pegarHorarios } from "./Apis";
import Footer from './Footer';
import Data from './Data';
import styled from "styled-components";

export default function Horarios (){    
    const [horario,setHorario]=useState([]);
    const {filmeId}= useParams();
    console.log(filmeId);
    console.log(horario);
    useEffect(()=>{
        pegarHorarios(filmeId).then((res)=>{
            console.log(res.data);
            setHorario(res.data);
        });
    },[]);
    return (
        <>
            <Titulo>Selecione o horário</Titulo>
            <Lista>
                {horario.days?horario.days.map((value)=>(<Data key={value.id} dia={value.date} diadasemana={value.weekday} horarios={value.showtimes}/>)): 'Aguarde...'}
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
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin-top: 100px;
    margin-bottom: 40px;
`

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 23px;
    margin-bottom: 117px;
`