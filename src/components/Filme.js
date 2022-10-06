import { Link } from "react-router-dom";

export default function Filme({filme}){
    return (
        <>
            <Link to={'/sessoes/${filme.id'}>
                <div className="filme">
                    <img src={filme.cartazUrl}/>
                </div>                
            </Link>
        </>
    );
}