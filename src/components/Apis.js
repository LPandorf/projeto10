import axios from "axios";

//api e funções que enviam promises

const URLbase = 'https://mock-api.driven.com.br/api/v8/cineflex/';

function pegarFilmes(){
    const promise= axios.get(`${URLbase}movies`);
    return promise;
}
function pegarHorarios(filmeId){
    const promise= axios.get(`${URLbase}movies/${filmeId}/showtimes`);
    return promise;
}
function pegarCadeiras(sessaoId){
    const promise= axios.get(`${URLbase}showtimes/${sessaoId}/seats`);
    return promise;
}
function pegarReserva(body){
    const promise= axios.get(`${URLbase}seats/book-many`, body);
    return promise;
}

export {pegarFilmes, pegarHorarios, pegarCadeiras, pegarReserva};
