import styled from 'styled-components';


export default function Footer ({horario, nome, dia}){


    return (
        <>
            <Wrapper>
                <Capa>
                    <img scr={horario.cartaz.Url} alt={horario.cartaz.Url} />
                </Capa>
                <Info>
                    <span>{horario.titulo}</span>
                    {nome?(<span>{dia}-{nome}</span>):('')}
                </Info>
            </Wrapper>        
        </>
    );
}
const Wrapper = styled.div`
    position:fixed;
    display: flex;
    bottom: 0;
    left: 0;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    padding: 14px 10px;
    height: 117px;
    width: 100%;
`
const Capa = styled.div`
    padding: 8px;
    border-radius: 2px; 
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: white;   
    & img {
        width: 48px;
        height: 72px;
        object-fit: cover;
    }
`

const Info = styled.div`
    height: 100%;
    margin-left: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`