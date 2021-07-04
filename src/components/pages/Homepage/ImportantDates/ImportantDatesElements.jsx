import styled from 'styled-components';

export const Container = styled.div`
 /* width: 100vw; */
 min-height: 70vh;
 padding: 1rem calc((100vw - 1300px) / 2);
 background: black;
 color: #fff;
`;

export const Wrapper = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin: 0 auto;
`;

export const Card = styled.div`
 margin: 0 2rem;
 line-height: 1;
 width: 20%;
 background-color: black;
`;

export const Icon= styled.div`
  height: 40px;
   min-width: 40px;
   max-width: 100%;
   margin-bottom: 10%;

`;

export const Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: white;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: white;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

