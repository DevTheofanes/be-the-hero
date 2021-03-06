import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;

    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      button {
        position: absolute;
        right: 24px;
        top: 24px;
        background: transparent;
      }
      button:hover {
        opacity: 0.8;
      }
      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
      }
      p + strong {
        margin-top: 32px;
      }
      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 20px;
    margin-left: 24px;
  }
  img {
    height: 64px;
  }
  a {
    width: 260px;
    text-align: center;
    margin-left: auto;
    margin-top: 0;
  }
  button {
    height: 60px;
    width: 60px;
    border-radius: 6px;
    border: 1px solid #dcdce6;
    margin-left: 16px;
    background: transparent;
    transition: border-color 0.2s;
  }
  button:hover {
    border-color: #999;
  }
`;
