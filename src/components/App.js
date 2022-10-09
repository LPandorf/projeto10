import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "./Navbar";
import GlobalStyle from "../styles/GlobalStyle";
import Filmes from "./Filmes";
import Cadeiras from "./Cadeiras";
import Horarios from "./Horarios";
import Concluido from "./Concluido";


//primeira pagina não tem rodapé, so os filmes em cartaz

export default function App() {
  return ( 
    <>
        <GlobalStyle />
        <Navbar />
        <Wrapper>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Filmes />} />
                    <Route path="/sessoes/:filmeId" element={<Horarios />} />
                    <Route path="/assentos/:horariosId" element={<Cadeiras />} />
                    <Route path="/sucesso" element={<Concluido />}/>                    
                </Routes>
            </BrowserRouter>
        </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
    margin-top: 67 px;
`
