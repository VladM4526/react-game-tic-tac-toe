import { Container } from "./Container.styled";
import { Game } from "./Components/Game/Game";
import { Title } from "./Components/Title/Title";

export const App = () => {
  return (
    <Container>
      <Title />
      <Game />
    </Container>
  );
};
