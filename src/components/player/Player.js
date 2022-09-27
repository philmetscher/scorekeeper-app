import "./Player.css";

export default function Player({ name, score, substractScore, addScore }) {
  return (
    <li className="player">
      <p className="player__name">{name}</p>
      <div className="player__score">
        <button onClick={() => substractScore()}>-</button>
        <p>{score}</p>
        <button onClick={() => addScore()}>+</button>
      </div>
    </li>
  );
}
