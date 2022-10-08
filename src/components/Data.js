import { Link } from "react-router-dom";

export default function Data({dia,diadasemana,horarios}){
    return (
        <Pao>
            <Dia>
                <Titulo>
                    <span>{diadasemana}-{dia}</span>
                </Titulo>
                <Lista>
                    {horarios.map((value) => (<Link to={`assentos/${value.id}`}><Horario>{value.nome}</Horario></Link>))}
                </Lista>
            </Dia>
        </Pao>
    );
}

const Pao= styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 23px;
    margin-bottom: 117px;
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