import styled from 'styled-components';
//import FeaturePic from '../../images/featured3.jpg';


export const FeatureContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-height: 350px;
  //min-height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //color:black;
  //background: linear-gradient(to bottom, #000000 0%, #800000 100%);
  background: linear-gradient(to bottom, #000000 0%, #003366 100%);
  text-align: center;
  

  h2 {
    font-size: clamp(3rem, 5vw, 3rem);
    //font-size: 50px;
    margin-bottom: 5rem;
    margin-top: -15%;
    color:white;
  }

  p {
    margin-bottom: -15%;
    font-size: clamp(1rem, 1vw, 2rem);
    color: white;
  }
  h3 {
    font-size: clamp(2rem, 3vw, 3rem);
  }
`;




