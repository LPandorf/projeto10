import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Data({dia,diadasemana,horarios}){
    console.log(horarios);

    return (
        <Pao>
            <Dia>
                <Titulo>
                    <span>{diadasemana}-{dia}</span>
                </Titulo>
                <Lista>
                    {horarios!==undefined? horarios.map((value) => (<Link to={`assentos/${value.id}`}><Horario>{value.name}</Horario></Link>)):false}
                </Lista>
            </Dia>
        </Pao>
    );
}

const Pao= styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 23px;
    margin-bottom: 47px;
`;

const Dia=styled.div`
    margin:0 0 22px;
`;

const Titulo=styled.div`
    font-size: 20px;
    margin: 0 0 22px;
`;

const Lista=styled.div`
    display: flex;
`;

const Horario=styled.div`
    background-color: #E8833A;
    border-radius: 3px;
    width: 83px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 8px;
    cursor: pointer;
`;