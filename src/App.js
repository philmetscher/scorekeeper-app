import styled from "styled-components";
import Player from "./components/player/Player";
import PlayerForm from "./components/playerform/PlayerForm";

function App() {
  return (
    <AppContainer>
      <header className="App-header">
        <h1>Scorekeeper App</h1>
      </header>
      <main>
        <PlayerList>
          <Player name={"Kai"} score={10} setScore={() => {}} />
          <Player name={"Phil"} score={1} setScore={() => {}} />
          <Player name={"Sukhpreet"} score={1000} setScore={() => {}} />
        </PlayerList>
        <PlayerForm />
      </main>
    </AppContainer>
  );
}

const AppContainer = styled.div``;

const PlayerList = styled.ul``;

export default App;
