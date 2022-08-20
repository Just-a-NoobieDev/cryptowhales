import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => {
  return (
    <Container>
      <h1>NotFound</h1>
    </Container>
  );
};

export default NotFound;
