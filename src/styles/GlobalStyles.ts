import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styles from "./styles";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration:none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        color:white;
        padding-top:80px;
        background-color: ${styles.BackGroundColor};
      
    }
`;

export default globalStyles;