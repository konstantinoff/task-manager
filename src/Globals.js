import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @font-face {
      font-family: "HelveticaNeueCyr";
      src: local("HelveticaNeueCyr-Bold"),
      url("./fonts/HelveticaNeueCyr-Bold.woff2") format("woff"),
      url("./fonts/HelveticaNeueCyr-Bold.woff") format("woff");
      font-weight: bold;
      font-style: normal;
  }
  
  @font-face {
      font-family: "HelveticaNeueCyr";
      src: local("HelveticaNeueCyr-Medium"),
      url("./fonts/HelveticaNeueCyr-Medium.woff2") format("woff2"),
      url("./fonts/HelveticaNeueCyr-Medium.woff") format("woff");
      font-weight: 500;
      font-style: normal;
  }
  
  @font-face {
      font-family: "HelveticaNeueCyr";
      src: local("HelveticaNeueCyr-Roman"),
      url("./fonts/HelveticaNeueCyr-Roman.woff2") format("woff2"),
      url("./fonts/HelveticaNeueCyr-Roman.woff") format("woff");
      font-weight: normal;
      font-style: normal;
  }
  
  body {
      font-family: "HelveticaNeueCyr", Arial, sans-serif;
  }
  
  .container {
      width: 960px;
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
