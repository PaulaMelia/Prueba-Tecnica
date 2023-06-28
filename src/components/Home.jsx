import { useState } from "react";
/*import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #f2f2f2;
`;
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledListItem = styled.li`
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 10px;
`;
const Home = (props) => {
  const { dadas } = props;

  return (
    <StyledContainer>
      <h1>Hola</h1>
      <StyledList>
        {dadas.map((object) => (
          <StyledListItem key={object.id}>
            <p>ID: {object.id}</p>
            <p>Name: {object.name}</p>
            <p>Years: {object.years}</p>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
};

export default Home;*/

const Home = (props) => {
  const { dadas } = props;

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hola</h1>

      <button onClick={handleIncrement}>Incrementar</button>
      <p>Contador: {count}</p>

      {dadas.map((object) => (
        <div key={object.id}>
          <p>ID: {object.id}</p>
          <p>Nombre: {object.name}</p>
          <p>Edad: {object.years}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
