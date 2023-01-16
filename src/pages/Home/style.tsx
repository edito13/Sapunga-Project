import styled from "styled-components";

export const Container = styled.main`
  section {
    width: 100%;
    max-width: 1200px;
    margin: 8em auto;
  }

  .Introduce-banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    font-size: 100%;
    max-width: 90%;
    margin: 5em auto 0;

    .content {
      p {
        max-width: 350px;
        font-size: 1.1em;
        line-height: 25px;
        margin-bottom: 1em;
        text-align: center;

        span {
          font-weight: bold;
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        margin-top: 2em;
      }
    }
  }

  .Quem-somos {
    margin-bottom: 12em;

    p {
      background: #eee;
      padding: 2em 2em 8em;
      line-height: 25px;
    }
  }

  .Services {
    margin: 10em 0 0;
    max-width: 100%;

    h3 {
      font-size: 1.8em;
      text-transform: uppercase;
    }

    h3::after {
      content: "";
      display: block;
      height: 2px;
      background: currentColor;
      width: 60%;
      margin-top: 4px;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 40vh;
      gap: 2em;

      ul {
        li {
          display: flex;
          align-items: center;
          gap: 6px;

          span {
            border: 2px solid #42c713;
            width: 13px;
            height: 13px;
            border-radius: 50%;
          }
        }

        li + li {
          margin-top: 4%;
        }
      }

      p {
        color: #eee;
      }

      a {
        font-weight: bold;
      }
    }

    .agricultura {
      padding: 2em;
      background: url("./assets/Images/Grupo 18.png");
      background-size: cover;
      background-position: 32%;

      .content {
        align-items: flex-start;

        h3 {
          color: #42c713;
        }
      }
    }

    .grafica {
      padding: 2em;
      background: url("./assets/Images/Grupo 19.png");
      background-size: cover;
      background-position: 68%;

      .content {
        align-items: flex-end;

        h3 {
          color: #7d72b2;

          &::after {
            margin-left: auto;
          }
        }

        ul li span {
          border-color: #7d72b2;
        }
      }
    }
  }

  @media (min-width: 400px) {
    .agricultura {
      background-position: 38%;
    }

    .grafica {
      background-position: 62%;
    }
  }

  @media (min-width: 500px) {
    .Introduce-banner .content p {
      font-size: 1.3em;
      max-width: 400px;
    }
  }

  @media (min-width: 750px) {
    .Introduce-banner {
      flex-direction: row;
      gap: 8%;
      margin-top: 5em;
      

      .content p {
        margin-bottom: 1.5em;
        font-size: 1.4em;
        text-align: left;
        line-height: 1.4em;
      }
    }

    .Quem-somos {
      .content {
        margin-top: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1200px;

        p {
          max-width: 400px;
          padding-bottom: 2em;
          margin-right: -3em;
          position: relative;
          z-index: 99999;
          border-radius: 9px;
        }
      }
    }

    .Services {
      .content {
        padding: 3em;
        min-height: 70vh;

        p {
          font-size: 1.2em;
        }

        ul li span {
          width: 15px;
          height: 15px;
          border-width: 3px;
        }

        ul li + li {
          margin-top: 8%;
        }
      }

      .agricultura {
        background-position: 30%;
      }
      .grafica {
        background-position: 60%;
      }
    }
  }

  @media (min-width: 1000px) {

    .Services {
      .content {
        padding: 3em;
        min-height: 70vh;

        p {
          font-size: 1.4em;
        }

        ul li span {
          width: 20px;
          height: 20px;
          border-width: 3px;
        }

        ul li + li {
          margin-top: 6%;
        }
      }
    }
  }
`;

export const ImageContainer = styled.div`
  background: url("./assets/Images/7.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  height: 280px;
  width: 220px;
  border-radius: 12px;
  border: 6px solid #fff;
  position: relative;
  margin: 2em;

  &::after {
    content: "";
    display: block;
    width: inherit;
    height: inherit;
    background: url("./assets/Images/4.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 12px;
    position: relative;
    top: -30px;
    left: 30px;
    z-index: -1;
  }

  @media (min-width: 750px) {
    height: 310px;
    width: 250px;
  }
`;

export const ImgDescribe = styled.div`
  background: url("./assets/Images/15.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 400px;
  position: relative;

  &::before {
    content: "";
    background: url("./assets/Images/13.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    border: 10px solid #42c713;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    top: -7em;
    animation: animationLine 3s linear alternate infinite;
  }
  &::after {
    content: "";
    background: url("./assets/Images/14.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    border: 10px solid #42c713;
    animation: animationLine 3s linear alternate-reverse infinite;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    bottom: -7em;
  }

  @media (min-width: 750px) {
    border-radius: 9px;
    max-width: 400px;
    min-height: 600px;

    &::before {
      width: 170px;
      height: 170px;
      border-width: 6px;
      top: -5em;
    }
    &::after {
      width: 170px;
      height: 170px;
      border-width: 6px;
      bottom: -5em;
    }
  }

  @keyframes animationLine {
    from {
      right: 52%;
    }
    to {
      right: 0;
    }
  }
`;
