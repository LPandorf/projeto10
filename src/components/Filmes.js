import styled from 'styled-components';
import { useState, useEffect } from "react";
import Filme from "./Filme";
import { pegarFilmes } from "./Apis";

//função para pegar a lista de filmes e mostrar na tela

export default function Filmes(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {pegarFilmes().then((res) => setFilmes(res.data));}, []);
        

    return(
        <>
            <Titulo>Selecione o Filme</Titulo>
            <Catalogo>
                {filmes.map((m) => (
                    <Filme key={m.id} filme={m}/>
                ))}
            </Catalogo>
        </>
    );
}

const Titulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    font-size: 24px;
`
const Catalogo = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    cursor: pointer;
`