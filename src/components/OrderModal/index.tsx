import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";
import closeIcon from "../../assets/close-icon.svg"
import { Order } from "../../@types/Order";
import { FormatCurrency } from "../../utils/FormatCurrency";
import { useEffect } from 'react'

interface OrderModalProps {
    isVisible: boolean;
    order: Order | null;
    onClose: () => void;
}

export function OrderModal({ isVisible, order, onClose }: OrderModalProps){
    
    if(!isVisible || !order){
        return null
    }

    const total = order.products.reduce((acc, item) => {
        return acc + (Number(item.product.price) * item.quantity)
    }, 0)

    useEffect(() => {

        function handleKeyDown(event: KeyboardEvent){
            if(event.key === 'Escape'){
                onClose()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose])

    return(
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>

                    <button onClick={onClose}>
                        <img src={closeIcon} alt="" />
                    </button>
                </header>

                <div className="status-container">
                    <small>status do pedido</small>

                    <div>
                        <span>
                            {order.status === "DONE" && "✅"}
                            {order.status === "IN_PRODUCTION" && "👨‍🍳"}
                            {order.status === "WAITING" && "🕗"}
                        </span>
                        <strong>
                            {order.status === "DONE" && "Pronto!"}
                            {order.status === "IN_PRODUCTION" && "Em produção"}
                            {order.status === "WAITING" && "Fila de espera"}
                            Fila de espera
                        </strong>
                    </div>
                </div>

                <OrderDetails>
                    <strong>Itens</strong>

                    <div className="order-itens">
                        {order.products.map((item) => (
                            <div className="item">
                                <img 
                                    src={`http://localhost:3333/uploads/${item.product.imagePath}`} 
                                    alt={item.product.name} 
                                    width="56"
                                    height="28.51"
                                />

                                <span className="quantity">{item.quantity}x</span>

                                <div className="product-details">
                                    <strong>{item.product.name}</strong>
                                    <span>{FormatCurrency(Number(item.product.price))}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="total">
                        <span>Total</span>
                        <strong>{FormatCurrency(total)}</strong>
                    </div>
                </OrderDetails>

                <Actions>
                    <button type="button" className="primary">
                        <span>👨‍🍳</span>
                        <span>Iniciar Produção</span>
                    </button>

                    <button type="button" className="secondary">
                        <span>Cancelar Pedido</span>
                    </button>
                </Actions>
            </ModalBody>
        </Overlay>
    )
}