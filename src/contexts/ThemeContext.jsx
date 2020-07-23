import React, { Component, createContext } from "react";

const Context = createContext();
const themeConfig = {
  light: {
    fontColor: "black",
    bodybg: "white",
  },
  dark: {
    fontColor: "white",
    bodybg: "black",
  },
};

class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  toggleTheme = () => {
    this.setState((prevTheme) => {
      if (prevTheme.theme === "light") {
        return { theme: "dark", themeConfig: themeConfig.dark };
      } else {
        return { theme: "light", themeConfig: themeConfig.light };
      }
    });
  };

  state = {
    theme: "light",
    themeConfig: themeConfig.light,
    toggleTheme: this.toggleTheme,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ThemeContext;


