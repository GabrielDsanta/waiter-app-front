import { styled } from "styled-components"

export const Board = styled.div`
    padding: 1rem;
    border: solid 1px rgba(204, 204, 204, 0.4);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1;

    > header {
        padding: .5rem;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    width: 100%;

    button {
        background-color: #FFF;
        height: 8rem;
        border: solid 1px rgba(204, 204, 204, 0.4);
        border-radius: .5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .25rem;

        strong {
            font-weight: 500;
        }

        span {
            font-size: 0.875rem;
            color: #666;
        }

        & + button {
            margin-top: 1.5rem;
        }
    }
`