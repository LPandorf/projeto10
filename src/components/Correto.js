//função que confere formato nome e cpf

import { useLocation } from "react-router-dom";

export default function Correto(){
    const location=useLocation();
    return (
        <>
            <span>Nome: {location.state.form.name} - CPF:{location.state.form.cpf}</span>
            {location.state.cadeirasId.map((value)=>(<span>Assento:{value}</span>))}
        </>
    );
};
