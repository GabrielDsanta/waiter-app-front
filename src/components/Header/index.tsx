import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <h1>Produtos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>
      </Content>

      <img src={logo} alt="WAITERAPP" />
    </Container>
  );
}
