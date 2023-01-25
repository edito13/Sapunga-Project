import styled from "styled-components";

export const Container = styled.main`
  form {
    margin: 1em 0;
    padding: 0 1em;

    fieldset {
      border: none;

      caption {
        padding-bottom: 0.5em;
        display: block;
        text-align: left;
        font-size: 1.3em;
        color: #444;
        border-bottom: 1px solid currentColor;
      }

      input,
      textarea {
        border: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0.6em 0.8em;
        font-size: 1.2em;
        width: 100%;
        margin-top: 1.5em;
        color: #444;
      }
    }

    fieldset + fieldset {
      margin-top: 3em;
    }
  }
`;
