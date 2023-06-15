import { Order } from "../../@types/Order";
import { OrderModal } from "../OrderModal";
import { useState } from "react";
import { Board, OrderContainer } from "./styles";

interface OrdersBoardProps {
  title: string;
  orders?: Order[];
  icon: string;
}

export function OrdersBoard({ title, icon }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true)
    setSelectedOrder(order)
  }

  function handleCloseModal(){
    setIsModalVisible(false)
    setSelectedOrder(null)
  }

  return (
    <Board>
      {isModalVisible && 
      <OrderModal 
        order={selectedOrder} 
        isVisible={isModalVisible} 
        onClose={handleCloseModal}
      />
      }

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span></span>
      </header>

      <OrderContainer>
        <button onClick={handleOpenModal}>
          <strong>Mesa2</strong>
          <span>2 itens</span>
        </button>

        <button>
          <strong>Mesa2</strong>
          <span>2 itens</span>
        </button>
      </OrderContainer>
    </Board>
  );
}
