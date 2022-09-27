import styled from "styled-components";

export default function PlayerForm() {
  return (
    <Form>
      <label htmlFor="playername">Add player:</label>
      <input id="playername" placeholder="Player name" />
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
