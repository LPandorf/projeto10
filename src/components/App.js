import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "./Navbar";
import GlobalStyle from "../styles/GlobalStyle";
import Filmes from "./Filmes";


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
                    
                </Routes>
            </BrowserRouter>
        </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
    margin-top: 67 px;
`
