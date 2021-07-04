import styled from 'styled-components';
import ImgBg from '../images/tech.jpg';

export const HeroContainer = styled.div`
  display: flex;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${ImgBg});
  height: auto;
  background-position:center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 70%;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  display: flex;
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-left: 11rem;
  margin-bottom: 1rem;
  letter-spacing: 3px;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  text-outline: black 5px;
`;

export const HeroP = styled.p`
  display: flex;
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  margin-left: 6rem;
`;

export const HeroP1 = styled.p`
  display: flex;
  font-size: clamp(2rem, 1vw, 3rem);
  margin-bottom: 0.5rem;
  margin-left: 6rem;
`;
export const HeroP2 = styled.p`
  display: flex;
  font-size: clamp(1rem, 1vw, 3rem);
  margin-bottom: 2rem;
  margin-left: 4rem;
  text-shadow: black;
  
`;



