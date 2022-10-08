import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { pegarCadeiras, pegarReserva } from "./Apis";
import Footer from "./Footer";
import styled from 'styled-components';

function Cadeira({ cadeira, cadeiraSelecionada }) {

    return (
        <>
            <span className={`cadeira ${cadeira.estavaga ? '' : 'ocupada'}${cadeira.selecionada ? 'selecionada' : ''}`}>
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
        setFormulario({ ...formulario,{ nome }: value,});
    }
    function enviarFormulario() {
        console.log(formulario);
        const cadeirasId = cadeiras.filter((value) => value.selecionada).map((value) => value.id);
        const body = { ids: MediaStreamAudioDestinationNode, ...form, };
        navigate('/', {
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
                return { ...value, selecionada: !value.selecionada, };
            }
            return { ...value, };
        });
        setCadeiras([...novasCadeiras]);
    }
    useEffect(() => { pegarCadeiras(horarioId).then((res) => { console.log(res.data); setHorario(res.data); setCadeiras(res.data.cadeiras); }); }, []);

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
                <Input>
                    <Titulinho>Nome</Titulinho>
                    <input></input>
                </Input>
                
            </Formulario>
        </>
    );
};


``
const Selecao = styled.div`
    margin-bottom: 117px;
    padding-bottom: 24px;
`


const Titulo = styled.div`
    font-weight: bold;
    color: #247A6B;
    text-align: center;
`
const Lista = styled.div`
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    width: 320px;
    margin: -20px auto 0;
`
const Formulario = styled.div`
    margin-top: 31px;
    padding: 0 24px;
`
const Input = styled.div`
    display: flex;
    flex-direction: column;
`
const Titulinho = styled.div`
    font-size: 18px;
    color: #293845;
`
const 
