import * as React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

interface State {
  language: string;
}

class App extends React.Component<{}, State> {
  state: State = {
    language: 'english'
  };

  onLanguageChange = (language: string) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <LanguageSelector onLanguageChange={this.onLanguageChange} />

        <ColorContext.Provider value='red'>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;