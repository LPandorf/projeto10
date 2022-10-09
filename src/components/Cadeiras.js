import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { pegarCadeiras, pegarReserva } from "./Apis";
import Footer from "./Footer";
import styled from 'styled-components';

function Cadeira({ cadeira, cadeiraSelecionada }) {

    return (
        <>
            <span className={`cadeira ${cadeira.estavaga ? '' : 'ocupada'} ${
                cadeira.selecionada ? 'selecionada' : ''
                }`}
                onClick={()=>cadeiraSelecionada(seat.id)}
            >
                {cadeira.nome}
            </span>
        </>
    );
}

export default function Cadeiras() {
    const [horario, setHorario] = useState({});
    const [cadeiras, setCadeiras] = useState([]);
    const [formulario, setFormulario] = useState({});
    const { horarioId } = useParams();
    const navigate = useNavigate();

    function pegarFormulario({ value, nome }) {
        console.log(nome, value);
        setFormulario({ 
            ...formulario,
            [ nome ]: value,});
    }
    function enviarFormulario() {
        console.log(formulario);
        const cadeirasId = cadeiras
            .filter((value) => value.selecionada)
            .map((value) => value.id);
        navigate('/sucesso', {
            state: {
                horario,
                formulario,
                cadeirasId,
            },
        });
    }
    function cadeiraSelecionada(cadeiraId) {
        const novasCadeiras = seats.map((value) => {
            if (value.id === cadeiraId && value.estavaga) {
                return { 
                    ...value, 
                    selecionada: !value.selecionada, 
                };
            }
            return { 
                ...value, 
            };
        });
        setCadeiras([...novasCadeiras]);
    }
    useEffect(() => { 
        pegarCadeiras(horarioId).then((res) => { 
            console.log(res.data); 
            setHorario(res.data); 
            setCadeiras(res.data.cadeiras); 
        }); 
    }, []);

    return (
        <>
            <Selecao>
                <Titulo>Selecione os assentos</Titulo>
                <Lista>
                    {cadeiras.length !== 0
                        ? cadeias.map((value) => (
                            <Cadeira key={value.id} cadeira={value} cadeiraSelecionada={cadeiraSelecionada} />
                        ))
                    : 'carregando...'}
                </Lista>
            </Selecao>
            <Formulario>
                <Inputinho>
                    <Titulinho>Nome</Titulinho>
                    <input 
                        placeholder="Nome"
                        name="nome"
                        onChange={(e)=>
                            pegarFormulario({ 
                                name: e.target.nome,
                                value: e.target.value,
                            })
                        }
                    ></input>
                </Inputinho>
                <Inputinho>
                    <Titulinho>CPF</Titulinho>
                    <input
                        placeholder="CPF"
                        name="cpf"
                        onChange={(e)=>
                            pegarFormulario({
                                name: e.target.nome,
                                value: e.target.value,
                            })
                        }
                    ></input>
                </Inputinho>                
            </Formulario>
            <Botaozin>
                <button onClick={enviarFormulario}>
                    Reservar
                </button>
            </Botaozin>
            {horario.filme?(
                <Footer
                    horario={horario.filme}
                    name={horario.filme}
                    diadasemana={horario.data.diadasemana}
                />
            ) : ('')}
        </>
    );
};


const Selecao = styled.div`
    margin-bottom: 117px;
    padding-bottom: 24px;
`;
const Titulo = styled.div`
    font-weight: bold;
    color: #247A6B;
    text-align: center;
`;
const Lista = styled.div`
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    width: 320px;
    margin: -20px auto 0;
`;
const Formulario = styled.div`
    margin-top: 31px;
    padding: 0 24px;
`;
const Inputinho = styled.div`
    display: flex;
    flex-direction: column;
    & input{
        border-radius: 3px;
        padding: 18px;
        border: 1px solid #D4D4D4;
        height: 51px;
        font-size: 18px;
        margin-top: 6px;
    }
    $ input::placeholder {
        color: #AFAFAF;
        font-style: italic;
        font-size: 18px;
    }
`;
const Titulinho = styled.div`
    font-size: 18px;
    color: #293845;
`;
const Botaozin = styled.div`
    &button{
        margin-top: 57px;
        width: 225px;
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        background-color: #E8833A;
        font-size: 18px;
        border: none;
        border-radius: 3px;
        margin: 0 auto;
    }
`;

