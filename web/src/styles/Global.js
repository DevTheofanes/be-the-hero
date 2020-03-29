import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  
  body,html,#root{
    min-height:100%;
    -webkit-font-smoothing: antialiased !important;
  }
  body{
    background: #f0f0f5; 
  }
  body, input, button, textarea{
    font: 14px 'Roboto' sans-serif;
    text-rendering: optimizeLegibility !important;
  }

  a{
    text-decoration:none;
    display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      font-size: 18px;
      font-weight: bold;
      transition: opacity 0.2s;
      a:hover {
        opacity: 0.8;
      }
      svg {
        margin: 10px;
      }
  }

  ul{
    list-style:none;
  }
  button{
    cursor:pointer;
    border:none;
  }
  .button{
    cursor:pointer;
    
      width: 100%;
      height: 60px;
      background-color: #e02041;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: bold;
      margin-top: 16px;
      display: inline-block;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;

    button:hover {
      filter: brightness(90%);
    }
  }
  form input{
    border: 1px solid #dcdce6;
    width: 100%;
    height: 60px;
    color: #333;
    border-radius: 8px;
    padding: 0 24px;
  }
  form textarea{
    border: 1px solid #dcdce6;
    width: 100%;
    resize:vertical;
    min-height: 140px;
    color: #333;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }
`;
