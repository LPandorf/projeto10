import styled from 'styled-components';

export default function Navbar(){
    return (
        <>
            <Wrapper>
                Cineflex
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 67px;
    top: 0;
    left: 0;
    position: fixed;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
`