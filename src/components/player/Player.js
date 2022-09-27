import "./Player.css";

export default function Player({ name, score, setScore }) {
  return (
    <li className="player">
      <p className="player__name">{name}</p>
      <div className="player__score">
        <button onClick={() => setScore("minus")}>-</button>
        <p>{score}</p>
        <button onClick={() => setScore("plus")}>+</button>
      </div>
    </li>
  );
}
