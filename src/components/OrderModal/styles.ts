import { styled } from "styled-components";

export const Overlay = styled.div`
    left: 0px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalBody = styled.div`
    background-color: #FFF;
    width: 480px;
    border-radius: .5rem;
    padding: 2rem;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
            font-size: 1.5rem;
        }

        button {
            display: flex;
            border: 0;
            background-color: transparent;
        }
    }

    .status-container{
        margin-top: 2rem;

        small {
            opacity: 0.8;
            font-size: 0.875rem;
        }

        div {
            display: flex;
            gap: .5rem;
            align-items: center;
            margin-top: .5rem;
        }
    }
`

export const OrderDetails = styled.div`
    margin-top: 2rem;

    >strong {
        font-size: 14px;
    }

    .order-itens {
        margin-top: 1rem;

        .item {
            display: flex;

            & + .item {
                margin-top: 1rem;
            }

            img {
                border-radius: 6px;
            }

            .quantity {
                font-size: 14px;
                color: #666;
                display: block;
                min-width: 20px;
                margin-left: 12px;
            }

            .product-details {
                margin-left: 4px;

                strong {
                    display: block;
                    margin-bottom: 4px;
                }

                span {
                    font-size: 14px;
                    color: #666;
                }
            }
        }
    }

    .total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.5rem;
       
        span {
            font-weight: 500;
            font-size: 14px;
            opacity: 0.8;
        }
    }
`

export const Actions = styled.footer`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    .primary {
        background-color: #333333;
        border-radius: 40px;
        border: 0;
        color: #FFF;
        padding: 12px 24px;
        display: flex;
        align-items: center;
        gap: .5rem;
        justify-content: center;
    }

    .secondary {
        padding: 14px 24px;
        color: #D73035;
        font-weight: bold;
        border: 0;
        background-color: transparent;
        margin-top: 12px;
    }
`