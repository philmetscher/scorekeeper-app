import styled from "styled-components";

export default function PlayerForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const name = data.playername;

    onSubmit(name);
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="playername">Add player:</label>
      <input
        id="playername"
        name="playername"
        placeholder="Player name"
        type="text"
      />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  input {
    padding: 9px 10px;
    line-height: 22px;
    border: 1px solid #333;
    border-radius: 21px;
    font-size: 1.2rem;
  }
`;
