export default function Player({ name, score, setScore }) {
  return (
    <li>
      <p className="player-name">{name}</p>
      <div className="player-score">
        <button onClick={() => setScore("minus")}>-</button>
        <p>{score}</p>
        <button onClick={() => setScore("plus")}>+</button>
      </div>
    </li>
  );
}
