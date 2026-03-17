import { createGlobalStyle } from "styled-components";

const global = createGlobalStyle`
body {
  margin: 0;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
	font-size: 62.5%;
	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	letter-spacing: 0.05rem;
	-ms-user-select: none; /* Internet Explorer/Edge */
}

code {
  font-family: "Poppins", source-code-pro, Menlo, Monaco, Consolas,
    "Courier New", monospace;
}
`;

export default global;
