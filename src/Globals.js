import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    body {
      color: #000;
      font-family: "HelveticaNeueCyr", Arial, sans-serif;
  }
  
  .container {
      width: 1000px;
      padding: 0 20px;
      margin: 0 auto;
  }
  
  .visually-hidden {
      position: absolute !important;
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0 !important;
      border: 0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden;
  }
  
  .main__search {
      margin-bottom: 14px;
  }
`;
