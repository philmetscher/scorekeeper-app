import { useId, useState } from "react";

import styled from "styled-components";
import Player from "./components/player/Player";
import Button from "./components/Button";
import PlayerForm from "./components/playerform/PlayerForm";

import { initialPlayerList } from "./db.js";

function App() {
  const [players, setPlayers] = useState(initialPlayerList);

  function createPlayer(name) {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      { id: Math.random(36), name: name, score: 0 },
    ]);
  }

  function handleAddScore(id) {
    setPlayers((oldPlayers) =>
      oldPlayers.map((oldPlayer) =>
        oldPlayer.id === id
          ? { ...oldPlayer, score: oldPlayer.score + 1 }
          : oldPlayer
      )
    );
  }
  function handleSubstractScore(id) {
    setPlayers((oldPlayers) =>
      oldPlayers.map((oldPlayer) =>
        oldPlayer.id === id
          ? oldPlayer.score > 0
            ? { ...oldPlayer, score: oldPlayer.score - 1 }
            : oldPlayer
          : oldPlayer
      )
    );
  }

  function handleResetScore() {
    setPlayers((oldPlayers) => {
      return oldPlayers.map((oldPlayer) => {
        return {
          ...oldPlayer,
          score: 0,
        };
      });
    });
  }

  function handleResetAll() {
    setPlayers((oldPlayers) => initialPlayerList);
  }

  return (
    <AppContainer>
      <AppHeader>
        <h1>Scorekeeper App</h1>
      </AppHeader>
      <AppMain>
        <PlayerList>
          {players.map(({ id, name, score }) => (
            <Player
              key={id}
              name={name}
              score={score}
              addScore={() => handleAddScore(id)}
              substractScore={() => handleSubstractScore(id)}
            />
          ))}
        </PlayerList>
        <ButtonGroup>
          <Button onClick={handleResetScore}>Reset Scores</Button>
          <Button onClick={handleResetAll}>Reset All</Button>
        </ButtonGroup>
        <PlayerForm onSubmit={createPlayer} />
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
