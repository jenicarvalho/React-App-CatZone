import styled from 'styled-components'

export const Container = styled.section`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  text-align: center;
  padding: 30px;
  margin: 20px auto;

  h1 {
    text-align: center;
    display: block;
    font-size: 35px

    svg { 
      margin-left: 5px; 
      color: #7159c1;
    }
  }

  img {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 2px;
  color: #fff;
  text-transform: uppercase;
  margin: 10px 0;
  padding: 5px 10px;
  background-color: #7159c1;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`;