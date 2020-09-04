import React, {useContext} from 'react';

const themes = {
  light: {
    foreground: "black",
    background: "#cccccc"
  },
  dark: {
    foreground: "white",
    background: "#222222"
  }
};

const ThemeContext = React.createContext();
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ChildIbButton(props) {
  return <>
    <h2>{props.color}</h2>
  </>
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <>
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
    <ChildIbButton color={theme.background}/>
  </>;
}

function TutuarialContext() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default TutuarialContext;