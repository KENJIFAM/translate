import * as React from 'react';

interface State {
  language: string;
}

interface Context {
  language: string;
  onLanguageChange: (language: string) => void;
}

const Context = React.createContext<Context>(undefined);

export class LanguageStore extends React.Component<{}, State> {
  state = { language: 'english' };

  onLanguageChange = (language: string) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
