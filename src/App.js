import styled from "styled-components";
import Player from "./components/player/Player";
import Button from "./components/Button";
import PlayerForm from "./components/playerform/PlayerForm";

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <h1>Scorekeeper App</h1>
      </AppHeader>
      <AppMain>
        <PlayerList>
          <Player name={"Kai"} score={10} setScore={() => {}} />
          <Player name={"Phil"} score={1} setScore={() => {}} />
          <Player name={"Sukhpreet"} score={1000} setScore={() => {}} />
        </PlayerList>
        <ButtonGroup>
          <Button>Reset Scores</Button>
          <Button>Reset All</Button>
        </ButtonGroup>
        <PlayerForm />
      </AppMain>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr;
`;
const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
`;
const AppMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 20px;
  padding: 50px 20px;
  max-width: 500px;
  margin: 0 auto;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const PlayerList = styled.ul`
  list-style-type: none;
`;

export default App;
