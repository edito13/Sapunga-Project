import styled from 'styled-components';

export const Header = styled.header`
  background: url('./assets/Images/1.jpg')no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: cover;
  height: 80vh;
  
  & > div{
    background: linear-gradient(to bottom, #000000af 80%, transparent);
    height: 100%;
    width: 100%;
    padding: 3em 0;
    color: #fff;

    & > h1{
        font-size: 4.5em;
        letter-spacing: 5px;
        font-weight: bolder;
        text-align: center;
        margin-top: 1em;
    }
    p{
        text-align: center;
        font-size: 1.2em;
    }

    & > div{
      display: flex;
      justify-content: center;
      margin-top: 3em;
    }
  }
`;