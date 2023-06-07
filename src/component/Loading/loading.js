import styled from "styled-components";

export default function Loading() {
  return (
    <Container>
      <div className="spinner-container">
        <div className="loading-spinner">Loading ...</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid #f7f7f7; /* Light grey */
    border-top: 10px solid #white; /* Black */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;
