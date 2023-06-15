import { styled } from "styled-components";


export const Container = styled.header`
    background-color: #D73035;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`


export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        h1 {
        color: #FFF;
        font-size: 2rem;
        }

        h2 {
            color: #FFF;
            font-weight: 400;
            font-size: 1rem;
            opacity: 0.9;
            margin-top: 0.375rem;
        }
    }
`